const { MongoClient } = require('mongodb');
const uri = 
    "mongodb+srv://database_user:user123@cluster0.61fx7ap.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect((_) => {
    const collection = client.db('teste').collection('devices');
    collection.insertOne({ greeting: 'Hello Mongo' }, () => client.close());
});