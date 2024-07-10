import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { AppDataSource } from "./config/datasource";
import { routes } from "./app/routes/@index";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(cors());
    app.use(routes);

    app.listen(3000, () =>
      console.log("Start server on http://localhost:3000 ")
    );
  })
  .catch((error) => console.log(error));
