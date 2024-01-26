import { useState, useEffect } from "react";
import ClientStepper from "./ClientStepper";
import ClientControl from "./ClientControl";
import { useSelector } from 'react-redux';
import clientValidation from "./clientValidation";
import Header from "../../shared/Header";

import Account from "./steps/Account";
import Details from "./steps/Details";
import Final from "./steps/Final";

function AddClient() {
  const [currentStep, setCurrentStep] = useState(0); 
  const [clientError, setClientError] = useState({});
  const [isNext, setIsNext] = useState(0);
  const userData = useSelector((state) => state.userData);
  
  const steps = [
    "Personal Details",
    "Account Information",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Details clientError = {clientError}/>;
      case 2:
        return <Account clientError = {clientError}/>;
      case 3:
        return <Final />;
      default:
    }
  };

  useEffect(() => {
    let newStep = currentStep;
    console.log(clientError);

    if(newStep === 1 || newStep === 0 || newStep === 2) {
      console.log(clientError.length);

    if(Object.keys(clientError).length === 0)
    {
      newStep++;
    }
    }

    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }, [isNext]);


  const handleClick = (direction) => {

    console.log(userData);
    if(direction === "Next" || direction === "Confirm")
    {
      setClientError(clientValidation(userData,currentStep));
      setIsNext(isNext + 1);
    }
    else {
      setClientError([]);
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
          <ClientStepper steps={steps} currentStep={currentStep} />

          
          <div className="my-10 p-10 ">
          
              {displayStep(currentStep)}
            
          
          </div>
        </div>
  
        {/* navigation button */}
        {currentStep !== steps.length && (
          <ClientControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}

       
      </div>
      
    </div>
  );
}

export default AddClient;

