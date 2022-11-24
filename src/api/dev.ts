import { createServer } from "./createServer";

const server = createServer();

server.listen(3000, () => {
  console.log("API is listening on http://localhost:3000");
});