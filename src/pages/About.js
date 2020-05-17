import React, { Component, Fragment } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css"
import NavbarPage from '../components/navbar.component'
import AboutHeader from '../components/AboutHeader.component'
import AboutInfo from '../components/AboutInfo.component'
import Footer from '../components/Footer.component'

class About extends Component {

    componentDidMount(){
        AOS.init({
            duration : 3000
        })
    }

    render() {
        return (
            <Fragment>
                <NavbarPage />
                <div data-aos="fade-up">
                    <AboutHeader />
                </div>
                <div data-aos='fade-left'>
                    <AboutInfo />
                </div>
                <div data-aos='fade-up'>
                    <Footer />
                </div>
            </Fragment>
        )
    }
}

export default About
