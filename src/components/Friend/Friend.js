import React from 'react';
import { Link } from 'react-router-dom';


const Friend = (props) => {
    
    const {name, email, id} = props.friends;

    // style
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    
    return (

        <div style={friendStyle}>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>

            {/* dynamically show route in Link */}
            <p><Link to={`/friend/${id}`}><button>Show Detail of {id}</button></Link> </p>
        </div>
    );
};

export default Friend;