//Pedras Expeciais:
let pedrasE = document.getElementsByClassName('pE')
for (let i = 0; i < pedrasE.length; i++) {
    pedrasE[i].style.marginBottom = '4vw'}
//Pedras Normais:
let pedras1 = document.getElementsByClassName('p1')
for (let i = 0; i < pedras1.length; i++) {
    pedras1[i].style.marginTop = '4vw'}

function MoverPedraE(x) {
    let valor = document.getElementById(`valor${x}`)
    PedraE = document.getElementById(`pe${x}`)
    if (PedraE.style.marginBottom == '4vw') {
        PedraE.style.marginBottom = ''
        PedraE.style.marginTop = '4vw'
        valor.innerHTML = Number(valor.innerHTML) + 5
    }
    else {
        PedraE.style.marginBottom = '4vw'
        PedraE.style.marginTop = ''
        valor.innerHTML = Number(valor.innerHTML) - 5
    }
}
function MoverPedra(n, x) {
    //Se a margin estiver nessa pedra ou acima dessa pedra:
    //A pedra de baixo reberá a margin.
    //Se não:
    //Está pedra receberá a margin.
    let valor = document.getElementById(`valor${x}`)
    let y = Number(valor.innerHTML)
    let w = 0
    if (y > 4) {
        y = y - 5
        w = 5
    }
    let margin = y + 1
    let z = margin
    if (n >= margin) {
        margin = n+1
    }
    else {
        margin = n
    }
    let PedraComMargin = document.getElementById(`p${margin}${x}`)
    let PedraAnterior = document.getElementById(`p${z}${x}`)
    PedraAnterior.style.marginTop = ''
    PedraComMargin.style.marginTop = '4vw'
    valor.innerHTML = margin - 1 + w
    VerificarResult()
}

//------------------------------------------------------------

let cont = document.getElementById('conta')
num1 = Math.floor(Math.random()*1000)
num2 = Math.floor(Math.random()*1000)
num3 = Math.floor(Math.random()*1000)
let result = num1 + num2 + num3
cont.innerHTML = `${num1} + ${num2} + ${num3} = ${result}`

function VerificarResult() {
    let valor = document.getElementsByClassName('valor')
    let r = ''
    for (let i = 0; i < valor.length; i++) {
        r = `${Number(r)}${valor[i].innerHTML}`
    }
    if (r == result) {
        cont.innerHTML = 'Parabéns'
    }
}