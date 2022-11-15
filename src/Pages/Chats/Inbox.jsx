import React from 'react';
import Conversation from './Conversation';
import TextBar from './TextBar';
import InboxUserProfile from './InboxUserProfile';

const Inbox = () => {
    return (
        <>
            <div className='p-[3%]'>
                <InboxUserProfile/>
                <Conversation />
            </div>
            <TextBar />
        </>
    );
};

export default Inbox;