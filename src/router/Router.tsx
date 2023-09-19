import {createBrowserRouter} from 'react-router-dom';
import React, {ReactNode} from 'react';
import App from '../App';
import ErrorPage from '../pages/Error/ErrorPage';
import ChatRoom from '../pages/Home/ChatRoom';

interface IRouter {
  path: string;
  element: ReactNode;
  errorElement?: ReactNode;
  children?: IRouter[];
}

const routerData: IRouter[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <ChatRoom />,
      },
    ],
  },
];

export const router = createBrowserRouter(routerData);
