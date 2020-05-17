import React, { Component, Fragment } from 'react'
import axios from 'axios';
import AOS from 'aos';

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
        this.handleSubmit = this.handleSubmit.bind(this)
       
    }
    
    handleSubmit(e){
        e.preventDefault();
        axios({
          method: "POST", 
          url:"http://localhost:5000/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
            alert("Message Sent Successfully!."); 
            this.resetForm()
          } else if(response.data.status === 'fail'){
            alert("Message failed to send.")
          }
        })
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

    componentDidMount(){
        AOS.init({
            duration : 3000
        })
    }

    render() {
        return (
            <Fragment>
                <NavbarPage/>
                    <div className={Styles.heading} data-aos="fade-up">
                        <h1 className={Styles.H}>Have any Questions?</h1>
                    </div>
                    <div data-aos="fade-left">
                    <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
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
                            <button className={Styles.btn}>
                                Submit
                                <i className={Styles.fas}></i>
                            </button>
                            <div className={Styles.social_icons}>
                                <div className="instagram">
                                <i className="fab fa-instagram"></i>
                                </div>
                                <div className="facebook">
                                <i className="fab fa-facebook-f"></i>
                                </div>
                                <div className="whatsapp">
                                <i className="fab fa-whatsapp"></i>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
                <Footer/>
            </Fragment>
        )
    }

    resetForm(){
        this.setState({
            name: '', 
            email: '', 
            message: ''
        })
    };

}

export default ContactForm
