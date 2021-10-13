import Router from "./router.js";

export function requestListener(req, res) {
  console.log(req.url);
  res.statusCode = 200;
  res.end();
}

export const jsonRequestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  let body = Router.getResponse(req);
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

