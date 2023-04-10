function resultado(){

    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)

    let vendas = n2 * 0.04

    let resultado = n1 + vendas
    document.getElementById("vendas").innerHTML = "Comissão: R$" + vendas
    document.getElementById("resultado").innerHTML = "Salário do Mês: R$" + resultado
}