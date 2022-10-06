import express from "express";
import bodyParser from "body-parser";
import initRoutes from "./routes";
import initDatabase from "./database/index";

initDatabase();
const app = express();
app.use(express.json());

initRoutes(app);

export default app;
