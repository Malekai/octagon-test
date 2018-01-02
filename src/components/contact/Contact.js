import React from 'react';
import ContactForm from './ContactForm';
import Header from '../Header';
import Footer from '../Footer';

const Contact = () => {
    return (
        <div className="contact-wrapper">
            <Header/>
            <ContactForm url='http://localhost:3001/api/contact'/>
            <Footer/>
        </div>
    );
}

export default Contact;
