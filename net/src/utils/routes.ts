import { FastifyInstance } from "fastify";
import fs from "fs";
import path from "path";

export default async function registerRoutes(
  directoryPath: string,
  server: FastifyInstance
) {
  const items = fs.readdirSync(directoryPath);

  for (const item of items) {
    const fullPath = path.join(directoryPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await registerRoutes(fullPath, server);
    } else if (stat.isFile() && item.endsWith(".js")) {
      const route = await import(fullPath);
      server.register(route.default);
    }
  }
}
