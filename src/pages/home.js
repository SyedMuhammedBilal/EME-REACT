import React, { Fragment, useEffect } from 'react'
import { TweenMax, Power3 } from 'gsap';
import AOS from 'aos';
import "aos/dist/aos.css"

import NavbarPage from '../components/navbar.component'
import Header from '../components/header.component'
import HoriCard from '../components/HoriCard.component'
import Section from '../components/Section.component'

function Home() {

    useEffect(() => {
        AOS.init({ 
            duration: 2000 
        });
    }, []);

    return (
        <Fragment>
            <NavbarPage />
            <Header />
            <Section />
            <HoriCard data-aos="fade-up" />
        </Fragment>
    )
}

export default Home