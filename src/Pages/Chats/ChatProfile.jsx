import React from 'react';
import { HiCheckCircle, HiPlus } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const ChatProfile = () => {
    // const handelUserInbox = () => {
    //    <Link to='inbox'></Link>
    // }
    return (
        <div>

            

            <div>
                <div className='py-2'>
                    <Link to='inbox' className='flex rounded-xl justify-between items-center py-2'>
                        <div className='flex'>
                            <div className="avatar online">
                                <div className="w-14 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className='ml-4'>
                                <h4 className=' text-xl'>Israt Jaham Munni</h4>
                                <p className='text-gray-500'>You: Kemn acho?</p>
                            </div>
                        </div>
                        <div><HiCheckCircle /></div>
                    </Link>
                    <div className='flex justify-between items-center py-2'>
                        <div className='flex'>
                            <div className="avatar online">
                                <div className="w-14 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className='ml-4'>
                                <h4 className=' text-xl'>Israt Jaham Munni</h4>
                                <p className='text-gray-500'>You: Aj amar mon valo ney</p>
                            </div>
                        </div>
                        <div><HiCheckCircle /></div>
                    </div>
                    <div className='flex justify-between items-center py-2'>
                        <div className='flex'>
                            <div className="avatar offline">
                                <div className="w-14 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className='ml-4'>
                                <h4 className=' text-xl'>Israt Jaham Munni</h4>
                                <p className='text-gray-500'>You: Aj amar mon valo ney</p>
                            </div>
                        </div>
                        <div className='border p-[6px] rounded-full'></div>
                    </div>
                    <div className='flex justify-between items-center py-2'>
                        <div className='flex'>
                            <div className="avatar online">
                                <div className="w-14 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className='ml-4'>
                                <h4 className=' text-xl'>Israt Jaham Munni</h4>
                                <p className='text-gray-500'>You: Aj amar mon valo ney</p>
                            </div>
                        </div>
                        <div><HiCheckCircle className='text-red-500'/></div>
                    </div>
                    <div className='flex justify-between items-center py-2'>
                        <div className='flex'>
                            <div className="avatar online">
                                <div className="w-14 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className='ml-4'>
                                <h4 className=' text-xl'>Israt Jaham Munni</h4>
                                <p className='text-gray-500'>You: Aj amar mon valo ney</p>
                            </div>
                        </div>
                        <div><HiCheckCircle className='text-red-500'/></div>
                    </div>
                    <div className='flex justify-between items-center py-2'>
                        <div className='flex'>
                            <div className="avatar online">
                                <div className="w-14 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className='ml-4'>
                                <h4 className=' text-xl'>Israt Jaham Munni</h4>
                                <p className='text-gray-500'>You: Aj amar mon valo ney</p>
                            </div>
                        </div>
                        <div><HiCheckCircle /></div>
                    </div>
                    <div className='flex justify-between items-center py-2'>
                        <div className='flex'>
                            <div className="avatar online">
                                <div className="w-14 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className='ml-4'>
                                <h4 className=' text-xl'>Israt Jaham Munni</h4>
                                <p className='text-gray-500'>You: Aj amar mon valo ney</p>
                            </div>
                        </div>
                        <div><HiCheckCircle /></div>
                    </div>
                    <div className='py-3'>
                        <div>
                            <div className="avatar ">
                                <div className="w-14 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatProfile;