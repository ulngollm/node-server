export const requestListener = function (req, res) {
  res.writeHead(200)
  .end('Server is working!');
};

export const jsonRequestListener = function (req, res, body = {result: "Text"}) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200)
  .end(JSON.stringify(body));
};

export function fileRequestListener(req, res){
  const file = 'test.csv';
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", `attachment;filename=${file}`);
  res.writeHead(200)
  .end(`1 sdf dccmcl\n2 nsmer sadx`);
}

export function demo(request, res) {
  res.end("Hello Node.js Server!");
  console.log(request.method);
  if (request.method == "GET") {
    let requestUrl = url.parse(request.url, true);
    console.log(requestUrl.query.param);
  }
}
