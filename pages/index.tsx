import React, { useEffect } from 'react'
 import Navbar from '../components/navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Creator from '@/components/Creator'
import PopularNFT from '@/components/PopularNFT'
import LiveBid from '@/components/LiveBid'
import TopCreator from '@/components/TopCreator'
import Footer from '@/components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const HomePage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once:true,
      anchorPlacement: 'top-bottom'
    });
  }, [])

  return (
    <div> 
    <Navbar/>
    <Hero/>
    <About/>
    <Creator/>
    <PopularNFT/>
    <LiveBid/>
    <TopCreator/>
    <Footer/>
    </div>

  )
}

export default HomePage