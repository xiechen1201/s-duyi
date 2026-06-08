import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Email from '../components/Email';
import Tel from '../components/Tel';
import AddOrEdit from '../components/AddOrEdit';
import Detail from '../components/Detail';

function Router() {
    return useRoutes([
        {
            path: '/',
            element: <Navigate replace to='/home' />
        },
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/about',
            element: <About />,
            children: [
                {
                    path: 'email',
                    element: <Email />
                },
                {
                    path: 'Tel',
                    element: <Tel />
                },
                {
                    path: '',
                    element: <Navigate replace to='/about/email' />
                }
            ]
        },
        {
            path: '/AddOrEdit',
            element: <AddOrEdit />
        },
        {
            path: '/Detail',
            element: <Detail />
        }
    ]);
}

export default Router;
