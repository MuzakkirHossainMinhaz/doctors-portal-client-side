import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg mx-2 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                {
                    slots.length ?
                        <p>{slots[0]}</p>
                        :
                        <p className='text-red-600'>No available. Change date</p>
                }
                <p className='uppercase text-xs'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions">
                    <label
                        htmlFor="appointment-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="btn btn-sm rounded-md btn-secondary text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;