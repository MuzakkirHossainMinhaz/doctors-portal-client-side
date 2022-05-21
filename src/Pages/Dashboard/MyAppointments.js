import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessItem');
                        navigate('/');
                    }
                    return res.json();
                })
                .then(data => setAppointments(data));
        }
    }, [user])

    const current = new Date();
    const todayDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    return (
        <div className='bg-slate-50 rounded-b-xl p-5'>
            <div className='pb-4 flex justify-between items-center'>
                <h1 className='text-2xl'>My Appointments</h1>
                <button className="btn btn-outline px-10">{todayDate}</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, idx) => <tr
                                key={idx}
                            >
                                <th>{idx + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.treatment}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;