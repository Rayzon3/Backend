import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_, res) => res.send("Hello World!"));

app.listen("8080", (): void => {
  console.log("Server Running! 🚀");
});
