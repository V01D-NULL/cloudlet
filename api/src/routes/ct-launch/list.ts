import axios from "axios";
import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

async function list(server: FastifyInstance, options: any) {
  server.get("/ct-launch/list", async (request, reply) => {
    try {
      const response = await axios.get("http://ct-launch:8080/list");
      return response.data;
    } catch (error: any) {
      let errorMessage = error.message; // Default to the basic error message

      // Check if the error has a response and a data property with the message inside
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      }

      return { error: `Error: ${errorMessage}` };
    }
  });
}

export default fp(list);
