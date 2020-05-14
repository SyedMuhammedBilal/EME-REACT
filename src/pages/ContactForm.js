import React, { Component, Fragment } from 'react'
import axios from 'axios';

import Styles from '../components/Form.module.css'
import NavbarPage from '../components/navbar.component'
import Footer from '../components/Footer.component'

class ContactForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.onEmailChange = this.onEmailChange.bind(this)
        this.onMessageChange = this.onMessageChange.bind(this)
        this.resetForm = this.resetForm.bind(this)
    }
    
    onNameChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    onEmailChange(event) {
        this.setState({
            email: event.target.value
        })
    }

    onMessageChange(event) {
        this.setState({
            message: event.target.value
        })
    }


    render() {
        return (
            <Fragment>
                <NavbarPage/>
                    <form>
                        <div className={Styles.contact_us}>
                            <div className={Styles.title}>
                                <h1 className={Styles.h}>Contact us</h1>
                            </div>
                            <div className={Styles.form}>
                                <div className={Styles.form_items}>
                                <input
                                    type="text"
                                    name="name"
                                    className={Styles.input} 
                                    value={this.state.name} 
                                    placeholder="Username"
                                    onChange={this.onNameChange}
                                    />
                                <i className={Styles.fas}></i>
                                </div>
                                <div className={Styles.form_items}>
                                <input 
                                    type="text"
                                    name="email" 
                                    className={Styles.input} 
                                    value={this.state.email} 
                                    placeholder="Email"
                                    onChange={this.onEmailChange}
                                    />
                                <i className={Styles.fas}></i>
                                </div>
                                <div className={Styles.form_items}>
                                <textarea 
                                    className={[Styles.input, Styles.message].join(' ')} 
                                    cols="30" rows="10" 
                                    name="message"
                                    value={this.state.message} 
                                    placeholder="Message....."
                                    onChange={this.onMessageChange}
                                    />
                                </div>  
                            </div>
                            <div className={Styles.btn}>
                                Submit
                                <i className={Styles.fas}></i>
                            </div>
                            <div className={Styles.social_icons}>
                                <div className="facebook">
                                <i className="fab fa-facebook-f"></i>
                                </div>
                                <div className="twitter">
                                <i className="fab fa-twitter"></i>
                                </div>
                                <div className="google">
                                <i className="fab fa-google-plus-g"></i>
                                </div>
                            </div>
                        </div>
                    </form>
                <Footer/>
            </Fragment>
        )
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

}

export default ContactForm
