import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { db } from "./models/index.js";
import { gradeRouter } from "./routes/gradeRouter.js";

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    process.exit();
  }
})();

const app = express();

//define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: db.cors_origin,
  })
);
app.use(gradeRouter);
app.get("/", (req, res) => {
  res.send("API em execucao");
});

app.listen(process.env.PORT);
