import React from 'react';
import "./Footer.scss";
import {AiFillFacebook} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import {AiFillTwitterSquare} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";




function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='footer__socials'>
                <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' className='footer__social'> 
                <AiFillFacebook/>
                </a>
                <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' className='footer__social'>
                    <AiOutlineInstagram/>
                </a>
                <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer' className='footer__social'>
                    <AiFillTwitterSquare/>
                </a>
                <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer' className='footer__social'>
                    <AiFillYoutube/>
                </a>
            </div>
            <ul className='footer__links'>
                <li className='footer__link'>
                    <a href='/' target='_blank' rel='noopener noreferrer'>1</a>
                </li>
                <li className='footer__link'>
                    <a href='/' target='_blank' rel='noopener noreferrer'>2</a>
                </li>
                <li className='footer__link'>
                    <a href='/' target='_blank' rel='noopener noreferrer'>3</a>
                </li>
                <li className='footer__link'>
                    <a href='/' target='_blank' rel='noopener noreferrer'>4</a>
                </li>
                <li className='footer__link'>
                    <a href='/' target='_blank' rel='noopener noreferrer'>5</a>
                </li>
                <li className='footer__link'>
                    <a href='/' target='_blank' rel='noopener noreferrer'>6</a>
                </li>
                <li className='footer__link'>
                    <a href='/' target='_blank' rel='noopener noreferrer'>7</a>
                </li>
                <li className='footer__link'>
                    <a href='/' target='_blank' rel='noopener noreferrer'>8</a>
                </li>
            </ul>
            <div className='footer__copyright'>
                Netflix-clone Copyright © 2020. All rights reserved.
            </div>
        </div>
    </div>
  )
}

export default Footer;