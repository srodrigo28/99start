import type { AuthSession, LoginInput, MePayload, RegisterInput } from "../types";
import { apiRequest } from "./api";

export function registerOwner(payload: RegisterInput): Promise<AuthSession> {
  return apiRequest<AuthSession>("auth/register", {
    method: "POST",
    body: payload,
  });
}

export function loginOwner(payload: LoginInput): Promise<AuthSession> {
  return apiRequest<AuthSession>("auth/login", {
    method: "POST",
    body: payload,
  });
}

export function getCurrentSession(token: string): Promise<MePayload> {
  return apiRequest<MePayload>("auth/me", {
    method: "GET",
    token,
  });
}

