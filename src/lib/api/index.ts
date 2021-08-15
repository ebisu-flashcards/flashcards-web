export type SvelteFetch = (
  info: RequestInfo,
  init?: RequestInit
) => Promise<Response>;
