# ABetterTheater

## **https://ABetterTheater.nz/**

NZ version of "A Better Theater" which you can view over at https://ABetterTheater.nz/
This site should include all NZ steaming services.
This site also gives you the ability to hide streaming services you are not subscribed to so you don't have them cluttering up your dashboard (edit button bottom right) 

![image](https://user-images.githubusercontent.com/4393979/158326735-b5dc97ad-4dd2-4f46-9e78-b04bd98aa640.png)

### Techincal nerd stuff:

So the biggest thing with this site is user experience and speed 🏎 (don't have a Tesla emoji 😔)

It's currently 124kb uncached but once cached its only 4.9kb with browser cached content!

So the site is as small as i can (currently) get it which means it loads super fast! Also this includes loading in extra code after the page has rendered as to not slow down the initial load times.

So that means I'm not using any CSS or JS frameworks to save on page size.

Everything is cached (including the HTML) at the edge servers making it serverless. So to explain a bit further, there is 2 levels of caching here, browser caching and edge server caching. I'm using both, so if your local browser doesn't have content, it fetches it from the edge server and if they can't find it or it's expired, only then does it fetch it from the server.

Site loads the modules(services) dynamically so it's easy to add new ones. Also means it's easy to hide show specific ones. Instead of just hard coding them in the HTML which would make the page size larger and also would remove the ability to only show the services you want to see.

It uses local browser storage to save users configurations.

All images are minified SVG's so they scale beautifully!

Everything is severed through Cloudflare making the TTFB super fast.

Also since it's serverless there is no limit on the original server taking up data or needing to handle the load, so it can scale exponentially.

Backend is also incorporating Brotli compression to help get things as small as possible.

It goes without saying that everything is minified, but I thought I should specify it anyway.

Have thought about using Rocket Loader but there is no need at the moment.

Using Argo tiered cache to help with delivery speed of cached assets.

A few custom page rules, but nothing out of the ordenary.

Full support for IPv6 (and ofc IPv4 as well)

Using HTTP/3 with QUIC

HSTS to be enabled soon ™

Site is proxited behind CloudFlare's network to protect from DDoS attacks (but on top of that, it's all cached at the edge server's so it never hits my server anyway*)

Update: The site is also now hosted with CF Pages, so its fully serverles now....Well apart from https://country.abettertheater.nz/
