import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    const info = [
        {
            img: clock,
            title: "Opening Hours",
            text: "Click the button to listen on Spotiwhy app.",
            bgClass: "bg-gradient-to-r from-secondary to-primary"
        },
        {
            img: marker,
            title: "Visit our location",
            text: "Brooklyn, NY 10036, United States",
            bgClass: "bg-accent"
        },
        {
            img: phone,
            title: "Contact us now",
            text: "+000 123 456789",
            bgClass: "bg-gradient-to-r from-secondary to-primary"
        },
    ]

    return (
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 mx-auto max-w-screen-xl">
            {
                info.map(item => <InfoCard
                    item={item}
                ></InfoCard>)
            }
        </div>
    );
};

export default Info;