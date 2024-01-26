const ValidationOne = (customerData,currentStep) => {

    let error = [];

    //regex for email
    const email_format =  /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_-]+)((\.([a-zA-Z0-9_-]+))+)$/;
    //regex for phone
    const phone_format = /^[0-9]{10}$/;
    //regex for postal code
    const postal_format = /^[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d$/;
    // //regex for user name
    // const username_format = /^[a-zA-Z][a-zA-Z0-9_]{3,19}$/;
    // //regex for password
    // const password_format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,20}$/;

    //custom function for checking format
    const check_format = (value, regex) => {
    return regex.test(value) ? true : false;
    };

    if(currentStep === 1)
    {
        if((!customerData.hasOwnProperty("category")) || customerData.category === "")
        {
            error.category = "Please select a service";
        }
        if((!customerData.hasOwnProperty("date")) || customerData.date === "")
        {
            error.date = "Please select a date";  
        }
        if((!customerData.hasOwnProperty("timeSlot")) || customerData.timeSlot === "")
        {
            error.timeSlot = "Please select a time slot";
        } 
       
    }
    if(currentStep === 2)
    {
        if((!customerData.hasOwnProperty("client")) || customerData.client === "")
        {
            error.client = "Please select a Tinker";
        }
    }

    if(currentStep === 3)
    {
        if((!customerData.hasOwnProperty("firstName")) || customerData.firstName === "")
        {
            error.firstName = "First Name is mandatory";
        }
        if((!customerData.hasOwnProperty("lastName")) || customerData.lastName === "")
        {
            error.lastName = "Last Name is mandatory";  
        }
        if((!customerData.hasOwnProperty("email")) || customerData.email === "")
        {
            error.email = "Email is mandatory";
        } 
        else if(!check_format(customerData.email, email_format)) 
        {
            error.email = "Enter Email Id in correct format";
        }
        if((!customerData.hasOwnProperty("phone")) || customerData.phone === "")
        {
            error.phone = "Phone Number is mandatory";  
        }
        else if(!check_format(customerData.phone, phone_format)) 
        {
            error.phone = "Enter Phone Number in correct format";
        }
        if((!customerData.hasOwnProperty("address")) || customerData.address === "")
        {
            error.address = "Address is mandatory";  
        }
        if((!customerData.hasOwnProperty("postalCode")) || customerData.postalCode === "")
        {
            error.postalCode = "Postal Code is mandatory";  
        }
        else if(!check_format(customerData.postalCode, postal_format)) 
        {
            error.postalCode = "Enter Postal Code in correct format - A1A 2A3";
        }
        if((!customerData.hasOwnProperty("description")) || customerData.description === "")
        {
            error.description = "Please provide details of your Issue/ Requirement";
        }
    }
    
    return(error)
}

export default ValidationOne;