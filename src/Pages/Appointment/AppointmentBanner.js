import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import bg from '../../assets/images/bg.png';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'contain'
        }} class="hero min-h-screen mx-auto max-w-screen-xl">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-xl rounded-lg shadow-2xl" alt='' />
                <div className='mr-32 bg-white shadow-xl rounded-xl'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;