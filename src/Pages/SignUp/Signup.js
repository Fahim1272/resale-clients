import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='flex justify-center'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl text-center font-bold">Sign Up!</h1>
                <form  className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" />
                    </div>
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
                    </div>
                    <select name='role' className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select Your Role</option>
                        <option>Buyer</option>
                        <option>Seller</option>
                    </select>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Sign Up" />

                    </div>
                </form>
                <p className='p-4'>Already have an account <Link className='text-orange-500 font-bold' to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;