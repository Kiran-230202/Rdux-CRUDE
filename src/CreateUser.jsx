import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUsers } from './UserReducer';
import { users } from './Data';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        dispatch(addUsers({ id: newId, name, email }));
        nav("/");
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Id</label>
                    <input type="text" disabled className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
}

export default CreateUser;
