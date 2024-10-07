// import axios from "axios";
// export const compile = async (data: any) => {
//   try {
//     const options = {
//       method: "POST",
//       url: "https://judge029.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*",
//       params: { base64_encoded: "true", fields: "*" },
//       headers: {
//         "content-type": "application/json",
//         "Content-Type": "application/json",
//         "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
//         "X-RapidAPI-Key": "5c47cd0144msh7d38df2c558f990p1132a5jsnb0b367924022",
//       },
//       data: data,
//     };
//     axios
//       .request(options)
//       .then(function (response) {
//         console.log(response);
        
//         console.log("res.data", response.data);
//         const token = response.data.token;
      
//         return token
//       })
     
//       .catch((error:any) => {
       
//         throw error
//       });
//   } catch (error) {
//     throw error;
//   }
// };


// export const showResult=async(token: any)=>{
//   // const options = {
//   //   method: "GET",
//   //   url: `https://judge029.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*/${token}`,
//   //   params: { base64_encoded: "true", fields: "*" },
//   //   headers: {
//   //     "X-RapidAPI-Host":"judge0-ce.p.rapidapi.com" ,
//   //     "X-RapidAPI-Key":"5c47cd0144msh7d38df2c558f990p1132a5jsnb0b367924022",
//   //   },
//   // };
//   // try {
//   // const res=   axios.request(options).then((response)=>{
//   //   return response.data
//   // })
//   //   return;
    
//   // } catch (error) {
//   //   throw error
    
//   // }
  
  
//   try {
//     const options = {
//       method: 'GET',
//       url: 'https://judge029.p.rapidapi.com/submissions/d503d995-ffda-446b-9eca-b320290a8365',
//       params: {
//         base64_encoded: 'true',
//         fields: '*'
//       },
//       headers: {
//         'x-rapidapi-key': '5c47cd0144msh7d38df2c558f990p1132a5jsnb0b367924022',
//         'x-rapidapi-host': 'judge029.p.rapidapi.com'
//       }
//     };
//    await  axios.request(options).then((response)=>{
//       console.log(response.data);
//       return response.data
      
//     })
   
//   } catch (error) {
//     console.error(error);
//   }
// }


import axios from "axios";
import { error } from "console";

// Compile code
export const compile = async (data: any) => {
  try {
    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        "X-RapidAPI-Key": "5c47cd0144msh7d38df2c558f990p1132a5jsnb0b367924022",
      },
      data: data,
    };
    
    const response = await axios.request(options);
    if(!response){
      console.log("too many requests");
      return;
      
    }
    
    const token = response.data.token;
    console.log("Token:", token);
    return token;  // Return the token to be used later
  } catch(error:any){
   
    if(error.status==429){
      console.log("too many request");
      

    }
    
  }
};

// Fetch result using the token
export const showResult = async (token: string) => {
  try {
    const options = {
      method: "GET",
      url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,  // Use token dynamically
      params: {
        base64_encoded: "true",
        fields: "*"
      },
      headers: {
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        "X-RapidAPI-Key": "5c47cd0144msh7d38df2c558f990p1132a5jsnb0b367924022",
      },
    };

    const response = await axios.request(options);
    console.log("Result:", response.data);
    return response.data;  // Return the result data
  } catch (error) {
    console.error("Error in showResult:", error);
    throw error;
  }
};
