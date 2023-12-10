const fs = require("fs");

const reqHandler = (req, res) => {
  // console.log(req);
  const url = req.url;
  if (url === "/") {
    res.setHeader("contentType", "text/html");
    res.write("<html>");
    res.write("<head><title>Testing</title><head>");
    res.write(
      '<div><form action="/message" method="POST"> <input type="text"  name="content"></input> <button>Submit</button></form></div>'
    );

    res.write("</html>");
    res.end();
  } else if (url == "/message") {
    const resBody = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      resBody.push(chunk);
    });fs.lchmodSync

    return req.on("end", () => {
      res.setHeader("Location", "/");
      const parseBody = Buffer.concat(resBody).toString();
      const message = parseBody.split("=")[1];
      console.log(message);
      fs.writeFile("message.txt", message, (e) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.setHeader("contentType", "text/html");
        res.write("<html>");
        res.write("<head><title>Tetsing</title><head>");
        res.write("<body><h1>Welcome</h1></body>");
        res.write("</html>");
      });
    });

    return res.end();
  }
};

module.exports = reqHandler;