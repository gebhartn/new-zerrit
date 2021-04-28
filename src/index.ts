import config from "config";
import https from "https";
import http from "http";

import app from "./app";
import { logger, handleUncaughtException } from "./utils";

const httpListenerPort = config.get<number>("port");
const httpsListenerPort = httpListenerPort + 1;

const httpServer = http.createServer(app).listen(httpListenerPort, () => {
  logger.info("App listening at localhost:" + httpListenerPort);
});

const httpsServer = https.createServer(app).listen(httpsListenerPort, () => {
  logger.info("App listening at localhost:" + httpsListenerPort);
});

process.on("uncaughtException", handleUncaughtException({ http: httpServer, https: httpsServer }));
