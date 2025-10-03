const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:<${process.env.MONGODB_PASSWORD}>@barbearia.
            ytgio3q.mongodb.net/?retryWrites=true&w=majority&appName=Barbearia`);
        console.log("Conectado ao MongoDB!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
};

module.exports = connectToDatabase;