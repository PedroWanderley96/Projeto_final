<script>
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      // Armazenar dados no local storage
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const mensagem = document.getElementById("story").value;

      localStorage.setItem("contato", JSON.stringify({ nome, email, mensagem }));

      // Exibir o modal de sucesso
      const modal = new bootstrap.Modal(document.getElementById("successModal"));
      modal.show();

      // Limpar o formulário após o envio
      form.reset();
    });
  });
</script>
