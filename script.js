//()
const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})

function proximoPasso0() {
    document.title = "Rota Longa";
}

function proximoPasso1() {
    document.title = "Rota Curta";
}

function proximoPasso2() {
    document.title = "Caminho sem volta";
}

function proximoPasso3() {
    document.title = "Maldição";
}

function proximoPasso4() {
    document.title = "A Verdade";
}
