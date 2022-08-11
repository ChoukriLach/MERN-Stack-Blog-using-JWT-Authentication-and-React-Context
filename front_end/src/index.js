import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import App from './App';
import {WorkoutsContextProvider} from './Context/WorkoutsContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <App/>
    </WorkoutsContextProvider>
  </React.StrictMode>
);


