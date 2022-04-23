import mongoose from "mongoose";
import Storecart_items from "../models/cartitems.js";

const GetCount = async (info, req, res) => {
  mongoose
    .model("cart-" + info.UserId, Storecart_items)
    .find({}, async (err, data) => {
      if (err) {
        res.send({
          Result: [],
          Status: 500
        });
      } else {
        res.send({
          Result: data.length,
          Status: 200
        });
      }
    });
};

const TotalCost = async (info, req, res) => {
  mongoose
    .model("cart-" + info.UserId, Storecart_items)
    .find({}, async (err, data) => {
      if (err) {
        res.send({
          Result: [],
          Status: 500
        });
      } else {
        var cost = 0;
        for (let i = 0; i < data.length; i++) {
          cost += parseInt(data[i].Price);
        }
        res.send({
          Result: cost,
          Status: 200
        });
      }
    });
};

export { GetCount, TotalCost };
