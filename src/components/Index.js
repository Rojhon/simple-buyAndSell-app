import React, {useState, useEffect} from 'react';
import axios from "axios";
import Product from './Product';
import ProductList from './ProductList';

const Index = ({match}) => {
    const [userData, setUserData] = useState({});
    const [balance, setBalance] = useState();

    useEffect(() => {
        axios.get(`${match.params.id}`).then((response) => {
            setUserData(response.data)
            setBalance(response.data.balance)
          });
    }
    , [userData]);

    return (
        <>
            <h3>Welcome {userData.username}!</h3>
            <div className="header">
                <h1>Your Balance:</h1>
                <h1>${balance}</h1>
            </div>

            {/* Products to buy */}
            <div>
                <Product id={match.params.id} balance={balance}></Product>
            </div>

            {/* Products to sell */}
            <div>
                <h2>Products List:</h2>
                <ProductList id={match.params.id}></ProductList>
            </div>
        </>
    )
}

export default Index;
