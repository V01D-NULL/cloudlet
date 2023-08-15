import Docker from "dockerode";
import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

async function list(server: FastifyInstance, options: any) {
  server.get("/list", async (request, reply) => {
    const docker = new Docker();

    // Filter out cloudlet containers because those are
    // not meant to be used by clients
    const containers = await docker.listContainers();
    console.log("CONTAINERS:", containers);

    return containers.filter(
      (container) => !container.Names[0].includes("cloudlet")
    );
  });
}

export default fp(list);
