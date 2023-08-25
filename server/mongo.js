const { MongoClient } = require('mongodb');
const uri = 
    "mongodb+srv://database_user:user123@cluster0.61fx7ap.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect(() => {
    const collection = client.db('test').collection('devices');
    collection
        .findOne({ greeting: "Hello Mongo!" })
        .then((document) => console.log(document.greeting));
});