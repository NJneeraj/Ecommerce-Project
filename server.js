require("dotenv").config();
const express = require("express");
const { productRouter } = require("./routers/productRouter");
const handleError = require("./middlewares/errorHandler");
const { categoryRouter } = require("./routers/categoryRouter");
const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use("/api/products", productRouter);
app.use("/api/category", categoryRouter);
app.use(handleError);
app.listen(port, () => {
  console.log(`Server running on url http://localhost:${port}`);
});
