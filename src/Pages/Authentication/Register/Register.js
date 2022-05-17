import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate('/appointment');
    }

    if (user || googleUser) {
        user ? console.log(user) : console.log(googleUser);
    }

    if (loading || googleLoading || updating) {
        return <Loading></Loading>;
    }

    let signInError;
    if (error || googleError || updateError) {
        signInError = <small className='text-red-600'>{error?.message || googleError?.message || updateError?.message}</small>
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="mb-2 font-semibold text-xl text-center">Register</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Full Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder=""
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required!"
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}
                                {errors.name?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder=""
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required!"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a valid email!"
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder=""
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required!"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "At least 6 characters or longer!"
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt  text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt  text-red-600">{errors.password.message}</span>}
                            </label>
                        </div>

                        <div className='text-center'>
                            {signInError}
                        </div>

                        <input className='btn btn-accent text-base font-normal w-full max-w-xs' type="submit" value='Register' />
                    </form>

                    <p className='text-xs text-center mt-2'>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>

                    <div class="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline btn-accent text-base font-normal">Continue with google</button>

                </div>
            </div>
        </div>
    );
};

export default Register;