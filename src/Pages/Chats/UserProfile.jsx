import React, { useContext, useState } from 'react';
import { HiCamera, HiPencilSquare } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const UserProfile = () => {
    const {user, logOut, error, setError} = useContext(AuthContext)
    const [toggle, setToggle] = useState(false)
    const profileToggle = () => {
        setToggle(s => !s);
    }

    const handelLogOut = () => {
        logOut()
            .then(result => {
                // user 
            }).catch((error) => {
                setError(error.massage)
            });
    }

    return (
        <div className={`flex justify-between items-center `}>
            <ul id='profile' className={`" top-32 bottom-0 left-[3%] right-[3%] z-50 menu dropdown-content p-2 shadow bg-gray-900 space-y-3 rounded-box mt-4" 
                        ${!toggle ? "hidden" : 'absolute'}`}>
                    {user?.displayName &&
                        <li>{user?.displayName}</li>
                    }
                    <li className='bg-[#3b82f510]'><Link>View Profile</Link></li>
                    <li className='bg-[#3b82f510]'><Link onClick={handelLogOut}>Log Out</Link></li>
                </ul>
            <div className="avatar ">
                
                <div onClick={profileToggle} className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://placeimg.com/192/192/people" alt='user' />
                </div>
                <h2 className='text-3xl font-bold text-gray-100 ml-4'>Chats</h2>
            </div>
            <div className='flex gap-3'>
                <div className='p-3 rounded-full bg-slate-700'><HiCamera className='w-5 h-5' /></div>
                <div className='p-3 rounded-full bg-slate-700'><HiPencilSquare className='w-5 h-5' /></div>
            </div>
        </div>
    );
};

export default UserProfile;