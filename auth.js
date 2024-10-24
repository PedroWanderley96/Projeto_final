document.addEventListener("DOMContentLoaded", function () {
  const isLogin = localStorage.getItem("email") !== null;

  const dashboardLinkHeader = document.querySelector("#dashboard-link");
  const planilhaLinkHeader = document.querySelector("#planilha-link");
  const loginLogoutLink = document.querySelector("#login-logout-link");

  const dashboardLinkFooter = document.querySelector("#dashboard-link-footer");
  const planilhaLinkFooter = document.querySelector("#planilha-link-footer");

  function logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    if (window.location.pathname.includes("index.html")) {
      window.location.href = "./index.html";
    } else {
      window.location.href = "../index.html";
    }
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

    if (window.location.pathname.includes("/contato/contato.html")) {
      loginLogoutLink.href = "../login/login.html";
    } else {
      loginLogoutLink.href = "login/login.html";
    }
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

  const startNowLink = document.querySelector("#start-now-link");
  if (startNowLink) {
    if (isLogin) {
      startNowLink.style.display = "none";
    } else {
      startNowLink.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "login/login.html";
      });
    }
  }
});
