import { useMemo, useState } from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { FormAlert, GlassPanel } from "../../../shared/components";
import {
  formatCardNumber,
  formatCurrencyInput,
  formatExpiry,
  formatSecurityCode,
  isCardNumber,
  isExpiry,
  isSecurityCode,
  parseCurrencyInput,
} from "../../../shared/utils";
import { TextField } from "../../cadastro/components";
import { FakeQrCode } from "./FakeQrCode";

type PaymentMethod = "cartao" | "dinheiro" | "pix";
type CardType = "credito" | "debito";
type ChangeMethod = "dinheiro" | "pix";

type PaymentModalProps = {
  visible: boolean;
  method: PaymentMethod;
  orderTotal: number;
  onClose: () => void;
};

export function PaymentModal({
  visible,
  method,
  orderTotal,
  onClose,
}: PaymentModalProps) {
  const [cardType, setCardType] = useState<CardType>("credito");
  const [changeMethod, setChangeMethod] = useState<ChangeMethod>("dinheiro");
  const [cardName, setCardName] = useState("HEIONEKM");
  const [cardNumber, setCardNumber] = useState("4557 0900 1122 3344");
  const [expiry, setExpiry] = useState("12/28");
  const [cvv, setCvv] = useState("123");
  const [cashReceived, setCashReceived] = useState("150,00");
  const [pixKey, setPixKey] = useState("cliente@pix.com");
  const [alert, setAlert] = useState<
    { title: string; message?: string; variant: "error" | "success" | "info" } | undefined
  >();

  const cashChange = useMemo(() => {
    const received = parseCurrencyInput(cashReceived);
    return Math.max(received - orderTotal, 0);
  }, [cashReceived, orderTotal]);

  const orderTotalLabel = useMemo(
    () =>
      orderTotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
    [orderTotal],
  );

  const changeLabel = useMemo(
    () =>
      cashChange.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
    [cashChange],
  );

  const closeAndReset = () => {
    setAlert(undefined);
    onClose();
  };

  const confirmCard = () => {
    if (!cardName.trim() || !isCardNumber(cardNumber) || !isExpiry(expiry) || !isSecurityCode(cvv)) {
      setAlert({
        title: "Dados do cartao incompletos",
        message: "Revise titular, numero, validade e codigo de seguranca antes de confirmar.",
        variant: "error",
      });
      return;
    }

    setAlert({
      title: "Cartao confirmado",
      message: `Pagamento em ${cardType} pronto para fechamento local de ${orderTotalLabel}.`,
      variant: "success",
    });
  };

  const confirmCash = () => {
    if (parseCurrencyInput(cashReceived) < orderTotal) {
      setAlert({
        title: "Valor recebido insuficiente",
        message: "Digite um valor em dinheiro igual ou maior do que o total da comanda.",
        variant: "error",
      });
      return;
    }

    if (changeMethod === "pix" && !pixKey.trim()) {
      setAlert({
        title: "Informe a chave PIX do troco",
        message: "Quando o troco for devolvido por PIX, a chave precisa estar preenchida.",
        variant: "error",
      });
      return;
    }

    setAlert({
      title: "Pagamento em dinheiro confirmado",
      message:
        changeMethod === "pix"
          ? `Troco de ${changeLabel} sera devolvido por PIX.`
          : `Troco de ${changeLabel} sera devolvido em dinheiro.`,
      variant: "success",
    });
  };

  const confirmPix = () => {
    setAlert({
      title: "Pagamento PIX pronto",
      message: "QRCode exibido com sucesso. A proxima etapa sera confirmar o fechamento na API.",
      variant: "success",
    });
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={closeAndReset}>
      <View className="flex-1 bg-[#040b14]/80 px-3 py-6">
        <View className="flex-1 justify-center">
          <GlassPanel className="max-h-full">
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 20 }}>
              <View className="mb-5 flex-row items-start justify-between gap-4">
                <View className="flex-1 gap-2">
                  <Text className="text-[11px] font-bold uppercase tracking-[3px] text-[#f0bb57]">
                    {method === "cartao"
                      ? "Pagamento com cartao"
                      : method === "dinheiro"
                        ? "Pagamento em dinheiro"
                        : "Pagamento pix"}
                  </Text>
                  <Text className="text-[24px] font-bold text-white">
                    {method === "cartao"
                      ? "Checkout premium"
                      : method === "dinheiro"
                        ? "Troco inteligente"
                        : "Pagamento Pix"}
                  </Text>
                  <Text className="text-sm leading-7 text-[#a9bdd8]">
                    {method === "cartao"
                      ? `Preencha os dados do cartao e confirme o recebimento de ${orderTotalLabel}.`
                      : method === "dinheiro"
                        ? "Digite quanto foi recebido e escolha como devolver o troco ao cliente."
                        : `Mostre a tela para o cliente ou copie o codigo pelo valor exato de ${orderTotalLabel}.`}
                  </Text>
                </View>
                <Pressable
                  onPress={closeAndReset}
                  className="h-11 w-11 items-center justify-center rounded-full border border-[#3f4d62] bg-[#202938]"
                >
                  <Text className="text-lg font-bold text-white">x</Text>
                </Pressable>
              </View>

              {alert ? (
                <FormAlert
                  title={alert.title}
                  message={alert.message}
                  variant={alert.variant}
                  onClose={() => setAlert(undefined)}
                />
              ) : null}

              {method === "cartao" ? (
                <View className="gap-4">
                  <LinearGradient
                    colors={["#183d6a", "#152442", "#264e9d"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ borderRadius: 24, padding: 18 }}
                  >
                    <View className="flex-row items-center justify-between">
                      <Text className="text-sm font-semibold uppercase tracking-[3px] text-[#dff0ff]">
                        99Start Pay
                      </Text>
                      <View className="rounded-full border border-[#4b5a75] bg-[#22304b] px-3 py-1">
                        <Text className="text-sm font-semibold text-[#dce7f6] capitalize">
                          {cardType}
                        </Text>
                      </View>
                    </View>
                    <View className="mt-6 h-11 w-14 rounded-2xl bg-[#f0c54f]" />
                    <Text className="mt-8 text-[18px] tracking-[3px] text-white">
                      {cardNumber}
                    </Text>
                    <View className="mt-6 flex-row justify-between gap-4">
                      <View>
                        <Text className="text-[11px] uppercase tracking-[3px] text-[#95a8c6]">
                          Titular
                        </Text>
                        <Text className="mt-2 text-base font-semibold text-white">
                          {cardName || "HEIONEKM"}
                        </Text>
                      </View>
                      <View>
                        <Text className="text-[11px] uppercase tracking-[3px] text-[#95a8c6]">
                          Validade
                        </Text>
                        <Text className="mt-2 text-base font-semibold text-white">
                          {expiry || "12/28"}
                        </Text>
                      </View>
                    </View>
                  </LinearGradient>

                  <View className="flex-row gap-3">
                    <Pressable
                      onPress={() => setCardType("credito")}
                      className={`flex-1 rounded-[18px] border px-4 py-4 ${
                        cardType === "credito"
                          ? "border-[#f0b84a] bg-[#3f3219]"
                          : "border-[#33435a] bg-[#202938]"
                      }`}
                    >
                      <Text className="text-center text-base font-semibold text-white">Credito</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => setCardType("debito")}
                      className={`flex-1 rounded-[18px] border px-4 py-4 ${
                        cardType === "debito"
                          ? "border-[#f0b84a] bg-[#3f3219]"
                          : "border-[#33435a] bg-[#202938]"
                      }`}
                    >
                      <Text className="text-center text-base font-semibold text-white">Debito</Text>
                    </Pressable>
                  </View>

                  <TextField
                    label="Nome impresso no cartao"
                    placeholder="HEIONEKM"
                    value={cardName}
                    onChangeText={setCardName}
                  />
                  <TextField
                    label="Numero do cartao"
                    placeholder="4557 0900 1122 3344"
                    value={cardNumber}
                    onChangeText={(value) => setCardNumber(formatCardNumber(value))}
                    keyboardType="number-pad"
                  />
                  <View className="flex-row gap-3">
                    <View className="flex-1">
                      <TextField
                        label="Validade"
                        placeholder="12/28"
                        value={expiry}
                        onChangeText={(value) => setExpiry(formatExpiry(value))}
                        keyboardType="number-pad"
                      />
                    </View>
                    <View className="flex-1">
                      <TextField
                        label="CVV"
                        placeholder="123"
                        value={cvv}
                        onChangeText={(value) => setCvv(formatSecurityCode(value))}
                        keyboardType="number-pad"
                      />
                    </View>
                  </View>

                  <View className="rounded-[20px] border border-[#1a7158] bg-[#10352d] px-4 py-4">
                    <Text className="text-base font-semibold text-[#b4ffe3]">
                      Valor final no cartao: {orderTotalLabel}
                    </Text>
                  </View>

                  <View className="flex-row gap-3">
                    <Pressable
                      onPress={closeAndReset}
                      className="flex-1 rounded-[18px] border border-[#33435a] bg-[#202938] px-5 py-4"
                    >
                      <Text className="text-center text-base font-semibold text-white">Cancelar</Text>
                    </Pressable>
                    <LinearGradient
                      colors={["#4476ff", "#28c8e8"]}
                      start={{ x: 0, y: 0.5 }}
                      end={{ x: 1, y: 0.5 }}
                      style={{ flex: 1, borderRadius: 18 }}
                    >
                      <Pressable onPress={confirmCard} className="px-5 py-4">
                        <Text className="text-center text-base font-semibold text-white">
                          Confirmar cartao
                        </Text>
                      </Pressable>
                    </LinearGradient>
                  </View>
                </View>
              ) : null}

              {method === "dinheiro" ? (
                <View className="gap-4">
                  <View className="rounded-[26px] border border-[#15765a] bg-[#0e2f28] px-4 py-4">
                    <Text className="text-[11px] font-bold uppercase tracking-[3px] text-[#8de3c2]">
                      Resumo do caixa
                    </Text>
                    <View className="mt-4 flex-row gap-3">
                      <View className="flex-1 rounded-[20px] bg-[#07261f] px-4 py-4">
                        <Text className="text-[11px] uppercase tracking-[3px] text-[#8ccdb8]">
                          Total da comanda
                        </Text>
                        <Text className="mt-3 text-[20px] font-bold text-white">{orderTotalLabel}</Text>
                      </View>
                      <View className="flex-1 rounded-[20px] bg-[#07261f] px-4 py-4">
                        <Text className="text-[11px] uppercase tracking-[3px] text-[#8ccdb8]">
                          Recebido
                        </Text>
                        <Text className="mt-3 text-[20px] font-bold text-white">
                          {cashReceived ? `R$ ${cashReceived}` : "R$ 0,00"}
                        </Text>
                      </View>
                    </View>
                    <View className="mt-3 rounded-[20px] bg-[#315046] px-4 py-4">
                      <Text className="text-[11px] uppercase tracking-[3px] text-[#c8e7db]">Troco</Text>
                      <Text className="mt-3 text-[20px] font-bold text-white">{changeLabel}</Text>
                    </View>
                  </View>

                  <TextField
                    label="Valor recebido em dinheiro"
                    placeholder="150,00"
                    value={cashReceived}
                    onChangeText={(value) => setCashReceived(formatCurrencyInput(value))}
                    keyboardType="number-pad"
                  />

                  <View className="gap-3">
                    <Text className="text-[11px] font-bold uppercase tracking-[3px] text-[#d7e3f5]">
                      Devolver troco por
                    </Text>
                    <View className="flex-row gap-3">
                      <Pressable
                        onPress={() => setChangeMethod("dinheiro")}
                        className={`flex-1 rounded-[18px] border px-4 py-4 ${
                          changeMethod === "dinheiro"
                            ? "border-[#15765a] bg-[#10352d]"
                            : "border-[#33435a] bg-[#202938]"
                        }`}
                      >
                        <Text className="text-center text-base font-semibold text-white">Dinheiro</Text>
                      </Pressable>
                      <Pressable
                        onPress={() => setChangeMethod("pix")}
                        className={`flex-1 rounded-[18px] border px-4 py-4 ${
                          changeMethod === "pix"
                            ? "border-[#1f537b] bg-[#10324f]"
                            : "border-[#33435a] bg-[#202938]"
                        }`}
                      >
                        <Text className="text-center text-base font-semibold text-white">PIX</Text>
                      </Pressable>
                    </View>
                  </View>

                  {changeMethod === "pix" ? (
                    <TextField
                      label="Chave pix para devolver o troco"
                      placeholder="cliente@pix.com"
                      value={pixKey}
                      onChangeText={setPixKey}
                      autoCapitalize="none"
                    />
                  ) : null}

                  <View
                    className={`rounded-[20px] border px-4 py-4 ${
                      changeMethod === "pix"
                        ? "border-[#1f537b] bg-[#10324f]"
                        : "border-[#15765a] bg-[#10352d]"
                    }`}
                  >
                    <Text className="text-base font-semibold text-white">
                      {changeMethod === "pix"
                        ? `Troco de ${changeLabel} sera devolvido por PIX para ${pixKey || "a chave informada"}.`
                        : `Troco de ${changeLabel} sera devolvido em dinheiro.`}
                    </Text>
                  </View>

                  <View className="flex-row gap-3">
                    <Pressable
                      onPress={closeAndReset}
                      className="flex-1 rounded-[18px] border border-[#33435a] bg-[#202938] px-5 py-4"
                    >
                      <Text className="text-center text-base font-semibold text-white">Cancelar</Text>
                    </Pressable>
                    <LinearGradient
                      colors={["#23c8a0", "#63e2a4"]}
                      start={{ x: 0, y: 0.5 }}
                      end={{ x: 1, y: 0.5 }}
                      style={{ flex: 1, borderRadius: 18 }}
                    >
                      <Pressable onPress={confirmCash} className="px-5 py-4">
                        <Text className="text-center text-base font-semibold text-[#092118]">
                          Confirmar dinheiro
                        </Text>
                      </Pressable>
                    </LinearGradient>
                  </View>
                </View>
              ) : null}

              {method === "pix" ? (
                <View className="gap-5">
                  <FakeQrCode />
                  <Pressable className="rounded-[22px] border border-[#2a374d] bg-[#1a2331] px-5 py-5">
                    <Text className="text-center text-[16px] font-semibold text-white">
                      Copiar Codigo (Copia e Cola)
                    </Text>
                  </Pressable>
                  <LinearGradient
                    colors={["#4476ff", "#28c8e8"]}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={{ borderRadius: 18 }}
                  >
                    <Pressable onPress={confirmPix} className="px-5 py-4">
                      <Text className="text-center text-base font-semibold text-white">
                        Confirmar fechamento
                      </Text>
                    </Pressable>
                  </LinearGradient>
                </View>
              ) : null}
            </ScrollView>
          </GlassPanel>
        </View>
      </View>
    </Modal>
  );
}
