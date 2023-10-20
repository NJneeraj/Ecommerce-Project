const products = require("./products.json");
const axios = require("axios");
async function seed(data, loc) {
  await axios
    .post(`http://localhost:5000/api/${loc}`, data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}
const categories = [
  {
    name: "Electronics",
  },
  { name: "Clothing" },
  { name: "Sports" },
  { name: "Books" },
  { name: "Toys" },
  { name: "Games" },
  { name: "Grocery" },
  { name: "Beauty" },
  { name: "Home" },
  { name: "Luggage" },
];

function processSeedData(data, loc) {
  for (let itm of data) seed(itm, loc);
}

function main() {
  let arg = process.argv[2];
  console.log(arg);
  if (arg == "products") {
    processSeedData(products, arg);
    console.log("pro");
  } else if (arg == "category") {
    processSeedData(categories, arg);
    console.log("cat");
  }
}
main();
