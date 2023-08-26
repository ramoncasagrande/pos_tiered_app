const express = require('express')
const cors = require('cors')
const mongo = require('./mongo')
const connectDatabase = require('./db')
const Collection = require("./Collection")

const server = express();
server.use(cors());

connectDatabase();
server.use(express.json());
server.get('/', async (req, res) => {
  const collection = await Collection.findOne();
  const resp = collection.greeting
  res.json(`${resp} + Express `);
})

server.listen(3001);

/*server.get('/', (req, res) => {
  mongo.collection()
    .findOne({ greeting: "Hello Mongo!" })
    .then((document) => res.json(`${document.greeting} + Express`));
  res.json('Hello Express!')
})
server.listen(3001, () => {
  console.log("server is running on port 3001");
  mongo.connect();
});*/

