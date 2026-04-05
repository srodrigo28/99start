import { onlyDigits } from "./masks";

export function isRequired(value: string) {
  return value.trim().length > 0;
}

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isPhone(value: string) {
  return onlyDigits(value).length >= 10;
}

export function isCep(value: string) {
  return onlyDigits(value).length === 8;
}

export function isStrongPassword(value: string) {
  return (
    value.length >= 8 &&
    /[A-Z]/.test(value) &&
    /[a-z]/.test(value) &&
    /\d/.test(value)
  );
}

export function isPixKey(value: string) {
  return onlyDigits(value).length >= 8;
}

export function isCardNumber(value: string) {
  return onlyDigits(value).length === 16;
}

export function isExpiry(value: string) {
  return /^(0[1-9]|1[0-2])\/\d{2}$/.test(value);
}

export function isSecurityCode(value: string) {
  const digits = onlyDigits(value);
  return digits.length >= 3 && digits.length <= 4;
}

export function isCurrencyAmount(value: string) {
  return parseFloat(value.replace(/\./g, "").replace(",", ".")) > 0;
}

export function isCnpj(value: string) {
  const digits = onlyDigits(value);

  if (digits.length !== 14 || /^(\d)\1+$/.test(digits)) return false;

  let length = 12;
  let numbers = digits.substring(0, length);
  let sum = 0;
  let pos = length - 7;

  for (let i = length; i >= 1; i -= 1) {
    sum += Number(numbers[length - i]) * pos;
    pos -= 1;
    if (pos < 2) pos = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== Number(digits[12])) return false;

  length = 13;
  numbers = digits.substring(0, length);
  sum = 0;
  pos = length - 7;

  for (let i = length; i >= 1; i -= 1) {
    sum += Number(numbers[length - i]) * pos;
    pos -= 1;
    if (pos < 2) pos = 9;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  return result === Number(digits[13]);
}
