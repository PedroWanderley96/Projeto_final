document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("story").value;

    localStorage.setItem("contato", JSON.stringify({ nome, email, mensagem }));

    const modal = new bootstrap.Modal(document.getElementById("successModal"));
    modal.show();

    form.reset();
  });
});
