const DEFAULT_API_URL = "http://127.0.0.1:5000/api/v1";
const DEFAULT_HEALTHCHECK_TIMEOUT_MS = 2500;

type ApiHealthResult = {
  ok: boolean;
  status?: number;
  url: string;
  reason?: string;
};

type ApiResolutionResult = {
  activeBaseUrl: string;
  source: "primary" | "fallback" | "default";
  testedUrls: ApiHealthResult[];
};

function normalizeApiUrl(value: string | undefined): string {
  const trimmed = value?.trim();

  if (!trimmed) {
    return DEFAULT_API_URL;
  }

  return trimmed.replace(/\/+$/, "");
}

function readBooleanEnv(value: string | undefined, defaultValue = false): boolean {
  const normalized = value?.trim().toLowerCase();

  if (!normalized) {
    return defaultValue;
  }

  return normalized === "true" || normalized === "1" || normalized === "yes";
}

function readNumberEnv(value: string | undefined, defaultValue: number): number {
  const parsed = Number(value);

  if (!Number.isFinite(parsed) || parsed <= 0) {
    return defaultValue;
  }

  return parsed;
}

export const API_BASE_URL = normalizeApiUrl(process.env.EXPO_PUBLIC_API_URL);
export const API_FALLBACK_URL = normalizeApiUrl(process.env.EXPO_PUBLIC_API_FALLBACK_URL);
export const ENABLE_API_FALLBACK = readBooleanEnv(
  process.env.EXPO_PUBLIC_ENABLE_API_FALLBACK,
  false,
);
export const API_HEALTHCHECK_TIMEOUT_MS = readNumberEnv(
  process.env.EXPO_PUBLIC_API_HEALTHCHECK_TIMEOUT_MS,
  DEFAULT_HEALTHCHECK_TIMEOUT_MS,
);

let resolvedApiBaseUrl: string | null = null;
let inFlightApiResolution: Promise<ApiResolutionResult> | null = null;

function buildUrl(baseUrl: string, path = ""): string {
  if (!path) {
    return baseUrl;
  }

  return `${baseUrl}/${path.replace(/^\/+/, "")}`;
}

export function getApiUrl(path = "", baseUrl = API_BASE_URL): string {
  return buildUrl(baseUrl, path);
}

function getApiCandidates(): Array<{ url: string; source: ApiResolutionResult["source"] }> {
  const candidates: Array<{ url: string; source: ApiResolutionResult["source"] }> = [];

  candidates.push({ url: API_BASE_URL, source: API_BASE_URL === DEFAULT_API_URL ? "default" : "primary" });

  if (ENABLE_API_FALLBACK && API_FALLBACK_URL && API_FALLBACK_URL !== API_BASE_URL) {
    candidates.push({ url: API_FALLBACK_URL, source: "fallback" });
  }

  return candidates;
}

async function runHealthcheck(baseUrl: string): Promise<ApiHealthResult> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_HEALTHCHECK_TIMEOUT_MS);

  try {
    const response = await fetch(buildUrl(baseUrl, "health"), {
      method: "GET",
      signal: controller.signal,
      headers: {
        Accept: "application/json",
      },
    });

    return {
      ok: response.ok,
      status: response.status,
      url: baseUrl,
      reason: response.ok ? undefined : `healthcheck retornou ${response.status}`,
    };
  } catch (error) {
    const reason =
      error instanceof Error ? error.message : "falha desconhecida ao consultar /health";

    return {
      ok: false,
      url: baseUrl,
      reason,
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

async function resolveApiBaseUrlInternal(): Promise<ApiResolutionResult> {
  const testedUrls: ApiHealthResult[] = [];
  const candidates = getApiCandidates();

  for (const candidate of candidates) {
    const result = await runHealthcheck(candidate.url);
    testedUrls.push(result);

    if (result.ok) {
      resolvedApiBaseUrl = candidate.url;
      return {
        activeBaseUrl: candidate.url,
        source: candidate.source,
        testedUrls,
      };
    }
  }

  const fallbackBaseUrl = candidates[0]?.url ?? DEFAULT_API_URL;
  resolvedApiBaseUrl = fallbackBaseUrl;

  return {
    activeBaseUrl: fallbackBaseUrl,
    source: candidates[0]?.source ?? "default",
    testedUrls,
  };
}

export async function resolveApiBaseUrl(forceRefresh = false): Promise<ApiResolutionResult> {
  if (!forceRefresh && resolvedApiBaseUrl) {
    return {
      activeBaseUrl: resolvedApiBaseUrl,
      source: resolvedApiBaseUrl === API_FALLBACK_URL ? "fallback" : API_BASE_URL === DEFAULT_API_URL ? "default" : "primary",
      testedUrls: [],
    };
  }

  if (!forceRefresh && inFlightApiResolution) {
    return inFlightApiResolution;
  }

  inFlightApiResolution = resolveApiBaseUrlInternal();

  try {
    return await inFlightApiResolution;
  } finally {
    inFlightApiResolution = null;
  }
}

export function getResolvedApiBaseUrl(): string {
  return resolvedApiBaseUrl ?? API_BASE_URL;
}

export function resetResolvedApiBaseUrl(): void {
  resolvedApiBaseUrl = null;
}
