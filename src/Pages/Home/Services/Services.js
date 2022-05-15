import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png';
import Service from './Service/Service';
import PrimaryButton from '../../Shared/Button/PrimaryButton';

const Services = () => {

    const services = [
        {
            _id: 1,
            img: fluoride,
            title: "Fluoride Treatment",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ullam quasi repudiandae dolorem!"
        },
        {
            _id: 2,
            img: cavity,
            title: "Cavity Filling",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ullam quasi repudiandae dolorem!"
        },
        {
            _id: 3,
            img: whitening,
            title: "Teeth Whitening",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ullam quasi repudiandae dolorem!"
        }
    ]

    return (
        <div className='my-28 mx-auto max-w-screen-xl'>
            <div className="text-center">
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h3 className='text-4xl text-accent'>Services We Provide</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div>
                <div className="hero max-w-5xl mx-auto mt-28">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={treatment} className="max-w-md rounded-lg shadow-2xl mr-20" />
                        <div>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6 w-10/12 lg:w-full">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <PrimaryButton text="Get Started"></PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;