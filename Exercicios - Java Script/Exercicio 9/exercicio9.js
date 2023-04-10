function resultado(){

    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let n3 = Number (document.getElementById("n3").value)

    let bases = n1 + n2
    let resultado = (bases * n3) / 2
    document.getElementById("resultado").innerHTML = "A área do trapézio é: " + resultado
}