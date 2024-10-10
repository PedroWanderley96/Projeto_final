let isLogin = localStorage.getItem("email") !== null;

// Função executada ao carregar a página
window.onload = function() {
    isLogin = localStorage.getItem("email") !== null;
    const loginRule = document.getElementsByClassName("element-login");
    const logoutContainer = document.querySelector(".logout-container");
    const loginLink = document.querySelector(".logout-container .nav-link");
    const form = document.querySelector('form');
    form.addEventListener('submit', login);
    
    // Exibir ou ocultar as páginas bloqueadas
    for (const rule of loginRule) {
        rule.style.display = isLogin ? "block" : "none";
    }

    // Se o usuário está logado, mudar para "Logout"
    if (isLogin) {
        loginLink.textContent = "Logout";
        logoutContainer.style.display = "flex";
        loginLink.addEventListener("click", logout);  // Adicionar evento de logout
    } else {
        logoutContainer.style.display = "none";
    }
}

// Função de login
function login(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Autenticação simples de exemplo
    if (email === "teste@teste.com" && password === "teste") {
        localStorage.setItem("email", "teste@teste.com");
        localStorage.setItem("password", "teste");
        window.location.href = "/";  // Redirecionar após login
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}

// Função de logout
function logout(e) {
    e.preventDefault();
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "login.html";  // Redirecionar para a página de login
}
