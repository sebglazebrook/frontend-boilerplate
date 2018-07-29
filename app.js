const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  const html = '\
<html>\
<head>\
  <meta charset="UTF-8">\
  <title>Sample React App</title>\
</head>\
<body>\
  <h1>Sample React App</h1>\
  <div id="root"></div>\
\
  <script src="build/bundle.js"></script>\
\
</body>\
</html>\
';
  return res.send(html);
});

app.listen(3000, () => console.log("App listening on port 3000"))
