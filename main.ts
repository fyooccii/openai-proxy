import { serve } from 'https://deno.land/std@0.181.0/http/server.ts';

const OPENAI_API_HOST = 'api.openai.com';

serve(async request => {
  const url = new URL(request.url);
  console.log('[Origin req]', request.body);

  if (url.pathname === '/') {
    return fetch(new URL('./Readme.md', import.meta.url));
  }
  url.host = OPENAI_API_HOST;
  const res = await fetch(url, request);
  return res;
});
