import React, {useState} from 'react';
import DashboardHeader from "./DashboardHeader";
import { useLocation } from "react-router-dom";
import {
  Card,
  Button,
  Typography,
  CardBody
} from "@material-tailwind/react";
import Details from "./Details";

const Dashboard = () => {
  const [showCard, setShowCard] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const location = useLocation();
  const userData = location.state?.userData;
  console.log(userData);
  const TIME_SLOT = [{1: "8:00am - 10.00am", 2: "10.00am - 12.00pm", 3: "12.00pm - 2.00pm", 4: "2.00pm - 4.00pm"}];

  const client = userData.client;

const getTimeSlotString = (id) => {
    const slot = TIME_SLOT[0][id];
    return slot ? slot : "N/A"; // Return "N/A" if the ID is not found in the TIME_SLOT array
  }; 

const TABLE_HEAD = ["Date", "Time", "Name", "Phone", "Email", "Details"];

const sortedAppointments = userData.appointments.slice().sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateA - dateB;
});
 
const TABLE_ROWS = sortedAppointments;
  return (
    <div>
        <DashboardHeader />
        <div className="bg-gray-50 rounded-lg p-4">
            <h2 style={{ fontSize: '40px' }} className="text-center" >Welcome {client.firstname} {client.lastname}!</h2>
            <p style={{ fontSize: '17px' }} className="text-base text-gray-700 leading-relaxed font-ui-sans-serif text-center pt-5" >
            <span className="italic">Here are your Appointments</span></p>
            
            <Card className="h-full w-full">
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 }
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((item, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
              return (
                <tr key={item.customer.id}>
                  <td className={classes}>
                      
                        <Typography variant="small" color="blue-gray" className="font-normal">
                         {item.date}
                        </Typography>
                  
                  </td>
                  <td className={classes}>
                    
                      <Typography variant="small" color="blue-gray" className="font-normal">
                      {getTimeSlotString(item.timeslotid)}
                      </Typography>
                   
                  </td>
                  
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                    {item.customer.firstname} {item.customer.lastname}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                    {item.customer.phone}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                    {item.customer.email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                    <Button variant="outlined" color="blue-gray" size="sm" onClick={() => {
                      setSelectedAppointment(item); 
                      setShowCard(true); 
                      }}>
                        Details
                      </Button>
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" color="blue-gray" size="sm">
            Previous
          </Button>
          <Button variant="outlined" color="blue-gray" size="sm">
            Next
          </Button>
        </div>
      </CardFooter> */}
    </Card>

    </div>

    {showCard && (
  <Details
    Details={selectedAppointment}
    onClose={() => setShowCard(false)}
  />
)}
    </div>
  );
};

export default Dashboard;