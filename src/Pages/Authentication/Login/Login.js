import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    if (googleUser) {
        console.log(googleUser);
    }
    if (loading || googleLoading) {
        return <Loading></Loading>;
    }

    let signInError;
    if (error || googleError) {
        signInError = <small className='text-red-600'>{error?.message || googleError?.message}</small>
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="mb-2 font-semibold text-xl text-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

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

                        <input className='btn btn-accent text-base font-normal w-full max-w-xs' type="submit" value='Login' />
                    </form>

                    {/* <div>
                        <label className='text-start text-sm'>Email</label>
                        <input type="email" placeholder="" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className='text-start text-sm'>Password</label>
                        <input type="password" placeholder="" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <p className='text-[10px]'>Forgot Password ?</p>

                    <button class="btn btn-accent text-base font-normal">Login</button>

                    <p className='text-xs text-center mt-2'>New to Doctors Portal? <span className='text-secondary'>Create new account</span></p> */}

                    <div class="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline btn-accent text-base font-normal">Continue with google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;