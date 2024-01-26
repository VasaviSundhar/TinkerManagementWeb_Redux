const clientValidation = (userData,currentStep) => {

    let error = [];

    //regex for email
    const email_format =  /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_-]+)((\.([a-zA-Z0-9_-]+))+)$/;
    //regex for phone
    const phone_format = /^[0-9]{10}$/;
    //regex for user name
    const username_format = /^[a-zA-Z][a-zA-Z0-9_]{3,19}$/;
    //regex for password
    const password_format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,20}$/;

    //custom function for checking format
    const check_format = (value, regex) => {
    return regex.test(value) ? true : false;
    };

    if(currentStep === 1)
    {
        if((!userData.hasOwnProperty("firstName")) || userData.firstName === "")
        {
            error.firstName = "First Name is mandatory";
        }
        if((!userData.hasOwnProperty("lastName")) || userData.lastName === "")
        {
            error.lastName = "Last Name is mandatory";  
        }
        if((!userData.hasOwnProperty("email")) || userData.email === "")
        {
            error.email = "Email is mandatory";
        } 
        else if(!check_format(userData.email, email_format)) 
        {
            error.email = "Enter Email Id in correct format";
        }
        if((!userData.hasOwnProperty("phone")) || userData.phone === "")
        {
            error.phone = "Phone Number is mandatory";  
        }
        else if(!check_format(userData.phone, phone_format)) 
        {
            error.phone = "Enter Phone Number in correct format";
        }
        if((!userData.hasOwnProperty("category")) || userData.category === "")
        {
            error.category = "Please select a service category";
        }
    }

    if(currentStep === 2)
    {
        if((!userData.hasOwnProperty("username")) || userData.username === "")
        {
            error.username = "Username is mandatory";
        } 
        else if(!check_format(userData.username, username_format)) 
        {
            error.username = "Enter Username in correct format";
        }
        if((!userData.hasOwnProperty("password")) || userData.password === "")
        {
            error.password = "Password is mandatory";  
        }
        else if(!check_format(userData.password, password_format)) 
        {
            error.password = "Enter Password in correct format";
        }
    }
    return(error)
}

export default clientValidation;