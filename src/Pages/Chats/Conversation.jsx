import React from 'react';
import { HiCheckCircle } from 'react-icons/hi2';

const Conversation = () => {
    return (
        <div className=''>

            

            <div className='p-5 mt-10 text-center'>
                <div className="w-36 mx-auto rounded-full">
                    <img className='rounded-full' src="https://placeimg.com/192/192/people" alt='user' />
                </div>
                <p className='text-4xl mt-3 mb-1'>Omar Faruk</p>
                <p className=''>You're friends on Meta </p>
            </div>

            <div className=''>
                <div className="justify-center avatar-group -space-x-6">
                    <div className="avatar">
                        <div className="w-14">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-14">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                </div>
                <p className="p-1 text-gray-500">say to your new meta friend Omar Faruk</p>
            </div>
            <p>21:32</p>

            <div className='text-end flex justify-end items-end'>
                <div >
                    <div >
                        <p className='p-2  text-right rounded-br-none rounded-bl-none inline-block bg-primary text-gray-800  rounded-lg font-semibold'>Hello Dear </p>
                    </div>
                    <div>
                        <p className='p-2  text-right inline-block  rounded-tr-none bg-primary text-gray-800  rounded-lg font-semibold'>Kemon achis?  </p>
                    </div>

                </div>
                <div><HiCheckCircle className='text-red-500 ml-1' /></div>
            </div>

            <div >
                <p className='p-1'>21:34</p>
                <div className='text-start'>
                    <div >
                        <p className='p-2  text-left max-w-[80%] rounded-br-none rounded-bl-none inline-block bg-gray-800 text-gray-100  rounded-lg font-semibold'>Aj amar mon valo nei.. bangladesh ke jor kore horiye diche tai ami vat khai nai. Sakiver jaiga ami hole choto vai k niye math chere chole astam...</p>
                    </div>
                    <div>
                        <p className='p-2 max-w-[80%] text-left inline-block  rounded-tl-none bg-gray-800 text-gray-100  rounded-lg font-semibold'>Kemon achis?  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Conversation;