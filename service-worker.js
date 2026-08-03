const CACHE_NAME = "okayama-trip-v49";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=41",
  "./styles-6c.css?v=48",
  "./app.js?v=49",
  "./firebase-config.js",
  "./manifest.webmanifest",
  "./assets/kansai_hiroshima_map.jpg",
  "./assets/shopping/forest-family.jpg",
  "./assets/shopping/shopping-001.webp",
  "./assets/shopping/shopping-002.webp",
  "./assets/shopping/shopping-003.webp",
  "./assets/shopping/shopping-004.webp",
  "./assets/shopping/shopping-005.webp",
  "./assets/shopping/shopping-006.webp",
  "./assets/shopping/shopping-007.webp",
  "./assets/shopping/shopping-008.webp",
  "./assets/shopping/shopping-009.webp",
  "./assets/shopping/shopping-010.webp",
  "./assets/shopping/shopping-011.webp",
  "./assets/shopping/shopping-012.webp",
  "./assets/shopping/shopping-013.webp",
  "./assets/shopping/shopping-014.webp",
  "./assets/shopping/shopping-015.webp",
  "./assets/shopping/shopping-016.webp",
  "./assets/shopping/shopping-017.webp",
  "./assets/shopping/shopping-018.webp",
  "./assets/shopping/shopping-019.webp",
  "./assets/shopping/shopping-020.webp",
  "./assets/shopping/shopping-021.webp",
  "./assets/shopping/shopping-022.webp",
  "./assets/shopping/shopping-023.webp",
  "./assets/shopping/shopping-024.webp",
  "./assets/shopping/shopping-025.webp",
  "./assets/shopping/shopping-026.webp",
  "./assets/shopping/shopping-027.webp",
  "./assets/shopping/shopping-028.webp",
  "./assets/shopping/shopping-029.webp",
  "./assets/shopping/shopping-030.webp",
  "./assets/shopping/shopping-031.webp",
  "./assets/shopping/shopping-032.webp",
  "./assets/shopping/shopping-033.webp",
  "./assets/shopping/shopping-034.webp",
  "./assets/shopping/shopping-035.webp",
  "./assets/shopping/shopping-036.webp",
  "./assets/shopping/shopping-037.webp",
  "./assets/shopping/shopping-038.webp",
  "./assets/shopping/shopping-039.webp",
  "./assets/shopping/shopping-040.webp",
  "./icons/okayama-icon-192.png",
  "./icons/okayama-icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => {
          if (event.request.mode === "navigate") return caches.match("./index.html");
          return Response.error();
        });
    })
  );
});
