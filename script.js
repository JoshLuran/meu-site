// Mensagem de boas-vindas no console
console.log("Bem-vindo ao meu portfólio!");

// Validação do formulário de contato
function validarFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "" || email === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos antes de enviar.");
    return;
  }

  alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
  document.querySelector("form").reset();
}

// Ativa validação se houver formulário na página
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector("form");
  if (formulario) {
    formulario.addEventListener("submit", validarFormulario);
  }
});