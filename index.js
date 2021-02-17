Notification.requestPermission();

// Your web app's Firebase configuration
var firebaseConfig = {
  //   apiKey: "AIzaSyC5KQoqzq1eYFTY3TKUhpLxxz-JxbHK5Y0",
  //   authDomain: "front-chapter.firebaseapp.com",
  //   projectId: "front-chapter",
  //   storageBucket: "front-chapter.appspot.com",
  messagingSenderId: "406353635928",
  //   appId: "1:406353635928:web:cf176a3ea8ed0d1c5df82d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
navigator.serviceWorker.register("/sw.js").then((registration) => {
  messaging.useServiceWorker(registration);
  messaging.getToken().then((token) => {
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
