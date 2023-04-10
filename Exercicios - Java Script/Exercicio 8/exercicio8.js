function resultado(){

    let n1 = Number (document.getElementById("n1").value)

    let peso1 = n1 * 1000
    document.getElementById("peso1").innerHTML = "Seu peso em Gramas é: " + Math.round(peso1)
}