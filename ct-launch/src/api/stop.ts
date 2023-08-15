import Docker from "dockerode";
import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

type Body = {
  containerId: string;
};

async function stop(server: FastifyInstance, options: any) {
  server.post("/stop", async (request, reply) => {
    const docker = new Docker();
    const requestBody = request.body as Body;

    const container = docker.getContainer(requestBody.containerId);

    if (!container) {
      return { msg: "Container does not exist" };
    }

    await container.stop();
    return { msg: "ok" };
  });
}

export default fp(stop);
