// Seleciona APENAS os botões de reação dentro dos artigos (evita o botão de tema)
const botoesReacao = document.querySelectorAll("article button");

botoesReacao.forEach(function (botao) {
  let curtiu = false;
  botao.addEventListener("click", botaoClicado);
  
  function botaoClicado() {
    let texto = botao.querySelector("span");
    if (curtiu === false) {
      texto.textContent++;
      curtiu = true;
    } else {
      texto.textContent--;
      curtiu = false;
    }
  }
});

// Lógica do Tema Escuro
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
  // O método toggle adiciona a classe se ela não existir, e remove se existir
  document.body.classList.toggle("tema-escuro");
}
