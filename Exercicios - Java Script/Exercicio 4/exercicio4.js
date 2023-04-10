function resultado(){

    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)

    let nota1 = n1 * 2
    let nota2 = n2 * 3

    let resultado = (nota1 + nota2) / 5
    document.getElementById("resultado").innerHTML = "A média é: " + resultado
}