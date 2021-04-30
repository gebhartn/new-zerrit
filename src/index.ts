import config from "config";
import https from "https";
import http from "http";

import app from "./app";
import { logger, handleUncaughtException } from "./utils";

process.env.AWS_ACCESS_KEY_ID = config.get<string>("aws.accessKey");
process.env.AWS_SECRET_ACCESS_KEY = config.get<string>("aws.secretAccess");

const httpListenerPort = config.get<number>("httpPort");
const httpsListenerPort = config.get<number>("httpsPort");

const httpServer = http.createServer(app).listen(httpListenerPort, () => {
  logger.info("App listening at localhost:" + httpListenerPort);
});

const httpsServer = https.createServer(app).listen(httpsListenerPort, () => {
  logger.info("App listening at localhost:" + httpsListenerPort);
});

process.on("uncaughtException", handleUncaughtException({ http: httpServer, https: httpsServer }));
