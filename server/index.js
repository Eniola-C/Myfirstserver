const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

router.get("/", (req, res) => {
  // connect to external db, mysql
  // authentication
  const books = [
    {
      id: 1,
      author: "bill graham",
      title: "road to salvation",
    },
    {
      id: 2,
      author: "Margret Ogolla",
      title: "River and the source",
    },
    {
      id: 3,
      author: "John Kiriamete",
      title: "My life in crime",
    },
  ];

  res.send(books);
});

// auth middleware
app.use("/api", (req, res, next) => {
  const auth = false; // req.headers // session token // credentials

  // To parse some headers
  // If condition to check the credentials
  // If you are not planning for bruteforce attacks, there is high chance of it happening here

  if (auth) {
    next();
  }

  res.send("Yo do not have permissions to get to access to this resource");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
