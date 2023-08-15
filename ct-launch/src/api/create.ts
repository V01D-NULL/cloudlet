import Docker from "dockerode";
import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

type Body = {
  name: string;
  image: string;
  port: string;
  protocol: "tcp" | "udp";
  forwardPort: string;
  networkId: string;
};

async function create(server: FastifyInstance, options: any) {
  server.post("/create", async (request, reply) => {
    const docker = new Docker();
    const { name, image, forwardPort, protocol, port, networkId } =
      request.body as Body;

    if (name.toLowerCase().includes("cloudlet")) {
      throw new Error('Container may not have the word "cloudlet"');
    }

    try {
      const network = await docker.getNetwork(networkId).inspect();
      const containerOpts = {
        name,
        Image: image,
        ExposedPorts: {
          [`${port}/${protocol}`]: {},
        },
        HostConfig: {
          PortBindings: {
            [`${port}/${protocol}`]: [
              {
                HostPort: forwardPort,
              },
            ],
          },
          NetworkMode: network.Name,
        },
      };

      const container = await docker.createContainer(containerOpts);
      await container.start();

      return { msg: container.id };
    } catch (e) {
      return e;
    }
  });
}

export default fp(create);
