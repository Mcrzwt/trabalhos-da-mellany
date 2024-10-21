//função que sera executada quando o botão for clicado

function adicionandoGiria(){
    // pegando o valor inserido no input
    giria = document.getElementById("giriasInput").value
    //selecionando  a div os resultados (girias) serão exibidas
    resultadodiv = document.getElementById("resultado")
    // verificando se o campo de texto não esta vazio
    if (giria){
    //criando um novo elemento <p> que contera a giria adicionada
    novaGirira = document.createElement("p")
    //defiido o conteudo de texto do <p>
    novaGirira.textContent = `Giria adicionada: ${giria}`
    //adicionando o <p> dentro da div de resultado 
    resultadodiv.appendChild(novaGirira)
    //limpando o campo de texto, apos a giria se adicionada
    document.getElementById("giriaInput").value = ''
    } else {
       //alertando o usuario caso o campo esteja vazio
       alert("por favor, insira uma giria")
    }
 }