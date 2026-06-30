const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
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

// Verifica se o usuário já tinha uma preferência salva anteriormente
const temaSalvo = localStorage.getItem('dark-mode');
if (temaSalvo === 'true') {
    document.body.classList.add('dark-mode');
}

// Adiciona o evento de clique ao botão
botaoTema.addEventListener('click', () => {
    // Alterna a classe .dark-mode no body
    document.body.classList.toggle('dark-mode');
    
    // Salva a escolha atual no localStorage do navegador
    const modoEscuroAtivo = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', modoEscuroAtivo);
});
