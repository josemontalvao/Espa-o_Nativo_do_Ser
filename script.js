function carregar() {
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();

    if (hora >= 0 && hora < 12) {
        img.src = "Imagens/Manha.png";
        document.body.style.background = "#f0cfa7";
    } else if (hora >= 12 && hora < 18) {
        img.src = "Imagens/Tarde.png";
        document.body.style.background = "#fec15c";
    } else {
        img.src = "Imagens/Noite.png";
        document.body.style.background = "#5a5a5c";
    }
}

// Função para formatar 1 em 01
const zeroFill = n => {
    return ('0' + n).slice(-2);
}

// Cria intervalo
const interval = setInterval(() => {
    // Pega o horário atual
    const now = new Date();

    // Formata a data conforme dd/mm/aaaa hh:ii:ss
    const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

    // Exibe na tela usando a div#data-hora
    document.getElementById('data-hora').innerHTML = `Hoje é dia ${dataHora} horas`;
}, 1000);



