function resultado(){

    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)

    let resultado = n2 / n1
    let resultadoarredondado = resultado.toFixed(2)
    document.getElementById("resultado").innerHTML = "Seu salário equivale á: " + resultadoarredondado
    document.getElementById("resultado").innerHTML += " salários mínimos"



    
}