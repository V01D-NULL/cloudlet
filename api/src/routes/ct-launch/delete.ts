import axios from "axios";
import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

async function remove(server: FastifyInstance, options: any) {
  server.post("/ct-launch/delete", async (request, reply) => {
    try {
      const requestBody = request.body;
      const response = await axios.post(
        "http://ct-launch:8080/delete",
        requestBody
      );

      return { msg: response.data.msg };
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

export default fp(remove);
