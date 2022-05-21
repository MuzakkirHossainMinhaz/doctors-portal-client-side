import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className='mx-auto max-w-screen-xl'>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-4">
                    <h1 className='font-bold text-3xl text-secondary text-center bg-slate-100 p-5 rounded-t-xl'>Welcome to Your Dashboard</h1>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='mb-2'><Link to='/dashboard'>My Appointments</Link></li>
                        <li className='mb-2'><Link to='/dashboard/review'>My Reviews</Link></li>
                        {admin && <li className='mb-2'><Link to='/dashboard/users'>All Users</Link></li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;