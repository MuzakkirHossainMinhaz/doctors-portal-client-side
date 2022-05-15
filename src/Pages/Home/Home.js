import React from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentHome from './AppointmentHome/AppointmentHome';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <AppointmentHome></AppointmentHome>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;