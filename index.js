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
navigator.serviceWorker
  .register("/firebase-messaging-sw.js")
  .then((registeration) => {
    messaging
      .getToken({ serviceWorkerRegistration: registeration })
      .then((token) => {
        console.log(token);
      });
  });
