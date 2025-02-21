// Array para armazenar os nomes dos amigos
let amigos = [];
let ultimoSorteado = null; // Armazena o último nome sorteado

// Função para adicionar amigos
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Verifica se o nome já existe na lista
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos exibida
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    amigos.forEach((amigo) => {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear um nome aleatório
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }

    let indiceAleatorio;
    let nomeSorteado;

    // Garante que o mesmo nome não seja sorteado duas vezes seguidas
    do {
        indiceAleatorio = Math.floor(Math.random() * amigos.length);
        nomeSorteado = amigos[indiceAleatorio];
    } while (nomeSorteado === ultimoSorteado && amigos.length > 1);

    ultimoSorteado = nomeSorteado;

    // Limpa a lista de amigos da tela
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    // Exibe o resultado na página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${nomeSorteado}</strong>`;
}