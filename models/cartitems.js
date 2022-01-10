import Schema from "mongoose";

const Storecart_items = new Schema.Schema({
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

export default Storecart_items;
