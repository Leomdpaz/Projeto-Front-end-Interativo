// LISTA DE MISSÕES

let missoes = [
    {
        id: 1,
        titulo: "Buscar suprimentos",
        descricao: "Encontrar comida e água para o grupo",
        categoria: "Suprimentos",
        local: "Supermercado",
        prioridade: "Alta",
        dificuldade: "Média",
        responsavel: "Victor",
        prazo: "2026-10-10",
        status: "Fazendo"
    },

    {
        id: 2,
        titulo: "Encontrar medicamentos",
        descricao: "Procurar medicamentos importantes",
        categoria: "Suprimentos",
        local: "Hospital",
        prioridade: "Alta",
        dificuldade: "Difícil",
        responsavel: "Ana",
        prazo: "2026-10-11",
        status: "Pendente"
    },

    {
        id: 3,
        titulo: "Proteger o abrigo",
        descricao: "Verificar a segurança do abrigo",
        categoria: "Defesa",
        local: "Abrigo",
        prioridade: "Média",
        dificuldade: "Fácil",
        responsavel: "Leo",
        prazo: "2026-10-09",
        status: "Feito"
    }
];

function carregarMissoes() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(missoes);
        }, 5000);
    });
}

async function iniciar() {
    const mensagem = document.getElementById("mensagem-carregamento");

    console.log("Carregando missões...");

    mensagem.textContent = "☣️ Carregando missões... Aguarde.";
    mensagem.style.color = "#ffcc00cb";

    await carregarMissoes();

    console.log("Missões carregadas!");

    mensagem.textContent = "✅ Missões carregadas.";
    mensagem.style.color = "#a7ff60b9";

    mostrarMissoes();
    atualizarResumo();
}

function mostrarMissoes() {
    let lista = document.getElementById("lista");

    let busca = document
        .getElementById("busca")
        .value
        .toLowerCase();
    let filtro = document.getElementById("filtro").value;
    lista.innerHTML = "";

    for (let i = 0; i < missoes.length; i++) {
        let missao = missoes[i];
        let encontrouBusca =
            missao.titulo
                .toLowerCase()
                .includes(busca);
        let encontrouFiltro =
            filtro === "Todos" ||
            missao.status === filtro;

        if (encontrouBusca && encontrouFiltro) {
            let div = document.createElement("div");
            div.className = "tarefa";
            div.innerHTML = `

                <h3>🧟 ${missao.titulo}</h3>

                <p>
                    <strong>ID:</strong>
                    ${missao.id}
                </p>

                <p>
                    <strong>Prioridade:</strong>
                    ${missao.prioridade}
                </p>

                <p>
                    <strong>Sobrevivente:</strong>
                    ${missao.responsavel}
                </p>

                <p>
                    <strong>Prazo:</strong>
                    ${missao.prazo}
                </p>

                <p>
                    <strong>Status:</strong>
                    ${missao.status}
                </p>

                <button onclick="alterarStatus(${missao.id})">
                    Alterar status
                </button>

                <button
                    class="botao-detalhes"
                    onclick="mostrarDetalhes(${missao.id})">
                    Ver detalhes
                </button>

            `;
            lista.appendChild(div);
        }

    }

}


function alterarStatus(id) {

    for (let i = 0; i < missoes.length; i++) {

        if (missoes[i].id === id) {

            if (missoes[i].status === "Pendente") {

                missoes[i].status = "Fazendo";

            }

            else if (missoes[i].status === "Fazendo") {

                missoes[i].status = "Feito";

            }

            else if (missoes[i].status === "Feito") {

                missoes[i].status = "Fracasso";

            }

            else {

                missoes[i].status = "Pendente";
            }
        }
    }

    mostrarMissoes();
    atualizarResumo();

}

