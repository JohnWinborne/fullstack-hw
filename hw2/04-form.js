const http = require("http");
const port = process.env.PORT || 5001;
const querystring = require("querystring");

// http://localhost:5001/form should return a form with input elements
// for username, email, and submit button

// http://localhost:5001/submit should return all the data the user
// entered

// http://localhost:5001/form should return a form with input elements
// for username, email, and submit button

const server = http.createServer((req, res) => {
  //GET means browser is asking for the /form page so it can display it
  if (req.url === "/form" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<form method="POST" action="/submit">
        <h1>Form</h1>
        <div>
          <label for="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
        </div>
        <div> 
          <label for="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email address"
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>`);
    return;
  }
  // http://localhost:5001/submit should return all the data the user
  // entered
  // POST means the browser filled out the form and is now sending its 
  // values
  if (req.url === "/submit" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      // parse body (username=foo&email=bar)
      const data = querystring.parse(body);
      const username = data.username || "";
      const email = data.email || "";

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        `<h1>Form Submission</h1>
        <p>Username: ${username}</p>
        <p>Email: ${email}</p>`);
    });
    return;
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>404 - Not Found</h1>");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
