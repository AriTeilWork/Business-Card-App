import React from 'react';
import logo from '../assets/logo-iso-768x428.webp';
import '../App.css';

const BusinessCard = ({ name, education, jobTitle, company, email, phone }) => {
  return (
    <div className="card">
      <header>
        <img src={logo} alt="company logo" className="logo" />
      </header>
      <h2 class="bc">{name}</h2>
      <p>
        <strong class="bc">{education}</strong> 
      </p>
      <p>
        <strong class="bc">{jobTitle}</strong> 
      </p>
      <p>
        <strong>{company}</strong> 
      </p>
      <p>
        <strong>{email}</strong> 
      </p>
      <p>
        <strong>{phone}</strong> 
      </p>
    </div>
  );
};

export default BusinessCard;