import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    const info = [
        {
            _id: 1,
            img: clock,
            title: "Opening Hours",
            text: "Click the button to listen on Spotiwhy app.",
            bgclassName: "bg-gradient-to-r from-secondary to-primary"
        },
        {
            _id: 2,
            img: marker,
            title: "Visit our location",
            text: "Brooklyn, NY 10036, United States",
            bgclassName: "bg-accent"
        },
        {
            _id: 3,
            img: phone,
            title: "Contact us now",
            text: "+000 123 456789",
            bgclassName: "bg-gradient-to-r from-secondary to-primary"
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto max-w-screen-xl">
            {
                info.map(item => <InfoCard
                    key={item._id}
                    item={item}
                ></InfoCard>)
            }
        </div>
    );
};

export default Info;