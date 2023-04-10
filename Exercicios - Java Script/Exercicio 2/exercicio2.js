function resultado(){

    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let n3 = Number (document.getElementById("n3").value)

    let resultado = n1 * n2 * n3
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado
}