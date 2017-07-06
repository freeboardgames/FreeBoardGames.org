self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', function(event) {
  if (!event.data) {
    console.log('ERROR, NO DATA FROM PUSH');
    return;
  }
  let data = event.data.json();
  self.registration.showNotification('It\'s your turn. Play now!', {
        body: 'Click here to play your '+data.game+' turn! ' +
        'Your friend is waiting for you. ',
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
  const promiseChain = clients.openWindow(url);
  event.waitUntil(promiseChain);
});
