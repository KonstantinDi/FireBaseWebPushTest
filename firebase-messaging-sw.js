// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

const firebaseConfig = {
    apiKey: "AIzaSyCsMpfd2oFVp3vVkM_R2EoscmNIMlHciOc",
    authDomain: "test-9632d.firebaseapp.com",
    projectId: "test-9632d",
    storageBucket: "test-9632d.appspot.com",
    messagingSenderId: "496386485511",
    appId: "1:496386485511:web:98ed5e418c1ce88ee929a2"
};

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload){
    console.log(payload);
});