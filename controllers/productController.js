const getAll = async (req, res) => {
    res.send("All");
}
const getWithId = async (req, res) => {
    res.send("with id");
}
const addProduct = async (req, res) => {
    res.send("add");
}
const updateProduct = async (req, res) => {
    res.send("update");
}
const deleteProduct = async (req, res) => {
    res.send("Delete");
}
module.exports = { getAll, getWithId, addProduct, updateProduct, deleteProduct };