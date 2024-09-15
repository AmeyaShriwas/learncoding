import React, { useState } from 'react'
import Example from '../../../Components/Navbar/Navbar'
import Logo from './../../../../assets/Logo.png'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('')

    const handleChangeEmail = (e)=> {
       setEmail(e.target.value)
    }

    const sendOtp = ()=> {
        Swal.fire({
            "text": "OTP Successfully Sended"
        })
    }

    const handleOtpChange = (e)=> {
        setOtp(e.target.value)
    }

    const verifyOtp = ()=> {
        Swal.fire({
            "text": "OTP Successfully Verified"
        })
    }
    return (
        <>
            <Example />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src={Logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Verify Email
                    </h2>


                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Enter Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="email"
                                    autoComplete="name"
                                    required
                                    onChange={handleChangeEmail}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <button onClick={sendOtp}
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5"
                                >
                                    Send Otp
                                </button>

                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mt-6">
                                Enter OTP
                            </label>
                            <div className="mt-2">
                                <input
                                    id="number"
                                    name="number"
                                    type="number"
                                    autoComplete="number"
                                    required
                                    onChange={handleOtpChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <Link to='/updatePassword'><button
                                onClick={verifyOtp}
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mt-5 focus-visible:outline-indigo-600"
                                >
                                    Verify
                                </button></Link>
                            </div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mt-5">
                                OTP Not received
                            </label>
                            <button onClick={sendOtp}>Resend</button>
                        </div>

                        <div>


                        </div>


                   

                </div>
            </div>
        </>
    )
}

export default ForgotPassword
