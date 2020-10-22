const CHACE_NAME = "pwa-digitalent";
var urlsToCache = [
    "/",
    "/index.html",
    "/nav.html",
    "/team.html",
    "/pages/home.html",
    "/pages/rangking.html",
    "/css/materialize.min.css",
    "/css/footer.css",
    "/css/home.css",
    "/ranking.css",
    "/images/background.jpg",
    "/images/notif.png",
    "/js/materialize.min.js",
    "/js/api.js",
    "/js/nav.js",
    'https://fonts.googleapis.com/icon?family=Material+Icons',
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CHACE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches
            .match(event.request, {cacheName: CACHE_NAME})
            .then(function(response) {
                if(response) {
                    console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
                    return response;
                }
                console.log("ServiceWorker: Memuat aset dari server: ", event.request.url
                );
                return fetch(event.request);
            })
    );
});

self.addEventListener('push', function(event){
    var body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }

    var options = {
        body: body,
        icon: '/imaged/notif.png',
        vibrate: [100, 50, 100],
        date: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
}); 