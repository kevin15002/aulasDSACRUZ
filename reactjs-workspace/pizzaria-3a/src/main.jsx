import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
