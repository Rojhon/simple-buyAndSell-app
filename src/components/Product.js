import React, {useState, useEffect} from 'react'
import axios from "axios";

const Products = ({id, balance}) => {
    const [products, setProducts] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("/product").then((response) => {
            setProducts(response.data)
            setIsPending(false);
            setError(null);

          }).catch(() => {
            setIsPending(false);
            setError("Could not fetch the data in the server!");
          });
    }
    , []);

    const onClick = (name, price) => {
        axios.post(`${id}/buy-product`, {name, price}).then((response) => {
                console.log(response.data)
        });
      
        };
    
    return (
        <>
            {error && <h3 id="error-msg">{error}</h3>}
            {isPending && <h2>Loading...</h2>}
            {products && products.map(result => 
                <div className="product" key={result.id}>
                    <div>
                        <h3>{result.name}</h3>
                        <h4>${result.price}</h4>
                    </div>
                    <button className={`${(balance >= result.price) ? "btn": "btn-no-bal"}`}  onClick={() =>
                    {
                        if(balance >= result.price){
                            onClick(result.name, result.price);
                        }
                    }}>Buy</button>
                </div>
            )}
        </>
    )
}

export default Products
