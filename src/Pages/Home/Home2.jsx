import React from "react";
import  HomeHeader  from "./HomeHeader";

export const Home = () => {
  return (
      <div> 
        <HomeHeader />
        <div className="bg-gray-50 rounded-lg p-4">
            <h2 style={{ fontSize: '40px' }} className="text-center">Welcome to Tinker!</h2>

            
            <p style={{ fontSize: '17px' }} className="text-base text-gray-700 leading-relaxed font-ui-sans-serif text-center pt-5">
            <span className="italic">Our mission is to provide homeowners with top-notch maintenance services to keep your home running smoothly and efficiently.</span></p></div>
        <div class="container my-24 mx-auto md:px-6">
 
  <section class="mb-32">
    <h2 class="mb-16 text-center text-2xl font-bold">Our Services</h2>

    <div class="mb-16 flex flex-wrap">
      <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
        <div
          class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg "
          data-te-ripple-init data-te-ripple-color="light">
          <img src={require('./images/electrician2.jpg')} class="w-full" alt="Electrician"/>
          
        </div>
      </div>

      <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
        <h3 class="mb-4 text-2xl font-bold">Electrician</h3>
       
        <p class="mb-6 text-neutral-500 ">
        Installing electrical wiring, circuits, and components in new construction or during renovations.
                    Identifying and resolving electrical problems, including but not limited to power interruptions,
                    defective wiring, malfunctioning electrical outlets or switches, and issues with circuit breakers and lighting systems.
        </p>
        
      </div>
    </div>

    <div class="mb-16 flex flex-wrap lg:flex-row-reverse">
      <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
        <div
          class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg "
          data-te-ripple-init data-te-ripple-color="light">
          <img src={require('./images/plumbing.jpg')} class="w-full" alt="Plumbing" />
          
        </div>
      </div>

      <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
        <h3 class="mb-4 text-2xl font-bold">Plumbing</h3>
        
        <p class="text-neutral-500 ">
        Installing and repairing pipes for water supply, drainage, and sewage systems.
        Identifying and repairing leaks in all plumbing components. Performing drain cleaning by utilizing different methods such as snaking, hydro-jetting,
        or chemical drain cleaners to unclog and clear obstructed drains and pipes.
        </p>
      </div>
    </div>

    <div class="mb-16 flex flex-wrap">
      <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
        <div
          class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg "
          data-te-ripple-init data-te-ripple-color="light">
          <img src={require('./images/heater.jpg')} class="w-full" alt="AC/Heat" />
          
        </div>
      </div>

      <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
        <h3 class="mb-4 text-2xl font-bold">AC/Heater maintenance</h3>
        
        <p class="text-neutral-500 ">
        Performing air filter cleaning or replacement to ensure adequate
                  air circulation and enhance the quality of indoor air. Cleaning and removing the dirt, dust, and debris and inspection of the heating system.
                  Clearing clogs or blockages in the condensate drain line to prevent water leakage or damage.
        </p>
      </div>
    </div>
    <div class="mb-16 flex flex-wrap lg:flex-row-reverse">
      <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
        <div
          class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg "
          data-te-ripple-init data-te-ripple-color="light">
          <img src={require('./images/lawn.jpg')} class="w-full" alt="Lawn Maintenance" />
          
        </div>
      </div>

      <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
        <h3 class="mb-4 text-2xl font-bold">Lawn maintenance</h3>
        
        <p class="text-neutral-500 ">
        Regularly cutting the grass to maintain an even height and neat appearance.
                Removing weeds from the lawn and applying herbicides or weed control treatments to prevent weed growth.
                Applying fertilizers to provide essential nutrients to the grass, promoting healthy growth and a lush gray appearance.
        </p>
      </div>
    </div>
  </section>
 
</div>
      </div>      
    );
  };
  