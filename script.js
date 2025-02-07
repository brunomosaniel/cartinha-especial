function abrirCarta(event) {
    if (event) event.stopPropagation();
    let carta = document.getElementById('carta');
    let conteudo = document.getElementById('conteudo');
    let tampa = document.querySelector('.tampa');
    let botao = document.querySelector('.open-button');
    carta.classList.toggle('mostrar-carta');
    tampa.classList.toggle('tampa-aberta');
    botao.style.display = 'none';
    setTimeout(() => {
        conteudo.classList.toggle('mostrar-conteudo');
    }, 1000);
}
