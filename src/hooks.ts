import type { ServerFetch } from "@sveltejs/kit";

export const serverFetch: ServerFetch = async (request: Request) => {
  console.log("Server fetch called");
  return fetch(request);
};
