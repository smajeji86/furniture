import mongoose from "mongoose";
import Storecart_items from "../models/cartitems.js";

const StoreCartItemsItems = async (info, req, res) => {
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
          Result: data,
          Status: 200
        });
      }
    });
};

const DeleteStoreCartItemsItems = async (info, req, res) => {
  mongoose
    .model("cart-" + info.UserId, Storecart_items)
    .deleteOne({ _id: info.id }, async (err, data) => {
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

export { StoreCartItemsItems, DeleteStoreCartItemsItems };
