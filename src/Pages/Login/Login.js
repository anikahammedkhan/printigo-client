import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import login from "../../Assets/Lottie/login.json";
import { AuthContext } from '../../Context/UserContext';

const Login = () => {
    const { signIn, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then((result) => {
                console.log(result);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleFacebookLogin = () => {
        signInWithFacebook()
            .then((result) => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
            });
    };


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 my-12 justify-items-center place-items-center px-3'>
            <div>
                <div className="w-full max-w-md p-4 rounded-md shadow-2xl sm:p-8">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                    <p className="text-sm text-center dark:text-gray-400">Don't have account?
                        <Link to="/register" className="focus:underline hover:underline text-cyan-500"> Register here</Link>
                    </p>
                    <div className="my-6 space-y-4">
                        <button onClick={handleGoogleLogin} type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-sky-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>
                            <p>Login with Google</p>
                        </button>
                        <button onClick={handleFacebookLogin} className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-sky-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4" /><stop offset="1" stopColor="#007ad9" /></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z" /><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z" /></svg>
                            <p>Login with Facebook</p>
                        </button>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <div className="w-full text-gray-700">
                            <p className="px-3 text-center text-gray-400">OR</p>
                            <div className="w-full text-gray-400">
                            </div>
                            <form onSubmit={handleEmailLogin} className="space-y-8">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm">Email address</label>
                                        <input type="email" name="email" id="email" placeholder="Your Email " className="w-full px-3 py-2 border rounded-md border-gray-700 focus:border-sky-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label htmlFor="password" className="text-sm">Password</label>
                                        </div>
                                        <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 border rounded-md border-gray-700 focus:border-sky-600" />
                                    </div>
                                </div>
                                <p className='text-red-500'>{error}</p>
                                <button type="submit" className="w-full px-8 py-3 font-bold rounded-md bg-sky-500 text-white hover:bg-cyan-500">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 md:w-full'>
                <Lottie animationData={login} loop={true} />;
            </div>
        </div>
    );
};

export default Login;