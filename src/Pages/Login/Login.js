import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';


const Login = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }


    const { providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='flex justify-center my-4'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-4">

                <h1 className="text-5xl text-center font-bold">Login now!</h1>
                <form onSubmit={handleLogin} className="card-body">
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
                    <button onClick={handleGoogleSignIn} className="btn btn-primary">Google signIn</button>
                </form>
                <p className='p-4'>New to resale account?Please <Link to='/signup' className='text-orange-500 font-bold'>Sign up</Link></p>

            </div>
        </div>
    );
};

export default Login;