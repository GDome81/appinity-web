// Firebase Cloud Messaging service worker for the web app.
// It lives in /fcm/ so its scope does not clash with Flutter's own service worker.
// The public Firebase config arrives in the registration URL (see FcmPushPort).
importScripts('https://www.gstatic.com/firebasejs/13.3.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/13.3.0/firebase-messaging-compat.js');

const params = new URL(self.location.href).searchParams;
firebase.initializeApp({
  apiKey: params.get('apiKey'),
  appId: params.get('appId'),
  projectId: params.get('projectId'),
  messagingSenderId: params.get('messagingSenderId'),
});
// Messages with a notification payload are shown by the SDK while the app is in the background;
// a tap opens webpush.fcm_options.link (the right page of the app).
firebase.messaging();
