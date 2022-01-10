import mongoose from "mongoose";
import User_info from "../models/Userinfo.js";

const Create_shippinginfo = async (info, req, res) => {
  mongoose.model(info.UserId, User_info).create(info, async (err, data) => {
    if (err) {
      res.send({
        Created: "False",
        Status: 500
      });
    } else {
      res.send({
        Created: "Done",
        Status: 200
      });
    }
  });
};

export default Create_shippinginfo;
