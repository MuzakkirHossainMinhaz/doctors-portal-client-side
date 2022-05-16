import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg mx-2  bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-secondary">{name}</h2>
                {
                    slots.length ?
                        <p>{slots[0]}</p>
                        :
                        <p className='text-red-600'>No available. Change date</p>
                }
                <p className='uppercase text-xs'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions">
                    <button disabled={slots.length === 0} class="btn btn-secondary text-white text-sm">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;