import React from 'react';
import logo from '../assets/logo-iso-768x428.webp';
import '../App.css'

const BusinessCard = ({ name, education, jobTitle, company, email }) => {
    return (
        <div className="card">
            <header>
                <img src={logo} alt="company logo" className="logo"/>
            </header>
            <h2>{name}</h2>
            <p><strong>Education:</strong> {education}</p>
            <p><strong>Job Title:</strong> {jobTitle}</p>
            <p><strong>Company:</strong> {company}</p>
            <p><strong>Email:</strong> {email}</p>
        </div>
    );
};

export default BusinessCard;