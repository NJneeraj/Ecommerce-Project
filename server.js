require("dotenv").config();
const express = require("express");
const { productRouter } = require("./routers/productRouter");
const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use("/api/products", productRouter);
app.listen(port, () => {
    console.log(process.env.PORT)
    console.log(`Server running on url http://localhost:${port}`);
})

