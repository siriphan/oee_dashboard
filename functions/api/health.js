export async function onRequest() {
  return Response.json({
    ok: true,
    app: 'Executive OEE Performance Dashboard',
    runtime: 'Cloudflare Pages Functions'
  });
}
