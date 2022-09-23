import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriends(data))
    }, []);

    return (
        <div>
            <h1>Total friend : {friends.length}</h1>

            {
                friends.map(friends =>
                    <Friend
                        friends={friends}
                    ></Friend>)
            }
        </div>
    );
};

export default Home;