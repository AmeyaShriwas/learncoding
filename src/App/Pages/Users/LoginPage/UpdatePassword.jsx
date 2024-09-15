import { useState } from "react";
import Example from "../../../Components/Navbar/Navbar";
import Logo from './../../../../assets/Logo.png'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function UpdatePassword() {
  const[loginDetail, setLoginDetail] = useState({})


  const handleInputChange = (e)=> {
    setLoginDetail({...loginDetail,[e.target.name]: e.target.value})
  }

  const handleLoginFormSubmit = (e)=> {
    e.preventDefault()
    console.log(loginDetail)
    Swal.fire({
      "text": 'Password Updated Successfully'
    })
    

  }

    return (
      <>
      <Example/>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src={Logo}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Update Password
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleLoginFormSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                 Updated Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
               
               
              </div>
  
              <div>
                <Link to='/login'><button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-teal-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Update
                </button></Link>
              </div>
            </form>
  
          
          </div>
        </div>
      </>
    )
  }
  