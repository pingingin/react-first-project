import React from 'react'
import logo from '../img/logo1.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import './Navbar.css';

function Navbar() {
    return (
      <nav>
          <ul>
            <li className='iconLeft'><GiHamburgerMenu/></li>
            <li className='iconLeft logo'><img src={logo} width="200"/></li>
          </ul>
          <ul>
            <div className='navRight'>
                <li className='iconRight'><BiSearch/></li>
                <li className='iconRight'>TH<RiArrowDropDownLine/></li>
            </div>
          </ul>
      </nav>
    );
}

export default Navbar





