import { loginWithFetch } from "./usingFetch.js";
import { loginWithAxios } from "./usingAxios.js";

let btnLoginWithFetch = document.querySelector(".buttons").firstElementChild;
let btnLoginWithAxios = document.querySelector(".buttons").lastElementChild;

let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");

btnLoginWithFetch.addEventListener("click", () => {
  loginWithFetch(inputEmail.value, inputPassword.value);
});

btnLoginWithAxios.addEventListener("click", () => {
  loginWithAxios(inputEmail.value, inputPassword.value);
});

//Alert Massage
export function Alert(text) {
  let messageElement = document.querySelector(".message");
  messageElement.textContent = text;
}
