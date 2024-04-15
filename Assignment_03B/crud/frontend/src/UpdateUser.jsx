import { useState, useEffect } from 'react';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
    const { id } = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.post(`http://localhost:8000/api/v1/users/getUser/${id}`)
            .then(res => {
                setName(res.data.name);
                setEmail(res.data.email);
                setAge(res.data.age);
                console.log(res);
            })
            .catch(err => console.log(err));
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.post(`http://localhost:8000/api/v1/users/UpdateUser/${id}`, { name, email, age })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center' style={{ background: 'linear-gradient(to bottom right, #135D66, #C4E4FF)' }}>
            <div className='w-50 bg-white rounded p-5' style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <form onSubmit={handleSubmit}>
                    <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>Update User</h1>
                    <div className='mb-3'>
                        <label htmlFor='name' style={{ color: '#333', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Name:</label>
                        <input
                            type='text'
                            id='name'
                            placeholder='Enter Name'
                            className='form-control'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' style={{ color: '#333', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Email:</label>
                        <input
                            type="email"
                            id='email'
                            placeholder='Enter Email'
                            className='form-control'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='age' style={{ color: '#333', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Age:</label>
                        <input
                            type="text"
                            id='age'
                            placeholder='Enter Age'
                            className='form-control'
                            value={age}
                            onChange={e => setAge(e.target.value)}
                        />
                    </div>
                    <button
                        className='btn btn-success'
                        style={{
                            background: 'linear-gradient(to bottom right, #ff4d4d, #1a75ff)',
                            color: "#fff",
                            border: 'none',
                            borderRadius: '5px',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            width: '100%',
                            marginTop: '10px',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to bottom right, #1a75ff, #ff4d4d)'}
                        onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to bottom right, #ff4d4d, #1a75ff)'}
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;
