import axios from "axios";
export const compile = async (data: any) => {
  try {
    const options = {
      method: "POST",
      url: "https://judge029.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*",
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        "X-RapidAPI-Key": "5c47cd0144msh7d38df2c558f990p1132a5jsnb0b367924022",
      },
      data: data,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    throw error;
  }
};
