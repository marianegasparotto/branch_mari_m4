import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import App from '../App';
import Login from '../Pages/loginPage/Login';
// import App from './App';
// import Login from './Login';


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { App }  path="/" exact />
           <Route component = { Login }  path="/sobre" />
       </BrowserRouter>
   )
}

export default Routes;