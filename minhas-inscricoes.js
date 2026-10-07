let listaInscricoes = document.getElementById("listaInscricoes");
let quantidade = document.getElementById("quantidade");
let valorTotal = document.getElementById("valorTotal");
let modal = document.getElementById("modal");
let cancelar = document.getElementById("cancelar");
let confirmar = document.getElementById("confirmar");
let indiceRemover = 0;

function mostrarInscricoes() {
    listaInscricoes.innerHTML = "";
    let inscricoes =
        JSON.parse(localStorage.getItem("inscricoes")) || [];
    quantidade.textContent = inscricoes.length;

    let total = 0;

    if (inscricoes.length == 0) {
        listaInscricoes.innerHTML =
            "<p class='aviso'>Você ainda não se inscreveu em nenhuma oficina.</p>";
        valorTotal.textContent = "0.00";
        return;
    }

    inscricoes.forEach(function(oficina, indice) {
        let card = document.createElement("div");
        card.classList.add("inscricao-card");
        card.innerHTML = `
            <img src="${oficina.imagem}" alt="${oficina.nome}">
            <div class="inscricao-info">
                <h3>${oficina.nome}</h3>
                <p>
                    <strong>Horário:</strong>
                    ${oficina.horario}
                </p>
                <p>
                    <strong>Vagas:</strong>
                    ${oficina.vagas}
                </p>
                <p>
                    <strong>Valor:</strong>
                    R$ ${oficina.preco.toFixed(2)}
                </p>
                <button class="btn-remover"
                    onclick="abrirModal(${indice})">
                    Remover
                </button>
            </div>
        `;
        listaInscricoes.appendChild(card);
        total = total + oficina.preco;
    });
    valorTotal.textContent = total.toFixed(2);
}

function abrirModal(indice) {
    indiceRemover = indice;
    modal.classList.add("aberto");
}

cancelar.addEventListener("click", function() {
    modal.classList.remove("aberto");
});

confirmar.addEventListener("click", function() {
    let inscricoes =
        JSON.parse(localStorage.getItem("inscricoes")) || [];
    inscricoes.splice(indiceRemover, 1);

    localStorage.setItem(
        "inscricoes",
        JSON.stringify(inscricoes)
    );
    modal.classList.remove("aberto");
    mostrarInscricoes();
});

let menuBotao = document.getElementById("menuBotao");
let menu = document.getElementById("menu");

menuBotao.addEventListener("click", function() {
    if (menu.style.display == "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
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

mostrarInscricoes();