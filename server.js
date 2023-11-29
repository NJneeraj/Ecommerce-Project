require("dotenv").config();
const express = require("express");
const { productRouter } = require("./routers/productRouter");
const handleError = require("./middlewares/errorHandler");
const { categoryRouter } = require("./routers/categoryRouter");
const { userRouter } = require("./routers/userRouter");
const { cartRouter } = require("./routers/cartRouter");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/products", productRouter);
app.use("/api/auth", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/cart", cartRouter);
app.use(handleError);
app.listen(port, () => {
  console.log(`Server running on url http://localhost:${port}`);
});
