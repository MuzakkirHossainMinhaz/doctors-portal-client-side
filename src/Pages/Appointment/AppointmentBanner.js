import React from 'react';
import chair from '../../assets/images/chair.png';

const AppointmentBanner = () => {
    return (
        <div class="hero min-h-screen mx-auto max-w-screen-xl">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-xl rounded-lg shadow-2xl" alt=''/>
                <div className=''>
                    
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;