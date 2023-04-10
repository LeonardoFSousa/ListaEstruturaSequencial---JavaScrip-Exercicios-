function resultado(){

    let n1 = Number (document.getElementById("n1").value)

    let peso1 = n1 * 1.15
    let peso2 = n1 * 0.80
    document.getElementById("peso1").innerHTML = "Peso após ganho de 15% de gordura (kg): " + Math.round(peso1)
    document.getElementById("peso2").innerHTML = "Peso após perda de 20% de gorgura (kg): " + Math.round(peso2)
}