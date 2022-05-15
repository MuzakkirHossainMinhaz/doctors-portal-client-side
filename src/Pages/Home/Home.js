import React from 'react';
import AppointmentHome from './AppointmentHome/AppointmentHome';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mx-auto max-w-screen-xl'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <AppointmentHome></AppointmentHome>
        </div>
    );
};

export default Home;