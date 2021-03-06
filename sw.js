// self.addEventListener("activate", (event) => {
//   console.log("ACTIAVTE EVENT");
// });

// self.addEventListener("push", (event) => {
//   console.log("PUSH EVENT", event);
//   console.log("BackgroundMessage", payload);
//   event.waitUntil(
//     self.registration.showNotification(payload.notification.title, {
//       body: payload.notification.body + "background-message",
//       requireInteraction: true,
//     })
//   );
// self.registration.showNotification("notification title", {
//   body: "notification body",
//   requireInteraction: true,
//   actions: [
//     {
//       title: "yesss",
//       action: "A",
//     },
//     {
//       title: "noooo",
//       action: "B",
//     },
//   ],
// });
// });

// self.addEventListener("notificationclick", (event) => {
//   console.log("NOTIFICATION CLICK EVENT", event.action);
//   event.notification.close();
//   if (event.action === "A") {
//     self.clients.openWindow("https://google.com");
//   } else if (event.action === "B") {
//     self.clients.openWindow("https://wikipedia.com");
//   } else {
//     self.clients.openWindow("https://dev.to");
//   }
// });

// self.addEventListener("pushsubscriptionchange", (event) => {
//   console.log("subs changed", event);
// });

importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js");

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting().then(() => null));
  console.log("INSTALLED EVENT");
});

firebase.initializeApp({
  apiKey: "AIzaSyC5KQoqzq1eYFTY3TKUhpLxxz-JxbHK5Y0",
  authDomain: "front-chapter.firebaseapp.com",
  projectId: "front-chapter",
  storageBucket: "front-chapter.appspot.com",
  messagingSenderId: "406353635928",
  appId: "1:406353635928:web:cf176a3ea8ed0d1c5df82d",
});

// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

// console.log(messaging);
messaging.onBackgroundMessage((payload) => {
  console.log("BackgroundMessage", payload);
  return self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body + "background-message",
    requireInteraction: true,
  });
});
