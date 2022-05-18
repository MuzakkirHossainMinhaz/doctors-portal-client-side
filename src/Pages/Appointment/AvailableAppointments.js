import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import AppointmentModal from './AppointmentModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const { isLoading, data: services, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        <Loading></Loading>
    }
    /* useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [formattedDate]); */

    return (
        <section className='my-20 mx-auto max-w-screen-xl'>
            <p className='text-center text-secondary text-xl hover:underline'>Available Appointments on {format(date, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-14 mx-auto w-11/12 lg:w-full'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment &&
                <AppointmentModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></AppointmentModal>}
        </section>
    );
};

export default AvailableAppointments;