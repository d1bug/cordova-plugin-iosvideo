var exec = require('cordova/exec');

// exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'Iosvideo', 'coolMethod', [arg0]);
// };

function Iosvideo() {
    console.log("Iosvideo.js: is created");
}

Iosvideo.prototype.echo = function (arg0, success, error) {
    exec(success, error, 'Iosvideo', 'echo', [arg0]);
};

Iosvideo.prototype.getCallback = function (callback, success, error) {
    Iosvideo.prototype.callbackResult = callback;
    exec(success, error, "Iosvideo", 'callback', []);
}

// CALLBACK RESULT//
Iosvideo.prototype.callbackResult = (payload) => {
    console.log("Received callbackResult", payload);
}

var iosvideo = new Iosvideo();
module.exports = iosvideo;