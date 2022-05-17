import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user);
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="mb-2 font-semibold text-xl text-center">Login</h2>
                    <div>
                        <label className='text-start text-sm'>Email</label>
                        <input type="email" placeholder="" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className='text-start text-sm'>Password</label>
                        <input type="password" placeholder="" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <p className='text-[10px]'>Forgot Password ?</p>

                    <button class="btn btn-accent text-base font-normal">Login</button>

                    <p className='text-xs text-center mt-2'>New to Doctors Portal? <span className='text-secondary'>Create new account</span></p>

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