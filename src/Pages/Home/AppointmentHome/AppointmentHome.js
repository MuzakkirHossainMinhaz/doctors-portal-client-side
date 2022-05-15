import React from 'react';
import doctor_small from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/Button/PrimaryButton';

const AppointmentHome = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
        className="mb-24 mt-56"
        >
            <div className='flex justify-center items-center'>
                <div className='flex-1 hidden lg:block'>
                    <img className='-mt-24' src={doctor_small} alt="" />
                </div>
                <div className='flex-1 text-white py-16 px-7'>
                    <h3 className='text-secondary text-xl font-bold '>Appointment</h3>
                    <h1 className='font-semibold text-4xl my-4'>Make an appointment Today</h1>
                    <p className='mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton text="Get Started"></PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default AppointmentHome;