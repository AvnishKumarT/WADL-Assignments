import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:8000/api/v1/users/getallusers")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/v1/users/deleteUser/${id}`)
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center' style={{ background: "linear-gradient(to top right, #5757fe, #F6F5F5)" }}>
            <div className='w-75 bg-white rounded p-3'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => (
                            <tr key={i}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/update/${user._id}`} className='btn btn-primary' style={{ background: 'linear-gradient(to bottom right, #135D66, #C4E4FF)', color: "#fff" ,marginRight:'20px'}}>Update</Link>
                                    {/* <span>                   </span> */}
                                    <button className='btn btn-danger' style={{background: 'linear-gradient(to bottom right, #008DDA, #90D26D)', color: "#fff"}} onClick={(e) => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className='btn btn-success' style={{ background: 'linear-gradient(to bottom right, #ff4d4d, #1a75ff)', color: "#fff" }}>Add New User</Link>
                </div>
            </div>
        </div>
    );
}

export default Users;
