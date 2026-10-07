let oficinas = [
    {
        nome: "Introdução à Robótica",
        preco: 30,
        horario: "08:00",
        vagas: 20,
        imagem: "https://forbes.com.br/wp-content/uploads/2021/09/ForbesTech_robotica_Yuichiro-Chino_Getty-Imgaes.png"
    },

    {
        nome: "Criação de Jogos com JavaScript",
        preco: 45,
        horario: "09:00",
        vagas: 15,
        imagem: "https://i.ytimg.com/vi/r9buAwVBDhA/maxresdefault.jpg"
    },

    {
        nome: "Primeiros Passos com Arduino",
        preco: 40,
        horario: "10:00",
        vagas: 18,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZ7fxhlZf4brkVDwiirW74cZWGZB9oi9pS69xYmCFDY0ql3Rox0_jSbAJ&s=10"
    },

    {
        nome: "Design de Interfaces no Figma",
        preco: 25,
        horario: "13:00",
        vagas: 25,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjR_sgbBO42hmSgKddYsUQGwXAVgp3agueIXuNJYXtsBgSjSySuqVTz8zS&s=10"
    },

    {
        nome: "Segurança na Internet",
        preco: 20,
        horario: "14:00",
        vagas: 30,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVpDVCkwLPdYqyjxD8XS6hZV3GmkIxto9n--ktwf9ksqxc-MhPsyqhHS_Y&s=10"
    },

    {
        nome: "Introdução à Inteligência Artificial",
        preco: 50,
        horario: "15:00",
        vagas: 20,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgihMO97OzTHfNe18BnA5GFgjzC-_9qAq4V3Bb09F-sbRGauw2SGtYmEA&s=10"
    },

    {
        nome: "Desenvolvimento de Aplicativos",
        preco: 55,
        horario: "16:00",
        vagas: 15,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtvAfLQicDS6NJUOZP8ojO1w5WSU6wpHCkgtP52rxI7Zubn6iAeyNuFFg&s=10"
    },

    {
        nome: "Criação de Sites Responsivos",
        preco: 35,
        horario: "17:00",
        vagas: 25,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLfiN3m2eJ-gWpBHaM-r0qzCssEbm_Nc5V8yw9zzeoZ0tF6vMW9JXLfk&s=10"
    }
];

let areaOficinas = document.getElementById("Oficinas");
let busca = document.getElementById("busca");
let ordenacao = document.getElementById("ordenacao");
let mensagem = document.getElementById("mensagem");

function mostrarOficinas(lista) {
    areaOficinas.innerHTML = "";
    if (lista.length === 0) {
        mensagem.textContent = "Nenhuma oficina encontrada.";
        return;
    }
    mensagem.textContent = "";
    lista.forEach(function(oficina) {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${oficina.imagem}" alt="${oficina.nome}">
            <h3>${oficina.nome}</h3>
            <p><strong>Horário:</strong> ${oficina.horario}</p>
            <p><strong>Vagas:</strong> ${oficina.vagas}</p>
            <p><strong>Valor:</strong> R$ ${oficina.preco.toFixed(2)}</p>
            <button onclick="inscrever('${oficina.nome}')">
                Inscrever-se
            </button>
        `;
        areaOficinas.appendChild(card);
    });
}

busca.addEventListener("input", function() {

    let texto = busca.value.toLowerCase();

    let resultado = oficinas.filter(function(oficina) {

        return oficina.nome.toLowerCase().includes(texto);
    });

    mostrarOficinas(resultado);
});

ordenacao.addEventListener("change", function() {
    let listaOrdenada = [...oficinas];

    if (ordenacao.value === "menor") {

        listaOrdenada.sort(function(a, b) {
            return a.preco - b.preco;
        });

    }

    if (ordenacao.value === "maior") {

        listaOrdenada.sort(function(a, b) {
            return b.preco - a.preco;
        });

    }

    let texto = busca.value.toLowerCase();

    listaOrdenada = listaOrdenada.filter(function(oficina) {
        return oficina.nome.toLowerCase().includes(texto);
    });

    mostrarOficinas(listaOrdenada);
});

function inscrever(nomeOficina) {

    let inscricoes = JSON.parse(localStorage.getItem("inscricoes")) || [];

    let oficina = oficinas.find(function(item) {
        return item.nome === nomeOficina;
    });

    if (oficina) {

        inscricoes.push(oficina);

        localStorage.setItem(
            "inscricoes",
            JSON.stringify(inscricoes)
        );

        alert("Oficina adicionada à sua inscrição!");

        atualizarQuantidade();
    }
}

function atualizarQuantidade() {

    let inscricoes =
        JSON.parse(localStorage.getItem("inscricoes")) || [];

    let quantidade = document.getElementById("quantidadeInscricoes");

    if (quantidade) {
        quantidade.textContent =
            `Minhas inscrições (${inscricoes.length})`;
    }
}

let imagensSlider = [
    "https://forbes.com.br/wp-content/uploads/2021/09/ForbesTech_robotica_Yuichiro-Chino_Getty-Imgaes.png",
    "https://i.ytimg.com/vi/r9buAwVBDhA/maxresdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZ7fxhlZf4brkVDwiirW74cZWGZB9oi9pS69xYmCFDY0ql3Rox0_jSbAJ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjR_sgbBO42hmSgKddYsUQGwXAVgp3agueIXuNJYXtsBgSjSySuqVTz8zS&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVpDVCkwLPdYqyjxD8XS6hZV3GmkIxto9n--ktwf9ksqxc-MhPsyqhHS_Y&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgihMO97OzTHfNe18BnA5GFgjzC-_9qAq4V3Bb09F-sbRGauw2SGtYmEA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtvAfLQicDS6NJUOZP8ojO1w5WSU6wpHCkgtP52rxI7Zubn6iAeyNuFFg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLfiN3m2eJ-gWpBHaM-r0qzCssEbm_Nc5V8yw9zzeoZ0tF6vMW9JXLfk&s=10"
];

let indiceImagem = 0;

let imagemSlider = document.getElementById("imagemSlider");

function mostrarImagem() {

    imagemSlider.src = imagensSlider[indiceImagem];

}

document.getElementById("anterior").addEventListener("click", function() {

    if (indiceImagem > 0) {
        indiceImagem--;
        mostrarImagem();
    }

});

document.getElementById("proximo").addEventListener("click", function() {

    if (indiceImagem < imagensSlider.length - 1) {
        indiceImagem++;
        mostrarImagem();
    }

});

mostrarOficinas(oficinas);

mostrarImagem();

atualizarQuantidade();

let menuBotao = document.getElementById("menuBotao");
let menu = document.getElementById("menu");

menuBotao.addEventListener("click", function() {

    if (menu.style.display == "none") {
        menu.style.display = "flex";
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
