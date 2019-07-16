"use strict";
console.b2xk = console.info;
if (typeof window === 'undefined') {
    console.info = function (msg) {
        console.b2xk("\u001B[44m\u001B[37m", "\u2139", "\u001B[0m", "\u001B[36m", msg, "\u001B[0m");
    };
}
else { //Running in the browser
    console.info = function (msg) {
        console.b2xk("%c[i]%c " + msg, "background: blue; color: #FFF", "color: blue");
    };
}
