const firebase = require("../firebase")

exports.getAllProducts = (req, res) => {
    const productsRef = firebase.database().ref('Products');
    productsRef.once("value", snapshot => {
        const data = snapshot.val();
        const dataList = [];
        for (let id in data) {
        dataList.push({ id, ...data[id] });
        }
        res.json(dataList)
    });
};

exports.createNewProduct = (req, res) => {
    const productsRef = firebase.database().ref('Products');
    productsRef.push(req.body)
    res.json("Successfully Created New Product")
};