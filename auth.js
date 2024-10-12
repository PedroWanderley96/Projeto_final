document.addEventListener("DOMContentLoaded", function () {
  const dashboardLink = document.querySelector("#dashboard-link");
  const planilhaLink = document.querySelector("#planilha-link");
  const loginLogoutLink = document.querySelector("#login-logout-link");

  const isLogin = localStorage.getItem("email") !== null;

  if (isLogin) {
    dashboardLink.style.display = "block";
    planilhaLink.style.display = "block";
    loginLogoutLink.textContent = "Logout";
    loginLogoutLink.addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      window.location.href = "index.html";
    });
  } else {
    dashboardLink.style.display = "none";
    planilhaLink.style.display = "none";
    loginLogoutLink.textContent = "Login";
    loginLogoutLink.href = "login/login.html";
  }
});
