
let cont = document.getElementById('conta')
let num = [0, 0, 0]
let result = 0
let d = 0
let y = 1
let op = 0
let z = '+'
let prox = document.getElementById('proximo')
Reset(2, y, z)
VerificarResult()

function Reset(x, y, z) {
    //Pedras:
    let pedras = document.getElementsByClassName('pedra')
    for (let i = 0; i < pedras.length; i++) {
        pedras[i].style.marginTop = ''}
    //Pedras Expeciais:
    let pedrasE = document.getElementsByClassName('pE')
    for (let i = 0; i < pedrasE.length; i++) {
        pedrasE[i].style.marginBottom = '4vw'
        pedrasE[i].style.marginTop = ''}
    //Pedras Normais:
    let pedras1 = document.getElementsByClassName('p1')
    for (let i = 0; i < pedras1.length; i++) {
        pedras1[i].style.marginTop = '4vw'}
    //Zerar valores:
    let valores = document.getElementsByClassName('valor')
    for (i = 0; i < valores.length; i++) {
        valores[i].innerHTML = 0
    }
    //Definir novos números
    for (let i = 0; i <=2; i++) {
        num[i] = Math.floor(Math.random()*10**x)
    }
    num.sort()
    if (z == '/') {
        num[0] = Math.floor(Math.random()*10**x/4)+1
    }
    //Atualizar números:
    cont.innerHTML = ''
    if (y == 2) {
        cont.innerHTML = `${num[2]} ${z} ${num[1]} ${z} ${num[0]}`
        result = Math.floor(eval(num[2] + z + num[1] + z + num[0])) 
    }
    else {
        cont.innerHTML = `${num[2]} ${z} ${num[0]}`
        result = Math.floor(eval(num[2] + z + num[0]))
    }
    //Atualizar próximo:
    prox.style.backgroundColor = 'var(--cor4)'
}

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

function VerificarResult() {
    let valor = document.getElementsByClassName('valor')
    let r = ''
    
    for (let i = 0; i < valor.length; i++) {
        r = `${Number(r)}${valor[i].innerHTML}`
    }
    if (r == result) {
        cont.innerHTML = 'Parabéns'
        prox.style.backgroundColor = 'var(--cor3)'
    }
}

function Dificuldade() {
    let input = document.getElementById('dificult')
    let dificuldades = ['Super Fácil', 'Fácil', 'Médio', 'Díficil', 'Super Díficil']
    if (d < 4) {d++} else {d = 0}
    input.value = dificuldades[d]
    Reset(d+2, y, z)
}

function QuantidadeNumeros() {
    let input = document.getElementById('quanNum')
    if (y == 1) {y++} else {y = y-1}
    input.value = `${y+1} Números`
    Reset(d+2, y, z)
}

function Operação() {
    let input = document.getElementById('oper')
    let operações = ['Adição', 'Subtração', 'Multiplicação', 'Divisão']
    let oper = ['+', '-', '*', '/']
    if (op < 3) {op++} else {op=0}
    input.value = operações[op]
    z = oper[op]
    Reset(d+2, y, z)
}

function EntrarTerciario(x) {
    let inputs = ['menu', 'quanNum', 'dificult', 'oper']
    let input = document.getElementById(inputs[x-1])
    input.style.border = '0.2vw, solid, var(--cor3)'
    input.style.color = 'var(--cor3)'
}

function SairTerciario(x) {
    let inputs = ['menu', 'quanNum', 'dificult', 'oper']
    let input = document.getElementById(inputs[x-1])
    input.style.border = '0.1vw, solid, black'
    input.style.color = 'var(--cor4)'
}

function Menu() {
    alert('Desculpe! Ainda não temos um menu.')
}