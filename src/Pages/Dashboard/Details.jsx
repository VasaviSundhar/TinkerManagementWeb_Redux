import React from "react";

const Details = ({ Details, onClose }) => {
    const { customer, date, description, timeslotid } = Details;
    console.log(Details);
    const TIME_SLOT = [{1: "8:00am - 10.00am", 2: "10.00am - 12.00pm", 3: "12.00pm - 2.00pm", 4: "2.00pm - 4.00pm"}];
    const getTimeSlotString = (id) => {
        const slot = TIME_SLOT[0][id];
        return slot ? slot : "N/A"; // Return "N/A" if the ID is not found in the TIME_SLOT array
      }; 
    return(
        <div className="absolute inset-0 flex items-center justify-center and bg-gray-800 bg-opacity-50 ">
            <div
                className="w-1/2 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                    {customer.firstname} {customer.lastname}
                    </h5>
                    <p className="mb-2 text-base text-neutral-600 ">
                    Date: {date}
                    </p>
                    <p className="mb-4 text-base text-neutral-600 ">
                    Time : {getTimeSlotString(timeslotid)}
                    </p>
                    <p className="mb-4 text-base text-neutral-600 ">
                    Email: {customer.email}
                    </p>
                    <p className="mb-4 text-base text-neutral-600 ">
                    Phone: {customer.phone}
                    </p>
                    <p className="mb-4 text-base text-neutral-600 ">
                    Address: {customer.address}
                    </p>
                    <p className="mb-4 text-base text-neutral-600 ">
                    Postal Code: {customer.postalcode}
                    </p>
                    <p className="mb-4 text-base text-neutral-600 ">
                    Issue/Requirement Description: {description}
                    </p>
                <button
                    type="button"
                    className="inline-block rounded bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Details;