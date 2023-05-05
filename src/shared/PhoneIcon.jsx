import React from 'react';
import './styles/phoneIcon.css';
import imgPhoneIcon from '../assets/icon-phone.png';

const PhoneIcon = () => {
  return (
    <a className="phone-icon" href="tel: 3138127333">
      <img src={imgPhoneIcon} alt="" />
    </a>
  );
};

export default PhoneIcon;
