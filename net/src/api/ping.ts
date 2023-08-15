import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

async function ping(server: FastifyInstance, options: any) {
  server.get("/ping", async (request, reply) => {
    return { msg: "net: pong" };
  });
}

export default fp(ping);
