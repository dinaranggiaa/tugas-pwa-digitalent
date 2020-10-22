var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "<Public Key>",
    "privateKey": "<Private Key>"
};

webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

var pushSubscription = {
    "endpoint": "<Endpoint URL>",
    "keys" : {
        "p256dh": "<p256dh Key>",
        "auth": "<Auth key>"
    }
};
var payload = 'Selamat! Aplikasi anda sudah dapat menerima push aplikasi';

var options = {
    gcmAPIKey: '<FCM Sender ID>',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);