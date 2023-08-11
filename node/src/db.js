import mongoose from "mongoose";

const userdb = "ssuseradmin";
const password = "ssuseradmin123";
const dbname = "ssapi";
const mongo_uri = `mongodb+srv://${userdb}:${password}@cluster0.xryi8np.mongodb.net/${dbname}?retryWrites=true&w=majority`;

export const connectDB = async () => {
  try {
    await mongoose.connect(mongo_uri).then(() => {
      console.log(`Te has conectado a la MongoDB`);
    });
  } catch (error) {
    console.log(error);
  }
};
