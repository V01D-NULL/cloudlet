import Docker from "dockerode";
import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

async function remove(server: FastifyInstance, options: any) {
  server.post("/subnets/delete", async (request, reply) => {
    const docker = new Docker();
    const requestBody = request.body as { id: string };
    const networkId = requestBody.id;

    try {
      docker.getNetwork(networkId).remove();
      return { msg: "ok" };
    } catch (e) {
      return { err: JSON.stringify(e) };
    }
  });
}

export default fp(remove);
