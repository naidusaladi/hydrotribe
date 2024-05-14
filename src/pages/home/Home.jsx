import React, { useState } from 'react'
import { CarouselDefault } from '../../components/carousel/Carousel'
import { NavbarWithMegaMenu } from '../../components/navbar/Navbar'
import Services from '../services/Services'
import { FooterWithSitemap } from '../../components/footer/Footer'
import About from '../about/About'
import ContactUs from '../../components/contact/ContactUs'
import { DefaultAccordion } from '../../components/questions/Question'
import Clients from '../../components/clients/Clients'

const Home = () => {


  return (
    <>
    <NavbarWithMegaMenu/>
    <CarouselDefault/>
    <About/>
    <Services/>
    <Clients/>
    <DefaultAccordion/>
    <ContactUs/>
    <FooterWithSitemap/>
    </>
  )
}

export default Home
