let isLogin = localStorage.getItem("email") !== null;

window.onload = function () {
  isLogin = localStorage.getItem("email") !== null;
  const loginRule = document.getElementsByClassName("element-login");
  const logoutContainer = document.querySelector(".logout-container");
  const loginLink = document.querySelector(".logout-container .nav-link");
  const form = document.querySelector("form");
  form.addEventListener("submit", login);

  for (const rule of loginRule) {
    rule.style.display = isLogin ? "block" : "none";
  }

  if (isLogin) {
    loginLink.textContent = "Logout";
    logoutContainer.style.display = "flex";
    loginLink.addEventListener("click", logout);
  } else {
    logoutContainer.style.display = "none";
  }
};

function login(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "teste@teste.com" && password === "teste") {
    localStorage.setItem("email", "teste@teste.com");
    localStorage.setItem("password", "teste");
    window.location.href = "./../index.html";
  } else {
    alert("Credenciais inválidas. Tente novamente.");
  }
}

function logout(e) {
  e.preventDefault();
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "login.html";
}
