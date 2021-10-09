const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController")

router.get("", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.get("/:id/products-list", userController.getUserProductsList);
// router.post("/create-new-user", userController.createNewUser);
router.post("/:id/set-balance", userController.setBalance);
router.post("/:id/buy-product", userController.buyProduct);
router.delete("/:id/sell-product/:p_id", userController.sellProduct);
router.delete("/delete-user/:id", userController.deleteUser);

module.exports = router;