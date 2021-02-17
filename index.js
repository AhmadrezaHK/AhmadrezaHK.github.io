Notification.requestPermission();

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC5KQoqzq1eYFTY3TKUhpLxxz-JxbHK5Y0",
  authDomain: "front-chapter.firebaseapp.com",
  projectId: "front-chapter",
  storageBucket: "front-chapter.appspot.com",
  messagingSenderId: "406353635928",
  appId: "1:406353635928:web:cf176a3ea8ed0d1c5df82d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
navigator.serviceWorker.register("/sw.js").then((registration) => {
  messaging.useServiceWorker(registration);
  messaging
    .getToken({
      serviceWorkerRegistration: registration,
      vapidKey:
        "BMtiPD8hSaVOUu0p-rsRL0ldm5a6_935u2FS4eOMu1x7u6oCsRC5NgFCJ8dCce_b36wIB9q8fHWQljSzln8e38g",
    })
    .then((token) => {
      console.log(token);
    });
  messaging.onMessage((payload) => {
    console.log("ForgroundMessage", payload);
    return registration.showNotification(payload.notification.title, {
      body: payload.notification.body + " forground-message",
      requireInteraction: true,
    });
  });
});
