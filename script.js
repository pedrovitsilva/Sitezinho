const botaoPrincipal = document.getElementById("botaoPrincipal");
const menuOpcoes = document.getElementById("menuOpcoes");
const botaoVoltar = document.getElementById("opcaoVoltar");
const botaoPresente = document.getElementById("opcaoPresente");
const botaoFoguinho = document.getElementById("opcaoFoguinho");

// Mostra ou esconde o menu ao clicar no botão principal
botaoPrincipal.addEventListener("click", () => {
  menuOpcoes.style.display = menuOpcoes.style.display === "none" ? "block" : "none";
});

// Reação ao botão "Voltar"
botaoVoltar.addEventListener("click", () => {
  menuOpcoes.style.display = "none";
});


document.getElementById('opcaoPresente').addEventListener('click', function() {
    const menuPresente = document.getElementById('menuPresente');
    menuPresente.style.display = menuPresente.style.display === 'none' ? 'block' : 'none';
});
document.getElementById('opcaoFoguinho').addEventListener('click', function() {
    const menuPresente = document.getElementById('menuFoguinho');
    menuPresente.style.display = menuPresente.style.display === 'none' ? 'block' : 'none';
});