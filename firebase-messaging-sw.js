importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js');

firebase.initializeApp({
    "messagingSenderId":"496386485511"
})

const messaging = firebase.messaging();

messaging.setBackgroundMessagingHandler(function(payload){
    console.log(payload);
});