import React from 'react';
import './styles/phoneIcon.css';
import imgPhoneIcon from '../assets/icon-phone-2.png';

const PhoneIcon = () => {
  return (
    <a className="phone-icon" href="https://w.app/g3wAzc" target='_blank'>
      <img src={imgPhoneIcon} alt="" />
    </a>
  );
};

export default PhoneIcon;
