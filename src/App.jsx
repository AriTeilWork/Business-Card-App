import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BusinessCard from './components/BusinessCard.jsx';


function App() {
  return (
    <section>
      <BusinessCard
        name="Jane Doe"
        education="B.S. Computer Science"
        jobTitle="Software Engineer"
        company="Google"
        email="jane.doe@example.com"
      />
      <BusinessCard
        name="John Doe"
        education="M.S. Computer Science"
        jobTitle="Developer"
        company="Shark"
        email="john.doe@example.com"
      />
      <BusinessCard
        name="Yevhenii Nazarov"
        education="Computer Science"
        jobTitle="Software Engineer"
        company="Self-employed"
        email="e2205685@edu.vamk.fi"
      />

    </section>
  );
}
export default App
