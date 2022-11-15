import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Inbox from '../Pages/Chats/Inbox';
import HomePage from '../Pages/Home/HomePage';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';


const route = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        children : [
            {
                path : '/',
                element : <HomePage/>
            },
            {
                path : 'home',
                element : <HomePage/>
            },
            {
                path : 'registration',
                element : <Registration/>
            },
            {
                path : 'login',
                element : <Login/>
            },
            {
                path : 'inbox',
                element : <Inbox />
            },
        ]
    }
]) 

export default route;