import mongoose from "mongoose";
import Store_items from "../models/store_items.js";

const Create_items_store = async (info, req, res) => {
  mongoose
    .model(info.store_item, Store_items)
    .create(info, async (err, data) => {
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

export default Create_items_store;
