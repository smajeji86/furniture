import mongoose from "mongoose";
import Store_items from "../models/store_items.js";

const Getfurne_storeItems = async (info, req, res) => {
  mongoose
    .model("furne-store-" + info.store_type, Store_items)
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

export default Getfurne_storeItems;
