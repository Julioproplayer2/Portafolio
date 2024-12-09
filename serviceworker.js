const CACHE_NAME = "My-Cache";

const direcciones = [
    "/",
    "./index.html",
    "./manifest.json",
    "./css/style.css",
    "./js/scriptim.js",
    "./media/tokyuostret.gif",
    "./media/iconosaki.png",
    "./media/icono2.png",
    "./media/LogoPa.png",
    "./media/Endersito.gif",
    "./media/Enderchikito.gif",
    "./media/Azu.gif",
    "./media/Luksito.gif",
    "./media/Meksita.gif",
    "./media/prot.png",
    "./media/caballero.gif",
    "./media/perfil.jpeg",
    "./media/demo.gif",
    "./media/vista.gif",
    "./media/puerta.gif",
    "./media/mono.gif",
    "./media/alza.gif",
    "./media/music.mp4",
    "./media/music2.mp4",
    "./media/new.mp4",
    "./media/clip.png",
    "./media/blender.png",
    "./media/flstudio.png",
    "./media/after.png",
    "./media/inks.png",
    "./media/icono4.png",
    "./media/icono3.png"
    
];


// Instalación del Service Worker
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(direcciones)
                    .catch(err => console.error('Error al agregar al caché:', err));
            })
            .then(() => self.skipWaiting())
    );
});

// Activación del Service Worker
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => self.clients.claim())
    );
});

// Manejo de solicitudes
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(res => {
                return res || fetch(e.request)
                    .catch(() => {
                        if (e.request.destination === 'document') {
                            return caches.match('/offline.html'); // Fallback
                        }
                    });
            })
    );
});
