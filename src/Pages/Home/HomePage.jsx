import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import ChatHome from '../Chats/ChatHome';
import User from './Users/User';

const HomePage = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className=' pt-10'>

            {!user?.uid ?
                <User />
                :
                <ChatHome />
            }
        </div>
    );
};

export default HomePage;