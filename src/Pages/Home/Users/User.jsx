import React from 'react';
import LoginModel from '../../Login/LoginModel';
import Registration from '../../Registration/Registration';

const User = () => {
    return (
        <>
            <div className='border'>
                <div className="mt-14">
                    <img src="https://i.ibb.co/6P6spfx/home.png" alt="" />
                </div>
                <div className=' w-full bottom-0'>
                    <div className='text-center '>
                        <p className=' text-[#EF5858] text-4xl'> Welcome </p>
                        <p className=''>This is a best </p>
                        <div className='p-10'>
                            <label htmlFor="my-modal-3" className="btn mb-3 w-full font-bold btn-outline btn-warning">Create Account</label>

                            <LoginModel />
                            <Registration/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;