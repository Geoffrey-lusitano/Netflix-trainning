import React from 'react';
import { useState } from 'react';
import "./Nav.scss";
import  {GiHamburgerMenu} from 'react-icons/gi';
import {BiSearch} from 'react-icons/bi';
import {BsGiftFill} from 'react-icons/bs';
import {IoNotifications} from 'react-icons/io5';



function Nav() {

    const [navBlack, setNavBlack] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);


    const transitionNav = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
    };
    useState(() => {
        document.addEventListener('scroll', transitionNav);
    })
    /* scroll */

    /* burger */
    const handleClick = () => {
        toggleMenu? setToggleMenu(false) : setToggleMenu(true);
    }
  return (
    <div className={`nav ${navBlack || toggleMenu ? "nav--black" : ""} ${toggleMenu && "show"}`}>
        <button className='nav__burger' onClick={handleClick}><GiHamburgerMenu/></button>
        <img src="./images/logo.png" className='nav__logo' alt="Netflix"/>
        <nav className="nav__links">
            <a href='/' className='nav__link'>
                Accueil
            </a>
            <a href='/' className='nav__link'>
                Séries
            </a>
            <a href='/' className='nav__link'>
                Films
            </a>
        </nav>
        <div className='nav__actions'>
            <a href='/' className='nav__action'><BiSearch/></a>
            <a href='/' className='nav__action'>DIRECT</a>
            <a href='/' className='nav__action'><BsGiftFill/></a>
            <a href='/' className='nav__action'><IoNotifications/></a>
            <a href='/' className='nav__action'>
                <img src="./images/account.png" alt="Account"/>
                
            </a>

        </div>

    </div>
  )
}

export default Nav