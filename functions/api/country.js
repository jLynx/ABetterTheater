export async function onRequestGet(request) {
  const data = {
    country: request.request.cf.country,
  };

  const json = JSON.stringify(data);

  return new Response(json, {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}
