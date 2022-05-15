import React from 'react';

const InfoCard = ({item}) => {
    const {img, title, text, bgclassName} = item;

    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl text-white  mx-2 ${bgclassName}`}>
            <figure>
                <img className="pl-5 pt-5 lg:pt-0" src={img} alt="Album"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default InfoCard;