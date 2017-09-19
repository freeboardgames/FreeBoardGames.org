importScripts('workbox-sw.prod.js');

// Create Workbox service worker instance
const workboxSW = new WorkboxSW({ clientsClaim: true });

workboxSW.precache([
  {
    "url": "/0.home.54a8f4db6793f83a1491.js",
    "revision": "38679eba47fa19495190188f6768840e"
  },
  {
    "url": "/0da23c4ee2c213c8edc5ab88a256ebb9.mp3",
    "revision": "0da23c4ee2c213c8edc5ab88a256ebb9"
  },
  {
    "url": "/1.chess.b122e5a67c9bb84ff3d6.js",
    "revision": "c9d57b06566449bb92998895d7fb9cfe"
  },
  {
    "url": "/14011ddf77ed1d26d56d0484cb5535e8.wav",
    "revision": "14011ddf77ed1d26d56d0484cb5535e8"
  },
  {
    "url": "/167ff4a0acc08571c1805aa19cf597a7.webp",
    "revision": "167ff4a0acc08571c1805aa19cf597a7"
  },
  {
    "url": "/2.checker.55fbf7e239f1318e02bc.js",
    "revision": "4a000d3028713cc9081b3f522305033e"
  },
  {
    "url": "/3.newParty.48b1ab4ec52ecf7ba5af.js",
    "revision": "24d3c6e90f89cfb4431e893448a85609"
  },
  {
    "url": "/4.login.efa770ef695ab22dea66.js",
    "revision": "10475e0776e30ee434f23b5569d4384a"
  },
  {
    "url": "/6.lobby.6f3261f4acd78737306a.js",
    "revision": "81cfddbd53d764c9d45720be9de0d47d"
  },
  {
    "url": "/696b67fb2aa95763887afd65c061cbf3.svg",
    "revision": "696b67fb2aa95763887afd65c061cbf3"
  },
  {
    "url": "/7.game.9015f0f7b4a7e58feca4.js",
    "revision": "3ece310f30098dc4d4ed73a762ec031d"
  },
  {
    "url": "/ac353055f988d0139c362df98e8e6ca9.wav",
    "revision": "ac353055f988d0139c362df98e8e6ca9"
  },
  {
    "url": "/app.8de2e5a4ad8eb8269853.js",
    "revision": "7d39321d0289eabad7e008b2199495de"
  },
  {
    "url": "/index.html",
    "revision": "7a0922740c58427f09c7cdfd54133e5c"
  },
  {
    "url": "/vendor.814dc207a9a882a950da.js",
    "revision": "a35e0c13c8bc6407a59c9d95040d2497"
  },
  {
    "url": "/workbox-sw.prod.js",
    "revision": "679d4e73dc756b21e46ee8f1bb52c882"
  }
]);


self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', function(event) {
  if (!event.data) {
    return;
  }
  let data = event.data.json();
  self.registration.showNotification('It\'s your turn. Play now!', {
    body: 'Click here to play your '+data.game+' turn! ' +
        'Your friend is waiting for you. ',
    icon: '/icon_512.png',
    badge: '/icon_128.png',
    requireInteraction: true,
    data: {
      match_code: data.match_code,
      game: data.game
    }
  });
});

self.addEventListener('notificationclick', function(event) {
  const clickedNotification = event.notification;
  clickedNotification.close();
  const url = '/g/' + clickedNotification.data.game + '/' +
    clickedNotification.data.match_code;
  const urlToOpen = new URL(url, self.location.origin).href;
  const clients = self.clients;
  const promiseChain = clients.matchAll({
    type: 'window',
    includeUncontrolled: true
  })
  .then((windowClients) => {
    let matchingClient = null;

    for (let i = 0; i < windowClients.length; i++) {
      const windowClient = windowClients[i];
      if (windowClient.url === urlToOpen) {
        matchingClient = windowClient;
        break;
      }
    }

    if (matchingClient) {
      return matchingClient.focus();
    } else {
      return clients.openWindow(urlToOpen);
    }
  });
  event.waitUntil(promiseChain);
});
