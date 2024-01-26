import { useState } from "react";
import Header from "../../shared/Header"
import logo from "../Home/images/logo.png"
import apiLogin from "../../Services/apiLogin";
import { useNavigate } from "react-router-dom";
//import {useDataContext}  from "./DataContext";
import {
  Ripple,
  initTE,
} from "tw-elements";

export default function Login() {
  const [loginCred, setLoginCred] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  //const {bookingData, setBookingData} = useDataContext();
  initTE({ Ripple });

const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCred({ ...loginCred, [name]: value });
    
};
    
const handleClick = async () => {
  //console.log("async function executed");
  try {
    //console.log("try inside async function executed");
    const Result = await apiLogin(loginCred).catch((error) => {
      console.log(error); // Handle any errors
    });

    console.log(Result);

    if (Result && Result.responseCode === 200) {
      const bookings = Result.response;
      console.log(bookings);
      navigate('/dashboard', { state: { userData: bookings } });
    } else {
      setError("Invalid username or password");
    }
  } catch (error) {
    console.log(error);
  }
};
  
  // useEffect(() => {
  //   console.log(loginCred);
  // }, [loginCred]);
      return (
        <div className=" justify-center">
          <Header />
            <section className="gradient-form h-full bg-neutral-200 ">
                    <div className="container h-full p-10">
                      <div
                        className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 ">
                        <div className="w-full">
                          <div
                            className="block rounded-lg bg-white shadow-lg ">
                            <div className="g-0 lg:flex lg:flex-wrap">
                              {/* <!-- Left column container--> */}
                              <div className="px-4 md:px-0 lg:w-6/12">
                                <div className="md:mx-6 md:p-12">
                                  {/* <!--Logo--> */}
                                  <div className="text-center">
                                    <img
                                      className="mx-auto w-48"
                                      src={logo}
                                      alt="logo" />
                                    <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                      We are The Tinker Management System Team
                                    </h4>
                                  </div>

                                  <form>
                                    <p className="mb-4">Please login to your account</p>

                                    {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
                                    {/* <!--Username input--> */}
                                    <div className="mb-4">
                                    <label
                                        htmlFor="username"
                                        >Username
                                      </label> <br />
                                      <input
                                        type="text"
                                        className=" w-full rounded py-2 px-4 border"
                                        id="username"
                                        onChange={handleChange}
                                        value={loginCred["username"] || ""}
                                        name="username"
                                        />
                                      
                                    </div>

                                    {/* <!--Password input--> */}
                                    <div className="mb-4" >
                                    <label
                                        htmlFor="password"
                                        >Password
                                      </label>
                                      <input
                                        type="password"
                                        className="w-full rounded py-2 px-4 border"
                                        id="password"
                                        onChange={handleChange}
                                        value={loginCred["password"] || ""}
                                        name="password"
                                        />
                                      
                                    </div>

                                    {/* <!--Submit button--> */}
                                    <div className="mb-12 pb-1 pt-1 text-center">
                                      <button
                                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                        type="button"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        style={{
                                          background: 'linear-gradient(to right, #03396c, #005b96, #008cbb, #00b4d8)'
                                        }} 
                                        onClick={handleClick}>
                                        Log in
                                      </button>

                                      {/* <!--Forgot password link-->
                                      <a href="#!">Forgot password?</a> */}
                                    </div>

                                    {/* <!--Register button--> */}
                                    <div className="flex items-center justify-between pb-6">
                                      <p className="mb-0 mr-2">Don't have an account?</p>
                                      <button
                                        type="button"
                                        className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 "
                                        data-te-ripple-init
                                        data-te-ripple-color="light">
                                        <a href="/clientRegistration">Register</a>
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>

                              {/* <!-- Right column container with background and description--> */}
                              <div
                                className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                style={{background: 'linear-gradient(to right, #00b4d8, #008cbb, #005b96, #03396c)'}}>
                                <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                  <h4 className="mb-6 text-xl font-semibold">
                                  Unlocking Convenience
                                  </h4>
                                  <p className="text-xl">
                                  Our Tinker Management System seamlessly connects you with skilled 
                                  professionals for all your household needs. From repairs to renovations, 
                                  experience efficiency at your fingertips. Embrace hassle-free home care today!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
        </div>
      );
    }
    


