import React from 'react'
import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, fetchUsers } from '../reducers/userSlice'

export const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users) // call store
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchUsers()) // { type: action }
    }, [dispatch])
    
    // function confirmed delete user
    const handleDelete = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this user?");
        if(confirmed) {
            const response = await dispatch(deleteUser(id));
            if(deleteUser.fulfilled.match(response)) {
                alert("User deleted successfully!")
            } else {
                alert("Failed to delete user.")
            }
        }
    }

  return (
    <>
    <div className='container mx-auto p-4'>
            <div className="flex justify-between items-center">
                <h3 className='mb-4 text-lg font-semibold'>User List</h3>
                <button 
                        onClick={() => navigate('/create')} 
                        className="rounded bg-yellow-500 px-3 py-1 text-white">
                        Create
                    </button>
            </div>
        <ul>
        {users.map((user) => (
            <li key={user.id} className='flex items-center justify-between border-b py-2'>
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phoneNumber}</p>
                </div>
                <div>
                    <button onClick={() => handleDelete(user.id)} className='mr-2 rounded bg-red-500 px-3 py-1 text-white'>Delete</button>
                    <Link to={`/edit/${user.id}`}>
                        <button className='rounded bg-blue-500 px-3 py-1 text-white'>Edit</button>
                    </Link>
                </div>
            </li>
            ))}
        </ul>
    </div>
    </>
  )
}

