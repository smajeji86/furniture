import Express from "express";
import Create_shippinginfo from "../utils/Create-shippinginfo.js";
import Create_items_store from "../utils/insert_records.js";
import Getfurne_storeItems from "../utils/Getfurne_storeItems.js";
import InsertCartItems from "../utils/insert-Cart.js";
import {
  StoreCartItemsItems,
  DeleteStoreCartItemsItems
} from "../utils/Showcartitems.js";
import GetUserInfo from "../utils/getuserinfo.js";
import { GetCount, TotalCost } from "../utils/GetCartInfo.js";

const router = Express.Router();

router.get("/", async (req, res) => {
  res.send("furne-store welcomes you!");
});

router.post("/add-info-items-furne-store", async (req, res) => {
  await Create_items_store(req.body, req, res);
});

router.post("/add-shipping-info", async (req, res) => {
  await Create_shippinginfo(req.body, req, res);
});

router.post("/insert-cart", async (req, res) => {
  await InsertCartItems(req.body, req, res);
});

router.post("/show-cart-items", async (req, res) => {
  await StoreCartItemsItems(req.body, req, res);
});

router.post("/delete-show-cart-items", async (req, res) => {
  await DeleteStoreCartItemsItems(req.body, req, res);
});
router.post("/furne-store-items", async (req, res) => {
  await Getfurne_storeItems(req.body, req, res);
});

router.post("/get-userinfo", async (req, res) => {
  await GetUserInfo(req.body, req, res);
});

router.post("/get-count-cart", async (req, res) => {
  await GetCount(req.body, req, res);
});

router.post("/total-cart-cost", async (req, res) => {
  await TotalCost(req.body, req, res);
});
export default router;
