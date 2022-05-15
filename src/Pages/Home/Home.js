import React from 'react';
import AppointmentHome from './AppointmentHome/AppointmentHome';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-auto max-w-screen-xl'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <AppointmentHome></AppointmentHome>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;