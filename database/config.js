const mongoose = require("mongoose");

const dbConection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB ONLINE");
  } catch (error) {
    console.log(error);
    throw new Error("Error en la conexion de la BD");
  }
};

module.exports = {
  dbConection,
};
