const products = require("./products.json");
const axios = require("axios");
async function seed(data) {
    await axios.post('http://localhost:5000/api/products', data).then(res => console.log(res.data)).catch(err => console.log(err.message));
}

for (let itm of products)
    seed(itm);
