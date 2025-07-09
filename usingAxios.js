// Login user using Axios Library

import { Alert } from "./main.js";

export async function loginWithAxios(email, password) {
  try {
    let response = await axios.post(
      "https://reqres.in/api/login",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "x-api-key": "reqres-free-v1", //this header with to reqres API website
        },
      }
    );
    
    localStorage.setItem("token", response.data.token);
    window.location.assign("./profile user/profile.html");
    console.log("login successfully");
  } catch (error) {
    Alert(error.response.data.error);
  }
}
