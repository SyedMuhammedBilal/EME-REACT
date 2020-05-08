import React, { Fragment, Component } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css"

import NavbarPage from '../components/navbar.component'
import Header from '../components/header.component'
import HoriCard from '../components/HoriCard.component'
import Section from '../components/Section.component'
import SecSection from '../components/SecSection.component'
import Info from '../components/Info.component'
import Footer from '../components/Footer.component'

class Home extends Component {

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
                <div>
                    <Info />
                </div>
                <Footer />
            </Fragment>
        )
    }
}

export default Home