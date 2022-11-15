import React from 'react';
import { HiChevronLeft, HiPhone, HiVideoCamera } from 'react-icons/hi2';

const InboxUserProfile = () => {
    return (
        <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <div><HiChevronLeft className='mr-2 hover:text-red-500 text-primary font-bold h-12 w-12' /></div>
                    <div className="avatar ">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" alt='user' />
                        </div>
                    </div>
                    <div className='ml-4'>
                        <h2 className='text-xl font-semibold text-gray-100 '>Omar Faruk</h2>
                        <p className='text-gray-400 '>Messenger</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className='py-3 rounded-full'><HiPhone className='w-8 h-8 text-primary' /></div>
                    <div className='py-3 pr-3 rounded-full'><HiVideoCamera className='w-8 h-8 text-primary' /></div>
                </div>
            </div>
    );
};

export default InboxUserProfile;