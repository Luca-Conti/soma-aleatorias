window('ola esse é um programa desenvolvido onde o obigetivo é vc digitar um numero escolhido pro vc e o programa fazer uma divisão ou soma ou multiplicação ou subritação')
let pergunda = Number(prompt("digite um numero pra ser somado ou dividido multiplicado ou subritaido aleatoriamente"))
let pergundadmss = Number(prompt("digite outro para ser somado ou dividido multiplicado oupergunda aleatoriamente"))
let DMSS = parseInt(Math.random() * 4 + 1)


let exibir = ``

    

 if (DMSS == 1) {
        let soma = pergunda + pergundadmss
        exibir =`a soma de ${pergunda} com ${pergundadmss} deu ${soma}`;
        exbirMensagemInicial(exibir)
    } else if (DMSS == 2) {
        let subritair = pergunda - pergundadmss
        exibir =`a subritação de ${pergunda} com ${pergundaDmss} deu ${subritair}`;
        exbirMensagemInicial(exibir)
        } else  if (DMSS == 3) {
            let multiplicado = pergunda * pergundadmss
            exibir =`a multiplicação de ${pergunda} com ${pergundadmss} deu ${multiplicado}`;
            exbirMensagemInicial(exibir)
             } else {
                let dividido = pergunda / pergundadmss
                exibir =`a divisão de ${pergunda} com ${pergundadmss} deu ${dividido}`;
                exbirMensagemInicial(exibir)
            }
        


//alert(verificar)

//function exibirNaTela(tag, texto) {
//    let campo = document.querySelector(tag)
//    campo.innerHTML = texto
//}
//
//function exibirMensagem() {
//    exibirNaTela('h1' `o total deu `)
//} 


function exbirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exbirMensagemInicial() {
    exbirTextoNaTela('h1', exibir);}
e

