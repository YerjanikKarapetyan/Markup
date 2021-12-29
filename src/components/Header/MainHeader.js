import React  from 'react';
import Main from '../Main/Main';
import Other from './Other/Other';
import Login from './Login/Login';
import Pictures from './Pictures/Pictures';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import './MainHeader.css';

const MainHeader = () =>{

return(
      <Router>
      <div className="MainHeader">
          <ul className='MainHeader-ul'>
            <li>
              <Link to="/Main">Main</Link>
            </li>
            <li>
              <Link to="/Pictures">Pictures</Link>
            </li>
            <li>
              <Link to="/Other">Other</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
      </div>
      <Routes>
          <Route path="/Main" element={<Main/>} />
          <Route path="/Pictures" element={<Pictures/>}/>
          <Route path="/Other" element={<Other/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
    </Router>
    );
}
export default MainHeader;