import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {

    // useParams() diye dynamically route show korano hoy
    const {friendId} = useParams();
    return (
        <div>
            <h3>Friend details components : {friendId}</h3>
        </div>
    );
};

export default FriendDetail;