import React from 'react';

const InfoCard = ({item}) => {
    const {img, title, text, bgClass} = item;

    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl text-white  mx-2 ${bgClass}`}>
            <figure>
                <img class="pl-5 pt-5 lg:pt-0" src={img} alt="Album"/>
            </figure>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default InfoCard;