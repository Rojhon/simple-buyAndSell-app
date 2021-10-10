const firebase = require("../firebase")

exports.getAllUsers = (req, res) => {
    const usersRef = firebase.database().ref('Users');
    usersRef.once("value", snapshot => {
        const data = snapshot.val();
        const dataList = [];
        for (let id in data) {
        dataList.push({ id, ...data[id] });
        }
        res.json(dataList)
    });
    
};

exports.getUser = (req, res) => {
    const usersRef = firebase.database().ref('Users').child(req.params.id);
    usersRef.once("value", snapshot => {
        res.json(snapshot.val());
    });
    
};

exports.getUserProductsList = (req, res) => {
    const usersRef = firebase.database().ref('Users').child(req.params.id).child("products_list");
    usersRef.once("value", snapshot => {
        const data = snapshot.val();
        const dataList = [];
        for (let id in data) {
        dataList.push({ id, ...data[id] });
        }
        res.json(dataList)
    });
    
};

// Need to fix
// exports.createNewUser = (req, res) => {
//     const usersRef = firebase.database().ref('Users');

//     usersRef.once("value", snapshot => {
//         const data = snapshot.val();
//         const dataList = [];
//         // var username
//         for (let id in data) {
//             dataList.push({ id, ...data[id] });
//         }
//     });
// };

exports.buyProduct = (req, res) => {
    const usersRef = firebase.database().ref('Users').child(req.params.id);
    const balance = usersRef.child("balance")
    const products_list = usersRef.child("products_list")

    usersRef.once("value", snapshot => {
        balance.set(snapshot.val()["balance"] - req.body["price"])
        products_list.push(req.body)
        res.json("Buy Product " + req.body["name"]);
       
    });
};

exports.sellProduct = (req, res) => {
    const usersRef = firebase.database().ref('Users').child(req.params.id);
    const balance = usersRef.child("balance")
    const product = usersRef.child("products_list").child(req.params.p_id);

    usersRef.once("value", snapshot => {
        balance.set(snapshot.val()["balance"] + req.body["price"]);
        product.remove();
        res.json("Sell Product");
    });
};

exports.deleteUser = (req, res) => {
    const usersRef = firebase.database().ref('Users').child(req.params.id);
    usersRef.remove()
    res.json("Successfully Deleted the User")
};
