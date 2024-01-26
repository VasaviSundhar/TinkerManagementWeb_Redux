
import { useState, useEffect } from "react";
import BookingStepper from "./BookingStepper";
import BookingControl from "./BookingControl";
import { useSelector } from 'react-redux';
import ValidationOne from "./ValidationOne";
import Header from "../../shared/Header";

import CustomerDetails from "./steps/CustomerDetails";
import ServiceTime from "./steps/ServiceTime";
import TinkerList from "./steps/TinkerList";
import BookingFinal from "./steps/BookingFinal"
import apiTinkerList from "../../Services/apiTinkerList";

function Booking() {
  const [currentStep, setCurrentStep] = useState(0); 
  const [isList, setIsList] = useState(0);
  const [bookingError, setBookingError] = useState({});
  const [bookingDetails, setBookingDetails] = useState([]);
  const [tinkerList, setTinkerList] = useState([]);
  const customerData = useSelector((state) => state.customerData);
  
  const steps = [
    "Service & Time",
    "Tinker Selection",
    "Details",
    "Complete"
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <ServiceTime bookingError = {bookingError} />;
      case 2:
        return <TinkerList tinkerList = {tinkerList} bookingError = {bookingError}/>;
      case 3:
        return <CustomerDetails bookingError = {bookingError}/>;
      case 4:
        return <BookingFinal />;
      
      default:
    }
  };

  useEffect(() => {
    let newStep = currentStep;

    if(newStep === 1 || newStep === 0 || newStep === 2 || newStep === 3) {
      console.log(bookingError);
      console.log(customerData);

      if(newStep === 1){
        (async () => {
          try {
            const Result = await apiTinkerList(bookingDetails).catch((error) => {
              console.log(error); // Handle any errors
            });
            const List = Result.response;
            console.log(Result);
            console.log(List);

            setTinkerList(List);
          } catch (error) {
            console.log(error);
          }
        })();
      }
    console.log(bookingError)
    if(Object.keys(bookingError).length === 0)
    {
      newStep++;
    }
    }

    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }, [isList]);

  


  const handleClick = (direction) => {

   
    setBookingDetails(customerData);
  
    if(direction === "Next" || direction === "Confirm")
    {
      setBookingError(ValidationOne(customerData,currentStep));
      setIsList(isList + 1);
    }
    else {
      setBookingError([]);
      let newStep = currentStep;
      newStep--;
      // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }
 
  };

  

  return (
    <div className=" justify-center">
      <Header />
      <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
        {/* Stepper */}
        <div className="horizontal container mt-5 ">
          <BookingStepper steps={steps} currentStep={currentStep} />

          
          <div className="my-10 p-10 ">
          
              {displayStep(currentStep)}
            
          
          </div>
        </div>
  
        {/* navigation button */}
        {currentStep !== steps.length && (
          <BookingControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}

       
      </div>
      
    </div>
  );
}

export default Booking;

