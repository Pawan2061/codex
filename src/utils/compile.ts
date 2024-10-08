import axios from "axios";

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
    if (!response) {
      console.log("too many requests");
      return;
    }

    const token = response.data.token;
    console.log("Token:", token);
    return token; // Return the token to be used later
  } catch (error: any) {
    if (error.status == 429) {
      console.log("too many request");
    }
  }
};

// Fetch result using the token
export const showResult = async (token: string) => {
  try {
    const options = {
      method: "GET",
      url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`, // Use token dynamically
      params: {
        base64_encoded: "true",
        fields: "*",
      },
      headers: {
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        "X-RapidAPI-Key": "5c47cd0144msh7d38df2c558f990p1132a5jsnb0b367924022",
      },
    };

    const response = await axios.request(options);
    console.log("Result:", response.data);
    return response.data; // Return the result data
  } catch (error) {
    console.error("Error in showResult:", error);
    throw error;
  }
};
