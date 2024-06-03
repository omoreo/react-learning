import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import { createUser, editUser, fetchUser } from '../reducers/userSlice';

export const UserEdit = () => {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.user.currentUser)
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchUser(id))
        }
    }, [id, dispatch])

    useEffect(() => {
        if (currentUser) {
            setUserData(currentUser)
        }
    }, [currentUser])

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    };

    // const handleSave = async () => {
    //     console.log(userData);
    //     console.log(id);
    //     if (id) {
    //         const response = await dispatch(editUser(userData))
    //         if (response.success) {
    //             alert("Edit user successful!")
    //             Navigate('/');
    //         } 
    //     } else {
    //         const response = await dispatch(createUser(userData))
    //         if (response.success) {
    //             alert("Create user successful!")
    //             navigate('/');
    //         }
    //     }
    // }

    // return to homepage 
    const handleSave = async () => {
        if (id) {
            const response = await dispatch(editUser({id, ...userData}));
            if(editUser.fulfilled.match(response)) {
                alert("Edit user successful!");
                navigate('/');
            } else {
                alert("Failed to edit user.")
            }
        } else {
            const response = await dispatch(createUser(userData));
            if (createUser.fulfilled.match(response)) {
                alert("Create user successful!");
                navigate('/');
            } else {
                alert("Failed to create user.")
            }
        }
    }

  return (
      <div className='container mx-auto p-4'>
        <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder='Name'
            className="mb-2 w-full rounded border p-2"  
            />
        <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder='Email'
            className="mb-2 w-full rounded border p-2"
            />
        <input
            type="text"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleChange}
            placeholder='Phone Number'
            className="mb-2 w-full rounded border p-2"
            />
        <button onClick={handleSave} className="rounded bg-green-500 px-4 py-2 text-white">Save</button>
    </div>
  )
}
