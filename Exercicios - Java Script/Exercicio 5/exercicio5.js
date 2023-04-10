function resultado(){

    let n1 = Number (document.getElementById("n1").value)

    let resultado = n1 * 0.90
    document.getElementById("resultado").innerHTML = "O preço do produto com o desconto é: R$" + resultado
}