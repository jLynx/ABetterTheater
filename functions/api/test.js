export async function onRequestGet(request) {
  const data = {
    country: request.headers.get("cf-ipcountry"),
  };

  const json = JSON.stringify(data);

  return respondWith(
    new Response(json, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    })
  );
}
