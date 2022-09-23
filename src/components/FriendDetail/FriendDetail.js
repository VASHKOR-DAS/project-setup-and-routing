import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {

    // useParams() diye dynamically route show korano hoy
    const {friendId} = useParams();

    // fetch korle 1ta object pabo, tai default value hisebe empty object hoyece
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])


    return (
        <div>
            <h2>Friend details components : {friendId}</h2>
            <h3>{friend.name}</h3>
            <p>{friend.email}</p>
            <p>{friend.phone}</p>
            <p>{friend.website}</p>
        </div>
    );
};

export default FriendDetail;