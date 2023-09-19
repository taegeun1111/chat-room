import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.scss';
import {RouterProvider} from 'react-router-dom';
import {router} from './router/Router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
