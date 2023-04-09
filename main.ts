import { serve } from "https://deno.land/std@0.181.0/http/server.ts";

const OPENAI_API_HOST = "api.openai.com";

serve(async (request) => {
  const url = new URL(request.url);

  if (url.pathname === "/") {
    return fetch(new URL("./Readme.md", import.meta.url));
  }
  console.log('[Origin req]', JSON.stringify(request))
  url.host = OPENAI_API_HOST;
  const res = await fetch(url, request);
  console.log('[Origin res]', JSON.stringify(res));
  return res;
});
