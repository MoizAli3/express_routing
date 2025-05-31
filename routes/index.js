import express from "express"
import users from "./users.js"
import home from "./home.js"
import products from "./products.js"

const router = express.Router();

router.use("/home", home);
router.use("/users", users);
router.use("/products", products);





export default router;