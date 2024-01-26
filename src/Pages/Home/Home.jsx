import React from "react";
import  HomeHeader  from "./HomeHeader";

export const Home = () => {
  return (
      <div> 
        <HomeHeader />
          <div className="bg-gray-50">
            <div className="text-3xl text-gray-900 font-bold">
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h2 style={{ fontSize: '40px' }} className="text-center">Welcome to Tinker!</h2>

              
              <p style={{ fontSize: '17px' }} className="text-base text-gray-700 leading-relaxed font-ui-sans-serif text-center pt-5">
              <span className="italic">Our mission is to provide homeowners with top-notch maintenance services to keep your home running smoothly and efficiently.</span></p></div>
            
            {/* Services */}

            <h3 className="text-3xl font-bold text-center pt-8 mb-4">Our Services</h3>

            {/* Electrician  */}
            
            <div className="grid grid-cols-2 gap-1 pt-10 " >
              
            <div className=" bg-gray-200 rounded-lg p-4">
                
            <h2 className="text-2xl font-bold mb-2">Electrician</h2>
                  <p style={{ fontSize: '19px' }} className="text-gray-700 leading-normal font-ui-sans-serif text-justify font-normal"><span className="italic">Installing electrical wiring, circuits, and components in new construction or during renovations.
                    Identifying and resolving electrical problems, including but not limited to power interruptions,
                    defective wiring, malfunctioning electrical outlets or switches, and issues with circuit breakers and lighting systems.</span>
                  </p>
            </div>
            <div>
              <img src={require('./images/electrician.jpg')} alt="Electrician" className="w-64 h-64 rounded-lg shadow-lg  "/>

            </div>
            </div>

            {/* plumbing */}

            <div className="grid grid-cols-2 gap-1 pt-10">
              <div>
                <img src={require('./images/plumbing.jpg')} alt="Plumbing" className="w-64  h-64 rounded-lg shadow-lg ml-auto"/>
              </div>
              
            <div className=" bg-gray-200 rounded-lg p-4" >
                <h2 className="text-2xl font-bold mb-2">Plumbing</h2>
                <p style={{ fontSize: '19px' }} className="text-gray-700 leading-normal font-ui-sans-serif text-justify font-normal"><span className="italic">Installing and repairing pipes for water supply, drainage, and sewage systems.
                  Identifying and repairing leaks in all plumbing components. Performing drain cleaning by utilizing different methods such as snaking, hydro-jetting,
                  or chemical drain cleaners to unclog and clear obstructed drains and pipes.</span>
                </p>
            </div>
        
            </div>

            {/* AC/HEATER */}
            
            <div className="grid grid-cols-2 gap-1 pt-10">
              
            <div className=" bg-gray-200 rounded-lg p-4" >
                <h2 className="text-2xl font-bold mb-2">AC/Heater maintenance</h2>
                <p style={{ fontSize: '19px' }} className="text-gray-700 leading-normal font-ui-sans-serif text-justify font-normal"><span className="italic">Performing air filter cleaning or replacement to ensure adequate
                  air circulation and enhance the quality of indoor air. Cleaning and removing the dirt, dust, and debris and inspection of the heating system.
                  Clearing clogs or blockages in the condensate drain line to prevent water leakage or damage. </span>
                </p>
            </div>
            <div>
              <img src={require('./images/heater.jpg')} alt="Heater" className="w-64  h-64 rounded-lg shadow-lg "/>
            </div>

            </div>

            {/* Lawn */}
            
            <div className="grid grid-cols-2 gap-1 pt-10">

            <div>
              
              <img src={require('./images/lawn.jpg')} alt="Lawn" className="w-64  h-64 rounded-lg shadow-lg ml-auto "/>
              
            </div>
              
            <div className=" bg-gray-200 rounded-lg p-4" >
                <h2 className="text-2xl font-bold mb-2">Lawn maintenance</h2>
                <p style={{ fontSize: '19px' }} className="text-gray-700 leading-relaxed font-ui-sans-serif text-justify font-normal"><span className="italic">Regularly cutting the grass to maintain an even height and neat appearance.
                Removing weeds from the lawn and applying herbicides or weed control treatments to prevent weed growth.
                Applying fertilizers to provide essential nutrients to the grass, promoting healthy growth and a lush gray appearance.</span>

                </p>
                
          
            </div>
              
            <div>
              <br/>
            </div>
              
            </div>
            
            </div>
        </div>
      </div>      
    );
  };
  