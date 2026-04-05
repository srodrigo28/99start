import { getApiUrl, resolveApiBaseUrl } from "./config";
import type { ApiEnvelope, ApiErrorEnvelope } from "../types";

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  headers?: Record<string, string>;
  token?: string;
};

export class ApiRequestError extends Error {
  status: number;
  errors: string[];
  baseUrl: string;

  constructor(message: string, options: { status: number; errors?: string[]; baseUrl: string }) {
    super(message);
    this.name = "ApiRequestError";
    this.status = options.status;
    this.errors = options.errors ?? [];
    this.baseUrl = options.baseUrl;
  }
}

export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const resolution = await resolveApiBaseUrl();
  const baseUrl = resolution.activeBaseUrl;
  const response = await fetch(getApiUrl(path, baseUrl), {
    method: options.method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const payload = (await response.json()) as ApiEnvelope<T> | ApiErrorEnvelope;

  if (!response.ok || !("success" in payload) || payload.success !== true) {
    const errorPayload = payload as ApiErrorEnvelope;
    throw new ApiRequestError(errorPayload.message || "Falha ao comunicar com a API.", {
      status: response.status,
      errors: errorPayload.errors ?? [],
      baseUrl,
    });
  }

  return payload.data;
}

