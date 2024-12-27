import React, { useState } from 'react';

function UserInfo() {
    const [user, setUser] = useState({
        name: 'John',
        lname: 'Doe',
        age: 25
    });

    const updateUserInfo = () => {
        setUser({
            name: 'Jane',
            lname: 'Smith',
            age: 30
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    return (
        <div>
            <h1>User Information</h1>
            <form>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lname"
                        value={user.lname}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={user.age}
                        onChange={handleChange}
                    />
                </label>
                <br />
            </form>
            <p>First Name: {user.name}</p>
            <p>Last Name: {user.lname}</p>
            <p>Age: {user.age}</p>
            <button onClick={updateUserInfo}>Update Info</button>
        </div>
    );
}

export default UserInfo;

