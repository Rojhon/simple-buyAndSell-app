import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("/user").then((response) => {
            setUsers(response.data)
            setIsPending(false);
            setError(null);

          }).catch(() => {
            setIsPending(false);
            setError("Could not fetch the data in the server!");
          });
    }
    , []);

    return (
        <div>
            <h1>List of Users: </h1>
            {error && <h2 id="error-msg">{error}</h2>}
            {isPending && <h2>Loading...</h2>}
            {users && users.map(result => <h2 key={result.id}><Link to={`user/${result.id}`}>{result.username}</Link></h2>)}
        </div>
    )
}

export default Users;
