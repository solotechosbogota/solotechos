import React from 'react';
import './styles/phoneIcon.css';
import imgPhoneIcon from '../assets/icon-phone-2.png';

const PhoneIcon = () => {
  return (
    <a className="phone-icon" href="https://wa.link/kq23n8" target="_blank">
      <img src={imgPhoneIcon} alt="" />
    </a>
  );
};

export default PhoneIcon;
