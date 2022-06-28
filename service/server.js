import express from "express";
import cors from "cors";
import * as routes from './src/routes'

const PORT = 4000;
const app = express();

app.use(express.urlencoded({ extended: true, limit: '5mb' }))
app.use(express.json({ limit: '5mb' }))
app.use(cors({ origin: true }));

const router = express.Router();
routes.feedsRoute(router);
app.use("/api/v1", router);

app.listen(PORT, async () => {
  console.log("Server is running on port: ", PORT);
});
