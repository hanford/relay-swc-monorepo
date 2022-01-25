const express = require("express");
const graphqlHTTP = require("express-graphql");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const { buildSchema } = require("graphql");

const rootValue = require("./rootValue");

const port = parseInt(process.env.PORT || 4000, 10);
const dev = process.env.NODE_ENV !== "production";
const schemaPath = path.join(__dirname, "/schema/__generated__/main.graphql");
const schemaContent = fs.readFileSync(schemaPath).toString();
const graphqlSchema = buildSchema(schemaContent);

const server = express();

server.use(cors());
server.use(latency({ min: 500, max: 1500 }));

server.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true,
    rootValue: rootValue,
  })
);

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});

function latency(options) {
  if (!options) {
    options = {};
  }
  var min = options.min || 0;
  var max = Math.max(options.max || 0, min);
  return function (req, res, next) {
    var wait = min + Math.random() * (max - min);
    setTimeout(next, wait);
  };
}
