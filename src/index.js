const app = require("./app");
PORT = 3000;

async function main() {
  await app.listen(PORT);
  console.log(`server on port ${PORT}`);
}

main();
