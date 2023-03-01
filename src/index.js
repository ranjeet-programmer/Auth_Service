const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

// const UserService = require("./services/user-service");

const app = express();

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(` server started on port ${PORT}`);

    // const service = new UserService();

    // const newToken = service.createToken({
    //   email: "ranjeethingeofficial@gmail.com",
    //   id: 1,
    // });

    // console.log("New Token :- ", newToken);

    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbmplZXRoaW5nZW9mZmljaWFsQGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE2Nzc2NTUwNjAsImV4cCI6MTY3NzY1NTA5MH0.jmRaKqR_Loos6gVydePTWFlwPlf2HmuU9njt9CllYns";

    // const response = service.verifyToken(token);

    // console.log("response :- ", response);
  });
};

prepareAndStartServer();
