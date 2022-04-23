import mongoose from "mongoose";
import User_info from "../models/Userinfo.js";

const GetUserInfo = async (info, req, res) => {
  mongoose.model(info.UserId, User_info).find({}, async (err, data) => {
    if (err) {
      res.send({
        Result: [],
        Status: 500
      });
    } else {
      res.send({
        Result: data,
        Status: 200
      });
    }
  });
};

export default GetUserInfo;
