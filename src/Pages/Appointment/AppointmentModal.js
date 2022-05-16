import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-semibold text-xl">{name}</h3>

                    <form onSubmit={handleBooking} action="" className='mt-8 grid grid-cols-1 gap-5 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} placeholder="Type here" className="input input-bordered w-full text-base" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Full Name" className="input input-bordered w-full text-base" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full text-base" />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full text-base" />
                        <input type="submit" value='Submit' className="btn font-normal w-full text-base uppercase bg-accent text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;