const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
// const bodyParser = require("body-parser")

const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/product", productRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
 console.log("Server running on port " + PORT);
});