// Variáveis de áudio
const somSelect = new Audio("recursos/somSelect.mp3");
const somHover = new Audio("recursos/somHover.mp3");
const somIntro = new Audio("recursos/somIntro.mp3");

// Variáveis de elementos
const butoes = Array.from(document.getElementsByClassName("BTmenu"));
const introBar = document.getElementById("introBar");
const menuBar = document.getElementById("inicio");

// Telas
const telasGeral = Array.from(document.getElementsByClassName("sectionScreen"));
const projetos = document.getElementById("projetos");
const conhecimentos = document.getElementById("conhecimentos");
const sobre = document.getElementById("sobre");
const linksUteis = document.getElementById("links");
const sections = document.getElementById("sections");
const titleSection = document.getElementById("titleSection");

// Função para efeito sonoro de hover
function hoverSom() {
    somHover.currentTime = 0;
    somHover.play();
}

// Efeitos sonoros para os botões do menu de ações
butoes.forEach(botao => {
    botao.addEventListener('click', () => {
        somSelect.currentTime = 0;
        somSelect.play();
    });

    botao.addEventListener('mouseenter', () => hoverSom());
});

// Função para iniciar o site (abrir a tela inicial)
function iniciarSite() {
    somIntro.play()
    introBar.style.opacity = 0;
    setTimeout(() => {
        introBar.style.display = "none";
        menuBar.style.display = "flex";
        menuBar.classList.add("introAnim");
        setTimeout(() => {
            menuBar.classList.remove("introAnim");
        },1800)
    }, 280);
}

// Função para abrir as telas
function abrirTela(tela, texto) { // tela = variável do container da tela, texto = o texto contido nos botões do menu de ações
    menuBar.classList.add("sumir");
    setTimeout(() => {
        menuBar.style.display = "none";
        menuBar.classList.remove("sumir");
        sections.style.display = "flex";
        sections.classList.add("aparecer");
        setTimeout(() => {
            sections.classList.remove("aparecer");
        }, 1980)
    }, 900);

    tela.style.display = "flex";
    titleSection.textContent = texto;
}

// Função para fechar a tela
function fecharTelas() {
    somSelect.currentTime = 0;

    somSelect.play();

    sections.classList.add("sumir");
    setTimeout(() => {
        sections.style.display = "none";
        sections.classList.remove("sumir");
        menuBar.style.display = "flex";
        menuBar.classList.add("aparecer");
        telasGeral.forEach(telas => {
            telas.style.display = "none";
        });
        setTimeout(() => {
            menuBar.classList.remove("aparecer");
        }, 1280)
    }, 900);
}

// Função para abrir links utilizando botões
function abrirLink(link) {
    somSelect.currentTime = 0;
    somSelect.play();
    
    window.open(href = link);
}