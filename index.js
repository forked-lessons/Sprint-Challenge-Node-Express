const server = require("./server");

port = 4000;
server.listen(port, () => {
  console.log(`\n *** Server Running on http://localhost:${[port]} ***\n`);
});
