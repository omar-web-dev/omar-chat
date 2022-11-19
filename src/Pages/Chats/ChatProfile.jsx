import React, { useEffect, useState } from 'react';
import ChatProfileCard from './ChatProfileCard';

const ChatProfile = () => {
    const [chatUser, setChatUser] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setChatUser(data))
    }, [chatUser])

    return (
        <div className='py-2'>
            {chatUser.map(cu => <ChatProfileCard cu={cu} key={cu._id}/>)}
        </div>
    );
};

export default ChatProfile;