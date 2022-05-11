import React from 'react';
import chair from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100 justify-center">
            <div class="hero-content flex-col lg:flex-row-reverse gap-x-6">
                <img src={chair} class="max-w-xl rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold leading-relaxed">Your New Smile Starts Here</h1>
                    <p class="py-6 leading-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-secondary w-32 font-bold text-white text-sm">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;