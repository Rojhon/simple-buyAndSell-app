import React, {useState, useEffect} from 'react'
import axios from "axios";

const ProductList = ({id}) => {
    const [productsList, setProductsList] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${id}/products-list`).then((response) => {
            setProductsList(response.data)
            setIsPending(false);
            setError(null);

          }).catch(() => {
            setIsPending(false);
            setError("Could not fetch the data in the server!");
          });
    }
    , [productsList]);

    const onClick = (p_id, price) => {
        axios.post(`${id}/sell-product/${p_id}`, {price}).then((response) => {
                console.log(response.data)
        });
        
        };
    return (
        <>
            {error && <h3 id="error-msg">{error}</h3>}
            {isPending && <h3>Loading...</h3>}
            {productsList && productsList.map(result => 
                <div className="product" key={result.id}>
                    <div>
                        <h3>{result.name}</h3>
                        <h4>${result.price}</h4>
                    </div>
                    <button className="btn" 
                    onClick={() => {
                        onClick(result.id, result.price)
                    }}>Sell</button>
                </div>
            )}
        </>
    )
}

export default ProductList
