require(`dotenv`).config();
const server = require('./api/server.js');


const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log('\n*** Server Running on http://localhost:${port} ***\n');
});





//step 1, check if start is in json, step 2 make sure process.env for port