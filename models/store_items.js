import Schema from "mongoose";

const Store_items = new Schema.Schema({
  Category: {
    type: String,
    required: true
  },
  StoreName: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  Image: {
    type: String,
    required: true
  },
  Price: {
    type: String,
    required: true
  }
});

export default Store_items;
