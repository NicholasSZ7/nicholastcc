document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const mensagemInput = document.getElementById("mensagem");

    // Função para limpar mensagens de erro
    function clearErrors() {
        document.querySelectorAll(".error-message").forEach(span => span.textContent = "");
    }

    // Função para exibir mensagem de erro
    function showError(input, message) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = message;
    }

    form.addEventListener("submit", function(event) {
        // Limpa mensagens de erro anteriores
        clearErrors();
        let valid = true;

        // Validação do campo nome
        if (nomeInput.value.trim().length < 3) {
            showError(nomeInput, "O nome deve ter pelo menos 3 caracteres.");
            valid = false;
        }

        // Validação do campo email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, "Por favor, insira um email válido.");
            valid = false;
        }

        // Validação do campo mensagem
        if (mensagemInput.value.trim().length < 10) {
            showError(mensagemInput, "A mensagem deve ter pelo menos 10 caracteres.");
            valid = false;
        }

        // Se houver algum erro, impede o envio do formulário
        if (!valid) {
            event.preventDefault();
        }
    });
});