let btnLogout = document.querySelector(".logout");
let token = localStorage.getItem("token");

let tokenBox = document.getElementById("tokenBox");
tokenBox.textContent = `Your Token: ${token}`;

function logout() {
  localStorage.removeItem("token");
  window.location.assign("../index.html");
}

btnLogout.addEventListener("click", logout);
