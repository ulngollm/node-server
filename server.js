import url from "url";

export function requestListener(req, res) {
  console.log(req.url);
  res.statusCode = 200;
  res.end();
}

export const jsonRequestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  let body = getResponse(req, res);
  if (!body) {
    body = { result: "Url is not found" };
    res.writeHead(404);
  }
  res.end(JSON.stringify(body));
};

export function fileRequestListener(req, res) {
  const file = "test.csv";
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", `attachment;filename=${file}`);
  res.writeHead(200).end(`1 sdf dccmcl\n2 nsmer sadx`);
}

export function demo(request, res) {
  res.end("Hello Node.js Server!");
  console.log(request.method);
  console.log(request);
  if (request.method == "GET") {
    let requestUrl = url.parse(request.url, true);
    console.log(requestUrl.query.param);
  }
}

function getResponse(req, res) {
  const requestUrl = url.parse(req.url);
  switch (requestUrl.pathname) {
    case "/books":
      return [
        { title: "The Crime", author: "somebody" },
        { title: "Cookbook", author: "Cooker" },
      ];
      break;
    case "/users":
      return [
        { name: "User", group: 4 },
        { name: "Jane", group: 1 },
        { name: "Alice", group: 2 },
      ];
      break;
    default:
      return 0;
      break;
  }
}
