import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import App from './App';
import {Provider}  from 'react-redux'; 
import MyStore from './Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>

    <Provider store={MyStore}>
    <App />
    </Provider>
    
    </React.StrictMode>
);

