export type ApiEnvelope<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type ApiErrorEnvelope = {
  success: false;
  message: string;
  errors: string[];
};

export type AuthUser = {
  id: number;
  owner_name: string;
  email: string;
  role: string;
  establishment_id: number;
};

export type Establishment = {
  id: number;
  name: string;
  cnpj: string;
  phone: string;
  owner_name: string;
  email: string;
  address: string;
  neighborhood: string;
  city: string;
  status: string;
};

export type AuthSession = {
  user: AuthUser;
  establishment: Establishment;
  access_token: string;
  refresh_token: string;
};

export type MePayload = {
  user: AuthUser;
  establishment: Establishment;
};

export type LoginInput = {
  email: string;
  password: string;
};

export type RegisterInput = {
  owner_name: string;
  email: string;
  password: string;
  establishment_name: string;
  cnpj: string;
  phone: string;
  address: string;
  neighborhood: string;
  city: string;
};

