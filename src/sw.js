const staticCacheName = 'site-static-v1';
const dynamicCacheName = 'site-dynamic-v1';
const assets = [
    '/',
    '/index.html',
    '/css/style.css',
    '/css/dark.css',
    '/js/script.js',
    '/offline.html',
    '/img/bg.webp',
    '/img/up-arrow.svg',
    'https://fonts.gstatic.com/s/allura/v10/9oRPNYsQpS4zjuA_iwgW.woff2',
    'https://fonts.gstatic.com/s/raleway/v22/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2',
    'https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecg.woff2',
    'https://fonts.gstatic.com/s/opensans/v23/mem8YaGs126MiZpBA-UFVZ0b.woff2',
    'https://fonts.gstatic.com/s/firacode/v12/uU9dCBsR6Z2vfE9aq3bpdva8iVtipIat--AvNZ-YI8HBrw.woff2'
];

// cache size limit function
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > size) {
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        });
    });
};

// install event
self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            cache.addAll(assets);
        })
    );
});

// activate event
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});

// fetch events
self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request)
            .then(cacheRes => {
                if (evt.request.url.indexOf('.woff2') == -1) {
                    return fetch(evt.request)
                        .then(fetchRes => {
                            return caches.open(dynamicCacheName)
                                .then(cache => {
                                    cache.put(evt.request.url, fetchRes.clone());
                                    // check cached items size
                                    limitCacheSize(dynamicCacheName, 15);
                                    return fetchRes;
                                })
                        })
                        .catch(() => {
                            return cacheRes || caches.match('/offline.html');
                        })
                }
                else {
                    return cacheRes;
                }
            })
    );
});