import React from 'react';
import { HiCheckCircle } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const ChatProfileCard = ({cu}) => {
    const {name, _id} = cu
    return (
        <Link to={`inbox-${_id}`} className='flex rounded-xl justify-between items-center py-2'>
                <div className='flex'>
                    <div className="avatar online">
                        <div className="w-14 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='d' />
                        </div>
                    </div>
                    <div className='ml-4'>
                        <h4 className=' text-xl'>{name}</h4>
                        <p className='text-gray-500'>You: Kemn acho?</p>
                    </div>
                </div>
                <div><HiCheckCircle /></div>
            </Link>
    );
};

export default ChatProfileCard;