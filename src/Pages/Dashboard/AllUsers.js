import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }

    const makeAdmin = (user, refetch) => {
        fetch(`http://localhost:5000/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make ADMIN');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully ${user.email} added as admin`);
                }
            })
    }

    return (
        <div className='bg-slate-50 rounded-b-xl p-5'>
            <div className='pb-4 flex justify-between items-center'>
                <h1 className='text-2xl'>All Users : {users.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr
                                key={idx}
                            >
                                <th>{idx + 1}</th>
                                <td>{user.email}</td>
                                <td> {user.role !== 'admin' ? <button onClick={() => makeAdmin(user, refetch)} className='btn btn-xs'>Make Admin</button> : <button className='btn btn-xs bg-green-500 border-0 text-white'>Admin</button>}</td>
                                <td><button className='btn btn-xs'>Delete User</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;