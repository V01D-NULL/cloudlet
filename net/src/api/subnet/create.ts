import Docker from "dockerode";
import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

async function create(server: FastifyInstance, options: any) {
  server.post("/subnets/create", async (request, reply) => {
    const docker = new Docker();
    const requestBody = request.body as { private: boolean };
    const isPrivateSubnet = requestBody.private;

    const networks = await docker.listNetworks();
    const vpc = networks.find((x) => x.Name === "cloudlet_default");
    if (vpc === undefined) {
      return { err: "Default cloudlet NET does not exist" };
    }

    const subnets = networks.filter((x) => x.Name.includes("subnet"));

    const subnetName = `subnet-${isPrivateSubnet ? "private" : "public"}-${
      subnets.length
    }`;

    try {
      const network = await docker.createNetwork({
        Name: subnetName,
        Driver: "bridge",
        Internal: isPrivateSubnet,
      });
      return network;
    } catch (e) {
      return { err: JSON.stringify(e) };
    }
  });
}

export default fp(create);
