import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        // const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // const role = form.role.value;
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                // const user = result.user;
                handleUpdate(name)
                console.log(result);
                // saveUser(name, email, role)
                toast.success('create user account successfully')
                navigate(from, { replace: true })
                form.reset()

            })
            .catch(error => console.error(error))
    }

    const handleUpdate = (name) => {
        const profile = {
            displayName: name

        }
        updateUser(profile)
            .then(() => { })
            .catch(err => console.log(err))
    }

    // const saveUser = (name, email, role) => {
    //     const userInfo = { name, email, role }
    //     fetch('https://used-products-resale-market-server-delwarhosen.vercel.app/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(userInfo)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }

    return (
        <div className='flex justify-center'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl text-center font-bold">Sign Up!</h1>
                <form onSubmit={handleSignUp} className="card-body">
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

export default SignUp;