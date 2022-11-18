import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import NotificationContextProvider from './context/NotificationContext';
import ChatContextProvider from './context/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationContextProvider>
      <AuthContextProvider>
        <ChatContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChatContextProvider>
      </AuthContextProvider>
    </NotificationContextProvider>
  </React.StrictMode>
);
