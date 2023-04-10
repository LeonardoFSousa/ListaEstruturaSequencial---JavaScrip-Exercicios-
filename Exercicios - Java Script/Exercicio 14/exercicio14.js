function resultado(){

    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)

    let resultado1 = n2 - n1
    document.getElementById("resultado1").innerHTML = "Seu tempo de vida em anos é: " + resultado1
    let resultado2 = (n2 - n1) * 12
    document.getElementById("resultado2").innerHTML = "<br> Seu tempo de vida em meses é: " + resultado2
    let resultado3 = (n2 - n1) * 365
    document.getElementById("resultado3").innerHTML = "<br> Seu tempo de vida em dias é: " + resultado3
    let resultado4 = (n2 - n1) * 52
    document.getElementById("resultado4").innerHTML = "<br> Seu tempo de vida em semanas é: " + resultado4

    



    
}