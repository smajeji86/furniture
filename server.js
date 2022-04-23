import Express from "express";
import path from "path";
import cors from "cors";
import pkg from "consola";
import bp from "body-parser";
// const mongoose=require("mongoose")
import mongoose from "mongoose"
import dotenv from "dotenv";
import router from "./routes/Router.js";

const { success, error } = pkg;

const __dirname = path.resolve();

const app = Express();
var port = process.env.PORT || 1902;
app.use(cors());
app.use(bp.json());
app.use("/api/furne-store/", router);

dotenv.config();

app.get("/", (req, res) => {
  res.send("Welcome to furne-store online");
});

// Connecting to Database
var url ="mongodb+srv://ftstore:jRcBL1W1LQAYhCqd@ftstore-cluster0.h3zcv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  //"mongodb+srv://smajeji86:shrivats01@cluster0.2ris6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// "mongodb+srv://ftstore:jRcBL1W1LQAYhCqd@ftstore-cluster0.h3zcv.mongodb.net/ftstore?retryWrites=true&w=majority";

// connect
//   .connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then((result) => {
//     success({ message: "Successfully Connected to the DB", badge: true });
//   })
//   .catch((err) => {
//     console.log(err)
//     error({
//       message: `Unable to connected with DB\nerror: ${err}`,
//       badge: true
//     });
//   });

const connectDB= async() => {
  try {
    await mongoose.connect(url,{
      onAfterSetupMiddleware:false,
      onBeforeSetupMiddleware:false
    })
    console.log("database connected")
  } catch (error) {
    console.log(error.message)    
  }
}


app.listen(port, () => {
  success({ message: `Listening on Port ${port}`, badge: true });
  connectDB()
});
