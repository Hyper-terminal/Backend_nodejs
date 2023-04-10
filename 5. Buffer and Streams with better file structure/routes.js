const fs = require("fs");

const reqHandler = (req, res) => {
    const url = req.url;
    if (url === "/") {
      fs.readFile("./text.txt", "utf8", (error, data) => {
        let messagesHtml = "";
        if (error) {
          if (error.code === "ENOENT") {
            // File does not exist
            messagesHtml = "";
          } else {
            console.error("An error occurred while reading the file:", error);
            return;
          }
        } else {
          const messages = data.split("\n").filter((message) => message.trim() !== "").reverse();
          messagesHtml = messages.map((message) => `<li>${message}</li>`).join("");
        }
  
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(
          `<html><body> <ul>${messagesHtml}</ul> <form action="/message" method="POST"> <input type="text" name="message" /> <button type="submit">Send</button> </form> </body></html>`
        );
        res.end();
      });
    }
    if (url === "/message") {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      req.on("end", () => {
        const bodyString = Buffer.concat(body).toString();
        const message = bodyString.split("=")[1];
        fs.appendFile("./text.txt", `${message}\n`, "utf8", () => {
          res.writeHead(302, { Location: "/" });
          res.end();
        });
      });
    }
}

module.exports = reqHandler