let menuBotao = document.getElementById("menuBotao");
let menu = document.getElementById("menu");

menuBotao.addEventListener("click", function() {

    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }

});

let temaBotao = document.getElementById("temaBotao");

temaBotao.addEventListener("click", function() {

    if (document.body.className == "escuro") {
        document.body.className = "";
    } else {
        document.body.className = "escuro";
    }

});

let nome = document.getElementById("nome");
let validacaoNome = document.getElementById("validacaoNome");

nome.addEventListener("input", function() {

    if (nome.value.includes(" ")) {
        validacaoNome.textContent = "Nome válido";
    } else {
        validacaoNome.textContent = "Digite o nome completo";
    }

});

let email = document.getElementById("email");
let validacaoEmail = document.getElementById("validacaoEmail");

email.addEventListener("input", function() {

    if (email.value.includes("@")) {
        validacaoEmail.textContent = "E-mail válido";
    } else {
        validacaoEmail.textContent = "Digite um e-mail válido";
    }

});

let senha = document.getElementById("senha");
let mostrarSenha = document.getElementById("mostrarSenha");

mostrarSenha.addEventListener("click", function() {

    if (senha.type == "password") {
        senha.type = "text";
        mostrarSenha.textContent = "Esconder";
    } else {
        senha.type = "password";
        mostrarSenha.textContent = "Mostrar";
    }

});

let salvar = document.getElementById("salvar");
let mensagem = document.getElementById("mensagem");

let perfilNome = document.getElementById("perfilNome");
let perfilEmail = document.getElementById("perfilEmail");
let perfilIdade = document.getElementById("perfilIdade");
let perfilCidade = document.getElementById("perfilCidade");

salvar.addEventListener("click", function() {

    let perfil = document.getElementById("perfil");

    perfilNome.textContent = nome.value;
    perfilEmail.textContent = email.value;
    perfilIdade.textContent = idade.value;
    perfilCidade.textContent = cidade.value;

    perfil.style.display = "block";

    mensagem.textContent = "Dados atualizados com sucesso!";

});


let avatarPrincipal = document.getElementById("avatarPrincipal");
let avatares = document.getElementsByClassName("avatares")[0];

let imagens = avatares.getElementsByTagName("img");

for (let i = 0; i < imagens.length; i++) {

    imagens[i].addEventListener("click", function() {

        avatarPrincipal.src = imagens[i].src;

    });

}