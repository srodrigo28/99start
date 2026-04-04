import { useMemo, useState } from "react";
import { Text, View } from "react-native";

import { GlassPanel, ScreenContainer, SectionLabel } from "../../shared/components";
import { useResponsive } from "../../shared/hooks";
import {
  CommandaHeader,
  OrderCard,
  OrderDetail,
  OrderStatus,
  PaymentModal,
} from "./components";

type PaymentMethod = "cartao" | "dinheiro" | "pix";

type CommandasScreenProps = {
  onBackDashboard: () => void;
  onGoTables: () => void;
};

type Order = {
  id: string;
  code: string;
  customer: string;
  place: string;
  date: string;
  status: OrderStatus;
  totalLabel: string;
  totalValue: number;
  items: Array<{ label: string; value: string }>;
};

const mockOrders: Order[] = [
  {
    id: "1",
    code: "#1768343621162",
    customer: "Mateus Vinicius",
    place: "Mesa 12 - Saraiva Bar",
    date: "13/01/2026, 23:34",
    status: "ativa",
    totalLabel: "R$ 27,00",
    totalValue: 27,
    items: [{ label: "3x carne no espeto", value: "R$ 27,00" }],
  },
  {
    id: "2",
    code: "#1766423921796",
    customer: "Heionekm",
    place: "Balcao - Saraiva Bar",
    date: "22/12/2025, 18:43",
    status: "fechando",
    totalLabel: "R$ 75,00",
    totalValue: 75,
    items: [
      { label: "3x heionekm", value: "R$ 75,00" },
      { label: "1x carne no espeto", value: "R$ 9,00" },
    ],
  },
  {
    id: "3",
    code: "#1765400128872",
    customer: "Julia Costa",
    place: "Mesa 05 - Quinta da Serra",
    date: "09/03/2026, 19:21",
    status: "pagamento",
    totalLabel: "R$ 122,00",
    totalValue: 122,
    items: [
      { label: "2x picanha na chapa", value: "R$ 89,90" },
      { label: "1x refrigerante em lata", value: "R$ 12,00" },
      { label: "1x batata rustica", value: "R$ 20,10" },
    ],
  },
];

export function CommandasScreen({
  onBackDashboard,
  onGoTables,
}: CommandasScreenProps) {
  const { heroTitleLineHeight, heroTitleSize, sectionPadding } = useResponsive();
  const [selectedOrderId, setSelectedOrderId] = useState<string>(mockOrders[1].id);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);

  const selectedOrder = useMemo(
    () => mockOrders.find((order) => order.id === selectedOrderId) ?? mockOrders[0],
    [selectedOrderId],
  );

  return (
    <ScreenContainer>
      <CommandaHeader
        onBackDashboard={onBackDashboard}
        onGoTables={onGoTables}
      />

      <GlassPanel className="mb-4">
        <View className="gap-5" style={{ padding: sectionPadding }}>
          <SectionLabel eyebrow="Fila operacional" />
          <Text
            className="font-bold text-white"
            style={{ fontSize: heroTitleSize, lineHeight: heroTitleLineHeight }}
          >
            Priorize caixa e atendimento.
          </Text>
          <View className="self-start rounded-full border border-[#405067] bg-[#1d2735] px-5 py-3">
            <Text className="text-sm font-semibold text-white">Filtrar status</Text>
          </View>

          <View className="gap-4">
            {mockOrders.map((order) => (
              <OrderCard
                key={order.id}
                code={order.code}
                customer={order.customer}
                place={order.place}
                date={order.date}
                status={order.status}
                total={order.totalLabel}
                items={order.items}
                onOpenDetail={() => setSelectedOrderId(order.id)}
                onUpdateStatus={() => setSelectedOrderId(order.id)}
              />
            ))}
          </View>
        </View>
      </GlassPanel>

      <OrderDetail
        code={selectedOrder.code}
        customer={selectedOrder.customer}
        place={selectedOrder.place}
        status={selectedOrder.status}
        items={selectedOrder.items}
        total={selectedOrder.totalLabel}
        onPayment={setPaymentMethod}
      />

      <PaymentModal
        visible={Boolean(paymentMethod)}
        method={paymentMethod ?? "pix"}
        orderTotal={selectedOrder.totalValue}
        onClose={() => setPaymentMethod(null)}
      />
    </ScreenContainer>
  );
}
