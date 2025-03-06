import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BusinessCard from './components/BusinessCard.jsx';
import ShowButton from './components/ShowButton.jsx';
import { p } from 'framer-motion/client';



function App() {
  const [showEmail, setShowEmail] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleEmail = () => {
    setShowEmail(!showEmail);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  const businessCardsData = [
    {
      name: 'Anna-Kaisa Saari',
      education: 'KTM, Ins (yAMK) Ins (AMK), AmO',
      jobTitle: 'Päätoiminen tuntiopettaja',
      company: 'VAASAN AMMATTIKORKEAKOULU UNIVERSITY OF APPLIED SCIENCES',
      email: 'asa@vamk.fi',
      phone: '(+358)-123-456-7890',
    },
    {
      name: 'John Doe',
      education: 'M.Sc, M.Eng, B.Sc, Professional Teacher',
      jobTitle: 'Product Manager',
      company: 'VAASAN AMMATTIKORKEAKOULU UNIVERSITY OF APPLIED SCIENCES',
      email: 'john.doe@example.com',
      phone: '(+358)-123-456-7890',
    },
    {
      name: 'Jane Smith',
      education: 'Dr, M.Sc, M.Eng, B.Sc, Professional Teacher',
      jobTitle: 'CEO',
      company: 'VAASAN AMMATTIKORKEAKOULU UNIVERSITY OF APPLIED SCIENCES',
      email: 'jane.smith@example.com',
      phone: '(+358)-123-456-7890',
    },
  ];

  const filteredCards = businessCardsData.filter((card) => {
    const searchRegex = new RegExp(searchTerm, 'i');
    return (
      searchRegex.test(card.name) ||
      searchRegex.test(card.education) ||
      searchRegex.test(card.jobTitle) ||
      searchRegex.test(card.company)
    );
  });

  return (   
  <div id="businessCards">
        <h1 class="bc">Business Cards</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <ShowButton onSelect={toggleEmail} isSelected={showEmail}>
          {showEmail ? 'Hide Email' : 'Show Email'}
        </ShowButton>
        <div className="cards-container">
          {filteredCards.map((card, index) => (
            <div className="businessCard" key={index}>
              <BusinessCard
                name={card.name}
                education={card.education}
                jobTitle={card.jobTitle}
                company={card.company}
                email={showEmail ? card.email : 'Email Hidden'}
                phone={card.phone}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
export default App
