let DMSS = parseInt(Math.random() * 4 + 1)

function numero1() {
    let primeiroNumero = document.getElementById('primeiroNumero').value
    console.log(`${primeiroNumero}`)
    let segundoNumero = document.getElementById('segundoNumero').value
    console.log(`${segundoNumero}`)

if (DMSS == 1) {
    let soma =  primeiroNumero + segundoNumero
    exibir =(`a soma de ${primeiroNumero} com ${segundoNumero} deu ${soma}`);
    exbirMensagemInicial(exibir)
} else if (DMSS == 2) {
    let subritair = primeiroNumero - segundoNumero
    exibir =(`a subritação de ${primeiroNumero} com ${segundoNumero} deu ${subritair}`);
    exbirMensagemInicial(exibir)
    } else  if (DMSS == 3) {
        let multiplicado = primeiroNumero * segundoNumero
        exibir =(`a multiplicação de ${primeiroNumero} com ${segundoNumero} deu ${multiplicado}`);
        exbirMensagemInicial(exibir)
        } else {
            let dividido = primeiroNumero / segundoNumero
            exibir =(`a divisão de ${primeiroNumero} com ${segundoNumero} deu ${dividido}`);
            exbirMensagemInicial(exibir)
        }
        
}





let exibir = ``

//let soma = numero1() + numero2();

    


  //  if (DMSS == 1) {
  //          let soma =  
  //          exibir =(`a soma de ${numero1()} com ${numero2()} deu ${soma}`);
  //          exbirMensagemInicial(exibir)
  //      } else if (DMSS == 2) {
  //          let subritair = numero1() - numero2()
  //          exibir =(`a subritação de ${numero1()} com ${numero2()} deu ${subritair}`);
  //          exbirMensagemInicial(exibir)
  //          } else  if (DMSS == 3) {
  //              let multiplicado = numero1() * numero2()
  //              exibir =(`a multiplicação de ${numero1()} com ${numero2()} deu ${multiplicado}`);
  //              exbirMensagemInicial(exibir)
  //              } else {
  //                  let dividido = numero1() / numero2()
  //                  exibir =(`a divisão de ${numero1()} com ${numero2()} deu ${dividido}`);
  //                  exbirMensagemInicial(exibir)
  //              }


function exbirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exbirMensagemInicial() {
    exbirTextoNaTela('h1', exibir);
}



