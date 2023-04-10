function resultado(){

    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let n3 = Number (document.getElementById("n3").value)

    let resultado = n1 - (n2 * 1.02 + n3 * 1.02)
    document.getElementById("resultado").innerHTML = "Seu salário deste mês será: R$" + resultado

}