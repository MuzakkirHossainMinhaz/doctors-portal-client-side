import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import PrimaryButton from '../../Shared/Button/PrimaryButton';

const Banner = () => {
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} className="hero min-h-screen bg-base-100 justify-center mx-auto max-w-screen-xl">
            <div className="hero-content flex-col lg:flex-row-reverse gap-x-6">
                <img src={chair} className="lg:max-w-xl rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold leading-relaxed">Your New Smile Starts Here</h1>
                    <p className="py-6 leading-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;