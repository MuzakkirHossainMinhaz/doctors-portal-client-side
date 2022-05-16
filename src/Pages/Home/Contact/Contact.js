import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/Button/PrimaryButton';

const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='text-center py-16 mb-24'
        >
            <div className='mx-auto max-w-screen-xl'>
                <h3 className='text-xl font-bold text-secondary'>Contact Us</h3>
                <h1 className='text-4xl text-white'>Stay connected with us</h1>

                <form action="" className='flex flex-col w-[450px] mx-auto my-10'>
                    <input type="email" placeholder="Email Address" className="input w-full" />
                    <input type="text" placeholder="Subject" className="input w-full my-5" />
                    <textarea className="textarea h-[136px]" placeholder="Your message"></textarea>
                </form>

                <PrimaryButton type="submit">Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default Contact;