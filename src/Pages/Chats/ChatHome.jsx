import React from 'react';
import ActiveFriends from './ActiveFriends';
import ChatProfile from './ChatProfile';
import UserProfile from './UserProfile';

const ChatHome = () => {
    return (
        <div className='overflow-scroll '>
            <div className='p-[5%] pt-10'>
                    <UserProfile/>
                    {/* <ActiveFriends/> */}
                    {/* <ChatProfile/> */}
            </div>
        </div>
    );
};

export default ChatHome;