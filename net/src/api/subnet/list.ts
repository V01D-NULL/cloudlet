import Docker from "dockerode";
import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

async function list(server: FastifyInstance, options: any) {
  server.get("/subnets/list", async (request, reply) => {
    try {
      const docker = new Docker();
      const networks = await docker.listNetworks();
      return networks.filter(
        ({ Name }) => !["bridge", "none", "host"].includes(Name.toLowerCase())
      );
    } catch (e) {
      return { err: JSON.stringify(e) };
    }
  });
}

export default fp(list);
