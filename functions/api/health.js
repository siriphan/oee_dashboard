export async function onRequest() {
  return Response.json({ ok: true, app: 'OEE Performance Dashboard', runtime: 'Cloudflare Pages Functions' });
}
