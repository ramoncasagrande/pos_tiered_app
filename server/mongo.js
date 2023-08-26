const { MongoClient } = require('mongodb');
const uri = 
    "mongodb+srv://database_user:user123@cluster0.61fx7ap.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);

var collection;

module.exports = {
    connect: async () => {
        await client.connect(() => {
            collection = client.db('test').collection('devices');
        });
    },
    collection: () => {
        return collection;

    }
}

/*collection
.findOne({ greeting: "Hello Mongo!" })
.then((document) => console.log(document.greeting));*/