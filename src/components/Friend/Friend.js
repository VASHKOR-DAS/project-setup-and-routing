import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Friend = (props) => {
    
    const {name, email, id} = props.friends;

    // style
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    // useState route declare & dynamic path
    const navigate = useNavigate();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`
        navigate(url);
    }
    
    return (

        <div style={friendStyle}>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>

            {/* dynamically show route in Link */}
            <p><Link to={`/friend/${id}`}><button>Show Detail of {id}</button></Link> </p>

            {/** useState diye route declare & path
             * handleClick(id) ta holo this structure
             */}
            <button onClick={() => handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;