const http = require("http");
const fs = require("fs");

const port = 3000;
const server = http.createServer((req, res) => {
  const readFinal = fs.readFileSync("./txt/final.txt", "utf8");
  res.writeHead(200, { "Content-Type": " text/html; charset=utf-8" });
  res.write(readFinal);
  res.end();
});

server.listen(port, () => {
  console.log(`listening on port:http//localhost: ${port}`);
});
