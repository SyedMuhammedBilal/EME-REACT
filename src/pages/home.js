import React, { Fragment, useEffect, Component } from 'react'
import { TweenMax, Power3 } from 'gsap';
import AOS from 'aos';
import "aos/dist/aos.css"

import NavbarPage from '../components/navbar.component'
import Header from '../components/header.component'
import HoriCard from '../components/HoriCard.component'
import Section from '../components/Section.component'
import SecSection from '../components/SecSection.component'

class Home extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount(){
        AOS.init({
            duration : 3000
        })
    }

        render(){
        return (
            <Fragment>
                <NavbarPage />
                <Header />
                <div data-aos='fade-left'>
                    <Section />
                </div>
                <div data-aos='fade-up'>
                    <HoriCard  />
                </div>
                <div data-aos='fade-up'>
                    <SecSection />
                </div>
            </Fragment>
        )
    }
}

export default Home