import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='mx-auto max-w-screen-xl'>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content mt-4">
                    <h1 className='font-bold text-3xl text-secondary text-center bg-slate-100 p-5 rounded-t-xl'>Welcome to Your Dashboard</h1>
                    <Outlet/>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='mb-2'><Link to='/dashboard'>My Appointments</Link></li>
                        <li className='mb-2'><Link to='/dashboard/review'>My Reviews</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;