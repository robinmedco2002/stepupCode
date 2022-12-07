import React from 'react';
import HeroSection from './HeroSection';
import WhyUs from './WhyUs';
import Abt from './Abt';
import Group from './Group';
import Serv from './Serv';
import Testomonial from './Testomonial';
import Portfolio from '../Portfolio';
import Faq from '../Faq';

const Home = () => {
  return (
    <>
<HeroSection />

<main id="main">
<WhyUs />
<Abt />
<Group />
<Serv />
<Testomonial />
<Portfolio />
<Faq />

</main>
    </>


  )
}

export default Home