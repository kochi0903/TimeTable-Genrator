import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'; 

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors]= useState({}); 
    const [loading,setLoading] = useState(false);

    const navigate = useNavigate();

    const BASE_URL = 'http://localhost:3000/api';

   
    const [showForm, setShowForm] = useState(false);

    // Define the inline styles for the background image as a JavaScript object
    const backgroundStyle = {
        backgroundImage: 'url("src/assets/login.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    // Trigger the fade-in animation after the component mounts
    useEffect(() => {
        // A small delay makes the animation more noticeable after page load
        const timer = setTimeout(() => {
            setShowForm(true);
        }, 100); // 100ms delay

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const newErrors= {};
        setLoading(true);

        if(!email.trim()){
            newErrors.email='Email is required';
        }else if(!/\S+@\S+\.\S+/.test(email)){
            newErrors.email= 'Email address is invalid';
        }

        if(!password) {
            newErrors.password='Password is required';
        }else if(password.length < 6){
            newErrors.password = 'Password must be at least 6 characters.';
        }

        setErrors(newErrors);

        if(Object.keys(newErrors).length===0){
            try {
                const response = await axios.post(`${BASE_URL}/users/login`,{
                    email,
                    password
                },{
                    withCredentials: true
                });

                console.log("Login Succesful: ",response.data);
                toast.success(response.data.message || "Login Successful!"); 

                setEmail('');
                setPassword('');
                setErrors({});

                setTimeout(()=>{
                    navigate('/'); //mainpage route when ready
                },500);

            } catch (error) {
                console.error("Login Error: ",error);
                let errorMessage = "An unexpected error occured during login.";
                if(error.response && error.response.data && error.response.data.message){
                    errorMessage = `Error : ${error.response.data.message}`;
                }
                toast.error(errorMessage); 
            } finally{
                setLoading(false);
            }
        }else{
            setLoading(false);
            toast.error("Please correct the form errors.");
        }
    };


    return (
        <>
            {/* Custom CSS for fade-in animation */}
            <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                `}
            </style>

            {/* Main container for the login page layout */}
            <div className="loginContainer min-h-screen flex justify-center items-center p-4" style={backgroundStyle}>
                {/* Left side - hidden on mobile, takes up space on large screens */}
                <div className="hidden lg:flex lg:w-1/2 lg:h-[35rem] justify-center items-center">
                    {/* You can add content here if needed, or leave it for spacing */}
                </div>

                {/* Right side - Login form container */}
                <div className={`w-full max-w-md lg:w-[30rem] bg-white bg-opacity-30 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-2xl border border-white border-opacity-40 transition-opacity transform ${showForm ? 'animate-fadeIn' : 'opacity-0'}`}>
                    {/* Changed title to match reference image and increased font size/weight */}
                    <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-8 text-center drop-shadow-lg">Login To Continue</h2>


                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-900 text-sm font-medium mb-2 drop-shadow-sm">Email</label>
                            <input type="email"
                             id="email"
                             name="email"
                             placeholder="user@example.com"
                             className="w-full px-4 py-3 rounded-lg bg-gray-100 bg-opacity-70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 placeholder-gray-600 transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.005]"
                             value={email}
                             onChange={(e)=>setEmail(e.target.value)}
                             required />
                             {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-900 text-sm font-medium mb-2 drop-shadow-sm">Password</label>
                            <input type="password" id="password" name="password" placeholder="********"
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 bg-opacity-70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 placeholder-gray-600 transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.005]"
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                                required />
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>

                        {/* Styled button to match the yellow/gold theme of the reference image */}
                        <button type="submit"
                            className="w-full bg-yellow-400 hover:bg-yellow-500 active:scale-95 text-gray-900 font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={loading}>
                                {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <a href="#" className="text-gray-900 hover:underline text-sm font-medium transition duration-300 ease-in-out drop-shadow-sm hover:text-yellow-600">Forgot Password?</a>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-gray-900 text-sm drop-shadow-sm">Don't have an account?
                            <a href="#" className="text-yellow-400 hover:underline font-medium transition duration-300 ease-in-out hover:text-yellow-500" onClick={() => handleNavigate('/register')}> Sign Up</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm;
