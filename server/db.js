const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("Aguardando conexão");

    mongoose.connect("mongodb+srv://database_user:user123@cluster0.61fx7ap.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log("MongoDB Atlas conectado!")).catch((error) => console.log(error));

};

module.exports = connectDatabase;