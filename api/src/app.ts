import fastify from "fastify";
import path from "path";
import registerRoutes from "./utils/routes";

const envToLogger = {
  development: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
  production: true,
  test: false,
};

const server = fastify({ logger: envToLogger["development"] ?? true });

async function boot() {
  const rootPath = path.join(__dirname, "routes");
  await registerRoutes(rootPath, server);

  server.listen({
    host: "0.0.0.0",
    port: 5000,
  });
}

boot();
