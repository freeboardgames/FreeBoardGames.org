type Options = NotificationOptions;

export const notify = async (title: string, options?: Options) => {
  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification');
  } else if (Notification.permission === 'granted') {
    return buildNotification(Notification.permission, title, options);
  } else if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return buildNotification(permission, title, options);
  }
};

function buildNotification(permission: string, title: string, options?: NotificationOptions) {
  if (permission === 'granted') {
    var notification = new Notification(title, options);
    return notification;
  }
}
