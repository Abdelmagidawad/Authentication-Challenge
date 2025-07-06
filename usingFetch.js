// Login user using Fetch API

import { Alert } from "./main.js";

export async function loginWithFetch(email, password) {
  try {
    let response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "x-api-key": "reqres-free-v1", //this header with to reqres API website
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      let responseError = await response.json();
      throw responseError.error;
    }

    let data = await response.json();

    localStorage.setItem("token", data.token);
    window.location.assign("./profile.html");
    console.log("login successfully");
  } catch (error) {
    Alert(error);
  }
}
