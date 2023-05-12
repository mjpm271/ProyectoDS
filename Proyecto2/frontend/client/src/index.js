import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Create from './pages/create';
import Read from './pages/read';
import ReadPersona from './pages/readPersonaID';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Create />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
