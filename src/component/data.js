import React, { useState, useEffect } from "react";
import axios from 'axios';

function Curdop() {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        axios.get("http://localhost:3500/api/get")
            .then((res) => {
                setUsers(res.data);
            });
    }

    function addUser() {
        const newUser = {
            username: username,
            password: password,
            email: email
        };

        axios.post("http://localhost:3500/api/create", newUser)
            .then(() => {
                alert("New user added successfully!");
                clearFields();
                fetchData();
            });
    }

    function deleteUser(id) {
        axios.delete(`http://localhost:3500/api/delete/${id}`)
            .then(() => {
                alert("User deleted successfully!");
                fetchData();
            });
    }

    function selectUser(id) {
        const selectedUser = users.find(user => user.id === id);
        if (selectedUser) {
            setUsername(selectedUser.username);
            setPassword(selectedUser.password);
            setEmail(selectedUser.email);
            setSelectedUserId(id);
            setEditMode(true);
        }
    }

    function updateUser() {
        const updatedUser = {
            username: username,
            password: password,
            email: email
        };

        axios.put(`http://localhost:3500/api/update/${selectedUserId}`, updatedUser)
            .then(() => {
                alert("User updated successfully!");
                clearFields();
                setEditMode(false);
                setSelectedUserId(null);
                fetchData();
            });
    }

    function clearFields() {
        setUsername("");
        setPassword("");
        setEmail("");
    }

    const userRows = users.map((user, index) =>
        <tr key={index}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <button className="btn btn-primary" onClick={() => selectUser(user.id)}>Select</button> |
                <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
            </td>
        </tr>
    );

    return (
        <div >


<nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">MENU</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">MENU</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link " href="*">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/rigister">RIGISTER</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/login">LOGIN</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
</nav>
            <div style={{backgroundColor:"lightgray"}}>
            <h3 style={{textAlign:"center"}}><b>User Management</b></h3>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
    <tbody>
        <tr>
            <td style={{ border: 'none', padding: '8px' }}>Username</td>
            <td style={{ border: 'none', padding: '8px' }}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            </td>
        </tr>
        <tr>
            <td style={{ border: 'none', padding: '8px' }}>Password</td>
            <td style={{ border: 'none', padding: '8px' }}>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </td>
        </tr>
        <tr>
            <td style={{ border: 'none', padding: '8px' }}>Email</td>
            <td style={{ border: 'none', padding: '8px' }}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </td>
        </tr>
    </tbody>
</table>

            {editMode ? <button className="btn btn-success"  onClick={updateUser}>Update User</button> : <button className="btn btn-info" onClick={addUser}>Add User</button>} <br/><br/>

            <table className="table table-bordered" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userRows}
                </tbody>
            </table>
            </div>
        </div>

    );
}

export default Curdop;
