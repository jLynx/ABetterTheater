export async function onRequestGet(request) {
  const data = {
    // country: request.headers.get("cf-ipcountry"),
    // country: "NZ",
    // country: request.request.cf.country,
    country: request.request.url,
  };

  const json = JSON.stringify(data);
  // const json = JSON.stringify(request);

  // return respondWith(
  //   new Response(json, {
  //     headers: {
  //       "content-type": "application/json;charset=UTF-8",
  //     },
  //   })
  // );


  // const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
  // const data = await res.json();
  // const info = JSON.stringify(data);

  return new Response(json, null, 2);
}
