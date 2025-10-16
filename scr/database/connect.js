
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("Conexão com o banco de dados realizada com sucesso!");
  } catch (error) {
    
    console.error("Erro ao conectar ao banco de dados:", error);
  }
};

module.exports = connectToDatabase;