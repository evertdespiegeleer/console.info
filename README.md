# ConsoleInfo.js

The major browsers that used to style console.info have removed this styling. This, in practice, makes console.info practically obsolete, as it does the exact same thing as console.log.
The original styling looked like this: 
![](https://i.stack.imgur.com/acrcf.png)
**consoleInfo.js** attempts to bring the old behavior back:
![](https://i.imgur.com/FgDrmTZ.png)
It certainly isn't perfect but it's something.

## Usage
For usage in the browser, consoleInfo.js should be implemented by loading it before executing any other js, preferably at the bottom of the `<body>` tag.

    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/evertdespiegeleer/console.info/consoleInfo.min.js"></script>