function atualizarResumo() {

    let total = missoes.length;
    let pendente = 0;
    let fazendo = 0;
    let feito = 0;
    let fracasso = 0;


    for (let i = 0; i < missoes.length; i++) {

        if (missoes[i].status === "Pendente") {

            pendente++;

        }

        else if (missoes[i].status === "Fazendo") {

            fazendo++;

        }

        else if (missoes[i].status === "Feito") {

            feito++;

        }
        else if (missoes[i].status === "Fracasso") {

            fracasso++;
        }

    }


    document.getElementById("total").textContent = total;
    document.getElementById("pendente").textContent = pendente;
    document.getElementById("fazendo").textContent = fazendo;
    document.getElementById("feito").textContent = feito;
    document.getElementById("fracasso").textContent = fracasso;

}

document
    .getElementById("formulario")
    .addEventListener("submit", function(evento) {

        evento.preventDefault();


        let titulo = document.getElementById("titulo").value.trim();

        let descricao = document.getElementById("descricao").value.trim();

        let categoria = document.getElementById("categoria").value;

        let local = document.getElementById("local").value;

        let prioridade = document.getElementById("prioridade").value;

        let dificuldade = document.getElementById("dificuldade").value;

        let responsavel = document.getElementById("responsavel").value.trim();

        let prazo = document.getElementById("prazo").value;


        let mensagem = document.getElementById("mensagem");

        if (
            titulo === "" ||
            descricao === "" ||
            categoria === "" ||
            local === "" ||
            prioridade === "" ||
            dificuldade === "" ||
            responsavel === "" ||
            prazo === ""
        ) {
            mensagem.textContent = "Preencha todos os campos!";
            mensagem.style.color = "red";
            return;
        }

        if (titulo.length < 3) {
            mensagem.textContent = "O nome da missão deve ter pelo menos 3 caracteres.";
            mensagem.style.color = "red";
            return;
        }

        if (descricao.length < 10) {
            mensagem.textContent ="A descrição deve ter pelo menos 10 caracteres.";
            mensagem.style.color = "red";
            return;

        }

        if (responsavel.length < 3) {
            mensagem.textContent ="O nome do sobrevivente deve ter pelo menos 3 caracteres.";
            mensagem.style.color = "red";
            return;

        }

        let novaMissao = {
            id: missoes.length + 1,
            titulo: titulo,
            descricao: descricao,
            categoria: categoria,
            local: local,
            prioridade: prioridade,
            dificuldade: dificuldade,
            responsavel: responsavel,
            prazo: prazo,
            status: "Pendente"

        };

        missoes.push(novaMissao);
        mostrarMissoes();
        atualizarResumo();

        document
            .getElementById("formulario")
            .reset();

        mensagem.textContent = "Missão criada com sucesso!";

        mensagem.style.color = "green";

    });

function mostrarDetalhes(id) {
    for (let i = 0; i < missoes.length; i++) {

        if (missoes[i].id === id) {

            let missao = missoes[i];

            let detalhes = document.getElementById("conteudoDetalhes");

            detalhes.innerHTML = `

                <h3>🧟 ${missao.titulo}</h3>

                <p>
                    <strong>ID:</strong>
                    ${missao.id}
                </p>

                <p>
                    <strong>Objetivo:</strong>
                    ${missao.descricao}
                </p>

                <p>
                    <strong>Tipo de missão:</strong>
                    ${missao.categoria}
                </p>

                <p>
                    <strong>Local:</strong>
                    ${missao.local}
                </p>

                <p>
                    <strong>Prioridade:</strong>
                    ${missao.prioridade}
                </p>

                <p>
                    <strong>Dificuldade:</strong>
                    ${missao.dificuldade}
                </p>

                <p>
                    <strong>Sobrevivente responsável:</strong>
                    ${missao.responsavel}
                </p>

                <p>
                    <strong>Prazo:</strong>
                    ${missao.prazo}
                </p>

                <p>
                    <strong>Status:</strong>
                    ${missao.status}
                </p>

            `;

        }

    }

}

document
    .getElementById("busca")
    .addEventListener("input", function() {

        mostrarMissoes();

    });

document
    .getElementById("filtro")
    .addEventListener("change", function() {

        mostrarMissoes();

    });

iniciar();