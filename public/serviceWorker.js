/* eslint-disable no-restricted-globals */
/**
 * Service worker
 * v1.0
 */
const _version = "v4.1";
const cacheName = "v3.2";
const cacheList = [
  "/",
  "/static/js/bundle.js",
  "/images/dog/img1.jpg",
  "/images/dog/img2.jpg",
  "/images/dog/img3.jpg",
  "/images/dog/img4.jpg",
  "/images/dog/img5.jpg",
];

const log = (msg) => {
  console.log(`[ServiceWorker ${_version}] ${msg}`);
};

// Life cycle : INSTALL
self.addEventListener("install", (event) => {
  self.skipWaiting();
  log("INSTALL");
  caches.open(cacheName).then(async (cache) => {
    log("caching app shell");
    cache.keys().then((keys) => console.log(keys));

    return cache.addAll(cacheList);
  });
});
// Life cycle: ACTIVATE
self.addEventListener("activate", (event) => {
  log("Activate");
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            log("Reoving old cache " + key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});
// Functional: FETCH
self.addEventListener("fetch", (event) => {
  log("Fetch " + event.request.url);

  event.respondWith(
    caches.match(event.request).then((res) => {
      return res || fetch(event.request);
    })
  );
});
