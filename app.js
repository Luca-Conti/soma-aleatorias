let DMSS = parseInt(Math.random() * 4 + 1)

function numero1() {
    let primeiroNumero = Number(document.getElementById('primeiroNumero').value)
    console.log(`${primeiroNumero}`)
    let segundoNumero = Number(document.getElementById('segundoNumero').value)
    console.log(`${segundoNumero}`)

if (DMSS == 1) {
    let soma =  primeiroNumero + segundoNumero
    exibir =(`A soma de ${primeiroNumero} com ${segundoNumero} deu ${soma}`);
    exbirMensagemInicial(exibir)
} else if (DMSS == 2) {
    let subritair = primeiroNumero - segundoNumero
    exibir =(`A subritação de ${primeiroNumero} com ${segundoNumero} deu ${subritair}`);
    exbirMensagemInicial(exibir)
    } else  if (DMSS == 3) {
        let multiplicado = primeiroNumero * segundoNumero
        exibir =(`A multiplicação de ${primeiroNumero} com ${segundoNumero} deu ${multiplicado}`);
        exbirMensagemInicial(exibir)
        } else {
            let dividido = primeiroNumero / segundoNumero
            exibir =(`A divisão de ${primeiroNumero} com ${segundoNumero} deu ${dividido}`);
            exbirMensagemInicial(exibir)
        }

        alterarStatus()
        
}

function alterarStatus() {
    let btnReniciar = document.getElementById("btn-reniciar");
    
    if (btnReniciar.classList.contains('reiniciar')) {
       btnReniciar.classList.remove('reiniciar')
       btnReniciar.classList.add('botao1')
    } else {
        btnReniciar.classList.add('reiniciar')
        btnReniciar.classList.remove('botao1')
    }
}

let exibir = ``
function exbirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exbirMensagemInicial() {
    exbirTextoNaTela('h1', exibir);
}

 function reiniciar() {
        document.getElementById('primeiroNumero').value = '';
        document.getElementById('segundoNumero').value = '';
        DMSS = parseInt(Math.random() * 4 + 1)
        innerHTML = '<h1 class="titulo">DIGITE O NUMERO ALEATORIO</h1>'

        alterarStatus()
 }