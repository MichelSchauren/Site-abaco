//Pedras Expeciais:
let pedraET = document.getElementById('peT')
let pedraEB = document.getElementById('peB')
let pedraEM = document.getElementById('peM')
let pedraEK = document.getElementById('peK')
let pedraEC = document.getElementById('peC')
let pedraED = document.getElementById('peD')
let pedraEU = document.getElementById('peU')
//Pedras Normais:
let pedraT = document.getElementById('p1T')
let pedraB = document.getElementById('p1B')
let pedraM = document.getElementById('p1M')
let pedraK = document.getElementById('p1K')
let pedraC = document.getElementById('p1C')
let pedraD = document.getElementById('p1D')
let pedraU = document.getElementById('p1U')
//Colocar margin nessas pedras:
pedraET.style.marginBottom = '4vw'
pedraEB.style.marginBottom = '4vw'
pedraEM.style.marginBottom = '4vw'
pedraEK.style.marginBottom = '4vw'
pedraEC.style.marginBottom = '4vw'
pedraED.style.marginBottom = '4vw'
pedraEU.style.marginBottom = '4vw'
pedraT.style.marginTop = '4vw'
pedraB.style.marginTop = '4vw'
pedraM.style.marginTop = '4vw'
pedraK.style.marginTop = '4vw'
pedraC.style.marginTop = '4vw'
pedraD.style.marginTop = '4vw'
pedraU.style.marginTop = '4vw'
//Valores:
let valorT = document.getElementById(`valorT`)
let valorB = document.getElementById(`valorB`)
let valorM = document.getElementById(`valorM`)
let valorK = document.getElementById(`valorK`)
let valorC = document.getElementById(`valorC`)
let valorD = document.getElementById(`valorD`)
let valorU = document.getElementById(`valorU`)

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
cont.innerHTML = `${num1} + ${num2} + ${num3}`

function VerificarResult() {
    let r = Number(`${valorT.innerHTML}${valorB.innerHTML}${valorM.innerHTML}${valorK.innerHTML}${valorC.innerHTML}${valorD.innerHTML}${valorU.innerHTML}`)

    if (r == result) {
        cont.innerHTML = 'Parabéns'
    }
}