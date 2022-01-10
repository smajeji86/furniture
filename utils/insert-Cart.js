import mongoose from "mongoose";
import Storecart_items from "../models/cartitems.js";
import User_info from "../models/Userinfo.js";

const InsertCartItems = async (info, req, res) => {
  mongoose.model(info.UserId, User_info).find({}, async (err, data) => {
    if (err) {
      res.send({
        Created: false,
        Status: 500
      });
    } else {
      if (Object.keys(data).length > 0) {
        mongoose
          .model("cart-" + info.UserId, Storecart_items)
          .create(info, async (err, data) => {
            if (err) {
              res.send({
                Created: false,
                Status: 500
              });
            } else {
              res.send({
                Created: true,
                Status: 200
              });
            }
          });
      } else {
        res.send({
          Created: false,
          Status: 500
        });
      }
    }
  });
};

export default InsertCartItems;
