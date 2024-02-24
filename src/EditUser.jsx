import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, editUser } from './UserReducer';
import { users } from './Data';
import { useNavigate, useParams } from 'react-router-dom';

function EditeUser() {
   

    const {userid}=useParams()  
    const dispatch = useDispatch();
    const nav = useNavigate();

    const users=useSelector(state=>state.users);

    const existingUser=users.filter((user)=>(
        // console.log(user)
        user.id==userid

    )
    )
    const{name,email}=existingUser[0];

    const [uname, setUname] = useState(name);
    const [uemail, setUemail] = useState(email);



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editUser({id:userid, name:uname, email:uemail }));
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
                    <input type="text" value={uname} onChange={(e) => setUname(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" value={uemail} onChange={(e) => setUemail(e.target.value)} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
}

export default EditeUser;
