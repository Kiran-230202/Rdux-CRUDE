import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUsers } from './UserReducer';

function Home() {
    const users=useSelector(state=>state.users);
    const dispatch=useDispatch();
    const LoadDelete=(userid)=>{
        dispatch(deleteUsers({id:userid}));

    }
  return (
    <div className='container text-center'>

       
        
        <Link to="/add"  className='btn btn-warning m-2'>Add +</Link>

        <table className='table '>
            <thead className='table-dark'>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>

                {
                    users.map((item,index)=>{
                       return(
                        <tr key={index}>    
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>
                            <Link to={`/edit/${item.id}`} className='btn btn-success m-2'>Edit</Link>
                            <Link to="/view" className='btn  btn-primary m-2'>View</Link>
                        <button onClick={()=>{LoadDelete(item.id)}} className='btn btn-danger m-2' >Delete</button>
                        </td>
                    </tr>
                       )

                    })
                }
                
            </tbody>
        </table>


      

    </div>
  )
}

export default Home

