import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import apiBooking from "../../../Services/apiBooking";

export default function BookingFinal() {
  const customerData = useSelector((state) => state.customerData);
  const [content, setContent] = useState("Loading");
  const [sContent,setSContent] = useState("");
  const [button, setButton] = useState("");


  useEffect(() => {
    (async () => {
      console.log("async function executed");
      try {
        console.log("try inside async function executed");
        const Result = await apiBooking(customerData).catch((error) => {
          console.log(error); // Handle any errors
        });
  
        console.log(Result);

        if (Result && Result.responseCode === 200) {
          setContent("Congratulations");
          setSContent("Your Appointment has been confirmed");
          setButton("Home");
        } else {
          setContent("Please Try Again Later");
          setSContent("There is some error in booking the appointment"); 
          setButton("Try Again");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  
      return (
        <div className="container md:mt-10">
          <div className="flex flex-col items-center">
            <div className="wrapper">
              <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  className="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>
    
            <div className="mt-3 text-xl font-semibold uppercase text-blue-500">
              {content}
            </div>
            <div className="text-lg font-semibold text-gray-500">
              {sContent}
            </div>
            <a className="mt-10" href="/">
              <button className="h-10 px-5 text-blue-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-blue-500 hover:text-blue-100">
                {button}
              </button>
            </a>
          </div>
        </div>
      );
    }
    


