self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting().then(() => null));
  console.log("INSTALLED EVENT");
});

self.addEventListener("activate", (event) => {
  console.log("ACTIAVTE EVENT");
});

self.addEventListener("push", (event) => {
  console.log("PUSH EVENT", event);
  self.registration.showNotification("notification title", {
    body: "notification body",
    requireInteraction: true,
    actions: [
      {
        title: "yesss",
        action: "A",
      },
      {
        title: "noooo",
        action: "B",
      },
    ],
  });
});

self.addEventListener("notificationclick", (event) => {
  console.log("NOTIFICATION CLICK EVENT", event.action);
  event.notification.close();
  if (event.action === "A") {
    self.clients.openWindow("https://google.com");
  } else if (event.action === "B") {
    self.clients.openWindow("https://wikipedia.com");
  } else {
    self.clients.openWindow("https://dev.to");
  }
});

self.addEventListener("pushsubscriptionchange", (event) => {
  console.log("subs changed", event);
});
