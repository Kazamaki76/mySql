require("dotenv").config(); //process.env
const express = require("express");

const notFoundMidleware = require("./middleware/not-found");
const errorMiddleWare = require("./middleware/not-found");
const authRoute = require("./routes/auth-toutes")

const app = express();

app.use(express.json());
app.use("/auth" , authRoute)

app.use(notFoundMidleware);
app.use(errorMiddleWare);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server running on port" + PORT);
});
