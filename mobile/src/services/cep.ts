import { onlyDigits } from "../shared/utils";

export type CepLookupResult = {
  address: string;
  neighborhood: string;
  city: string;
  state: string;
};

type ViaCepResponse = {
  erro?: boolean;
  logradouro?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
};

export async function lookupCep(cep: string): Promise<CepLookupResult> {
  const digits = onlyDigits(cep);

  if (digits.length !== 8) {
    throw new Error("Informe um CEP com 8 digitos.");
  }

  const response = await fetch(`https://viacep.com.br/ws/${digits}/json/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Nao foi possivel consultar o CEP agora.");
  }

  const payload = (await response.json()) as ViaCepResponse;

  if (payload.erro) {
    throw new Error("CEP nao encontrado.");
  }

  return {
    address: payload.logradouro?.trim() ?? "",
    neighborhood: payload.bairro?.trim() ?? "",
    city: payload.localidade?.trim() ?? "",
    state: payload.uf?.trim() ?? "",
  };
}
