import Schema from "mongoose";

const User_info = new Schema.Schema({
  UserId: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  Username: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  State: {
    type: String,
    required: true
  },
  Country: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Phonenumber: {
    type: String,
    required: true
  }
});

export default User_info;
