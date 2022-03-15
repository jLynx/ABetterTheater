addEventListener("fetch", (event) => {
    const data = {
      country: event.request.headers.get("cf-ipcountry"),
    };
  
    const json = JSON.stringify(data);
  
    return event.respondWith(
      new Response(json, {
        headers: {
          "content-type": "application/json;charset=UTF-8",
        },
      })
    );
  });
  