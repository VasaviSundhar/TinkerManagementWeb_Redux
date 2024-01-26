
async function apiBooking(customerData) {

    try {
     const response = await fetch(`http://localhost:8080/appointment`, {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': 'http://localhost:3000'
       },
       body: JSON.stringify({
         categoryId: customerData.category,
         date: customerData.date,
         timeslotId: customerData.timeSlot,
         clientId: customerData.client,
         description: customerData.description,
         customer: {
            firstname: customerData.firstName,
            lastname: customerData.lastName,
            email: customerData.email,
            phone: customerData.phone,
            address: customerData.address,
            postalcode: customerData.postalCode
          }

       })
     });
   
     const data = await response.json();
     console.log(data);
     
     if(data !== undefined)
     {
       return data;
     }
   
   
   } catch (error) {
     console.log(error);
     throw error;
   }
   }
   
   
   export default apiBooking;
     