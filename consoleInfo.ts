console.b2xk = console.info
if(typeof window === 'undefined') {
    console.info = (msg: any) => {
        console.b2xk(`\x1b[44m\x1b[37m`, `\u2139`, `\x1b[0m`, `\x1b[36m`, msg, `\x1b[0m`)
    }
}
else { //Running in the browser
    console.info = (msg: any) => {
        console.b2xk(`%c[i]%c ${msg}`, `background: blue; color: #FFF`, `color: blue`)
    }
}
