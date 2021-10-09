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

exports.setBalance = (req, res) => {
    const usersRef = firebase.database().ref('Users').child(req.params.id).child("balance");
    usersRef.set(req.body["balance"])
    res.json("Update Balance!");
};

exports.buyProduct = (req, res) => {
    const usersRef = firebase.database().ref('Users').child(req.params.id).child("products_list");
    usersRef.push(req.body);
    res.json("Buy Product " + req.body["name"]);
};

exports.sellProduct = (req, res) => {
    const usersRef = firebase.database().ref('Users').child(req.params.id).child("products_list").child(req.params.p_id);
    usersRef.remove()
    res.json("Sell Product");
};

exports.deleteUser = (req, res) => {
    const usersRef = firebase.database().ref('Users').child(req.params.id);
    usersRef.remove()
    res.json("Successfully Deleted the User")
};
