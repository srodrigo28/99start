export function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function formatCnpj(value: string) {
  const digits = onlyDigits(value).slice(0, 14);

  return digits
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

export function formatPhone(value: string) {
  const digits = onlyDigits(value).slice(0, 11);

  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function trimMultilineSpaces(value: string) {
  return value.replace(/\s+/g, " ").trimStart();
}

export function formatPixKey(value: string) {
  return onlyDigits(value).slice(0, 32);
}

export function formatCardNumber(value: string) {
  const digits = onlyDigits(value).slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
}

export function formatExpiry(value: string) {
  const digits = onlyDigits(value).slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

export function formatSecurityCode(value: string) {
  return onlyDigits(value).slice(0, 4);
}

export function formatCurrencyInput(value: string) {
  const digits = onlyDigits(value);
  const cents = Number(digits || "0");
  const amount = cents / 100;
  return amount.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function parseCurrencyInput(value: string) {
  const digits = onlyDigits(value);
  return Number(digits || "0") / 100;
}
