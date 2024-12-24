import React from 'react';

function UserDetails(props) {
    return (
        <div>
            <h2>User Details</h2>
            <button onClick={() => alert(`Name: ${props.name}`)}><strong>Name</strong></button>
            <button onClick={() => alert(`Age: ${props.age}`)}><strong>Age</strong></button>
            <button onClick={() => alert(`Email: ${props.email}`)}><strong>Email</strong></button>
            <button onClick={() => alert(`Mobile No: ${props.mobileNo}`)}><strong>Mobile No</strong></button>
            <button onClick={() => alert(`City: ${props.city}`)}><strong>City</strong></button>
        </div>
    );
}

export default UserDetails;
