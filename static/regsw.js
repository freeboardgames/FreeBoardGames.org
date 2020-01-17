if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js').then(function(reg) {
    reg.onupdatefound = function() {
      const newSW = reg.installing;
      newSW.onstatechange = function() {
        if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage('skipWaiting');
          newSW.postMessage('skipWaiting');
        }
      };
    };
  });
}
