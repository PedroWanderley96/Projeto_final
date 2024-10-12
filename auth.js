document.addEventListener("DOMContentLoaded", function () {
  const dashboardLinkHeader = document.querySelector("#dashboard-link");
  const planilhaLinkHeader = document.querySelector("#planilha-link");
  const loginLogoutLink = document.querySelector("#login-logout-link");

  const dashboardLinkFooter = document.querySelector("#dashboard-link-footer");
  const planilhaLinkFooter = document.querySelector("#planilha-link-footer");

  const isLogin = localStorage.getItem("email") !== null;

  function logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "../index.html";
  }

  if (isLogin) {
    dashboardLinkHeader.style.display = "block";
    planilhaLinkHeader.style.display = "block";
    loginLogoutLink.textContent = "Logout";
    loginLogoutLink.addEventListener("click", function (e) {
      e.preventDefault();
      logout();
    });
  } else {
    dashboardLinkHeader.style.display = "none";
    planilhaLinkHeader.style.display = "none";
    loginLogoutLink.textContent = "Login";
    loginLogoutLink.href = "../login/login.html";
  }

  if (dashboardLinkFooter && planilhaLinkFooter) {
    if (isLogin) {
      dashboardLinkFooter.style.display = "block";
      planilhaLinkFooter.style.display = "block";
    } else {
      dashboardLinkFooter.style.display = "none";
      planilhaLinkFooter.style.display = "none";
    }
  }

  window.logout = logout;
});
