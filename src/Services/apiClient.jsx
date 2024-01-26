
async function apiClient(userData) {

 try {
  const response = await fetch(`http://localhost:8080/client`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000'
    },
    body: JSON.stringify({
      username: userData.username,
      password: userData.password,
      firstname: userData.firstName,
      lastname: userData.lastName,
      email: userData.email,
      phone: userData.phone,
      address: userData.address,
      categoryId: userData.category
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


export default apiClient;
  