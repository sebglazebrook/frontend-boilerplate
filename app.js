const express = require("express");
const app = express();
import React from "react";
import App from './src/components/App';
import { renderToString } from "react-dom/server";

app.use(express.static(__dirname));

app.get('/*', (req, res) => {
  const jsx = (<App />);
  const reactDom = renderToString(jsx);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(htmlTemplate(reactDom));

});

function htmlTemplate( reactDom ) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
            <link rel="stylesheet" href="build/styles.css">
        </head>

        <body>
            <div id="root">
              ${ reactDom }
            </div>
            <script src="build/bundle.js"></script>
        </body>
        </html>
    `;
}

app.listen(3000, () => console.log("App listening on port 3000"))
