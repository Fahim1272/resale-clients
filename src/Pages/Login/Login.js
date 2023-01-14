import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center my-4'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-4">

                <h1 className="text-5xl text-center font-bold">Login now!</h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="login" />

                    </div>
                    <button  className="btn btn-primary">Google signIn</button>
                </form>
                <p className='p-4'>Used resale product ,please login <Link to='/signup' className='text-orange-500 font-bold'>Sign up</Link></p>

            </div>
        </div>
    );
};

export default Login;