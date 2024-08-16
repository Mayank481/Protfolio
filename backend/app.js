require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const connectDatabase = require("./config/db");
const logger = require("./logger/logger");

connectDatabase();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({
    message: "Welcome mayank's World's ",
  });
});

app.use("/api", require("./routes"));

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
