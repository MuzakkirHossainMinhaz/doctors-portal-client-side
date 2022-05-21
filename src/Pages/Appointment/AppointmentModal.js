import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AppointmentModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            slot,
            date: formattedDate,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
        };

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Appointment is set, on ${formattedDate} at ${slot}`);
                }
                else {
                    toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`);
                }
                refetch();
                // to close the modal
                setTreatment(null);
            })

    }

    return (
        <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label html htmlFor="appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-semibold text-xl">{name}</h3>

                    <form onSubmit={handleBooking} action="" className='mt-8 grid grid-cols-1 gap-5 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} placeholder="Type here" className="input input-bordered w-full text-base" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, idx) => <option
                                    key={idx}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user.displayName || ''} className="input input-bordered w-full text-base" />
                        <input type="email" name='email' disabled value={user.email} className="input input-bordered w-full text-base" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full text-base" />
                        <input type="submit" value='Submit' className="btn font-normal w-full text-base uppercase bg-accent text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;