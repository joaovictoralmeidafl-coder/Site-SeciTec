// TEMA CLARO E ESCURO

let temaBotao = document.getElementById("temaBotao");

temaBotao.addEventListener("click", function() {

    if (document.body.classList.contains("escuro")) {

        document.body.classList.remove("escuro");

        localStorage.setItem("tema", "claro");

    } else {

        document.body.classList.add("escuro");

        localStorage.setItem("tema", "escuro");

    }

});


// VERIFICAR TEMA SALVO

let tema = localStorage.getItem("tema");

if (tema === "escuro") {

    document.body.classList.add("escuro");

}


// MENU HAMBÚRGUER

let menuBotao = document.getElementById("menuBotao");

let menu = document.getElementById("menu");

menuBotao.addEventListener("click", function() {

    if (menu.classList.contains("aberto")) {

        menu.classList.remove("aberto");

    } else {

        menu.classList.add("aberto");

    }

});


// INSCRIÇÕES

let inscricoes =
    JSON.parse(localStorage.getItem("inscricoes")) || [];


// ELEMENTOS DA PÁGINA

let lista = document.getElementById("listaInscricoes");

let quantidade = document.getElementById("quantidade");

let valorTotal = document.getElementById("valorTotal");

let modal = document.getElementById("modal");


// ÍNDICE DA OFICINA QUE SERÁ REMOVIDA

let indiceParaRemover = null;


// MOSTRAR INSCRIÇÕES

function mostrarInscricoes() {

    lista.innerHTML = "";

    if (inscricoes.length === 0) {

        lista.innerHTML =
            "<p class='aviso'>Você ainda não possui inscrições.</p>";

        atualizarResumo();

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

                <button class="btn-remover">
                    Remover
                </button>

            </div>
        `;


        let botaoRemover =
            card.querySelector(".btn-remover");


        botaoRemover.addEventListener("click", function() {

            abrirModal(indice);

        });


        lista.appendChild(card);

    });


    atualizarResumo();

}


// ATUALIZAR QUANTIDADE E VALOR

function atualizarResumo() {

    quantidade.textContent = inscricoes.length;


    let total = 0;


    inscricoes.forEach(function(oficina) {

        total = total + oficina.preco;

    });


    valorTotal.textContent = total.toFixed(2);


    localStorage.setItem(
        "inscricoes",
        JSON.stringify(inscricoes)
    );

}


// ABRIR MODAL

function abrirModal(indice) {

    indiceParaRemover = indice;

    modal.classList.add("aberto");

}


// CANCELAR

document.getElementById("cancelar")
.addEventListener("click", function() {

    modal.classList.remove("aberto");

    indiceParaRemover = null;

});


// CONFIRMAR REMOÇÃO

document.getElementById("confirmarRemocao")
.addEventListener("click", function() {

    if (indiceParaRemover !== null) {

        inscricoes.splice(indiceParaRemover, 1);


        localStorage.setItem(
            "inscricoes",
            JSON.stringify(inscricoes)
        );


        modal.classList.remove("aberto");

        indiceParaRemover = null;


        mostrarInscricoes();

    }

});


// MOSTRAR AS INSCRIÇÕES

mostrarInscricoes();