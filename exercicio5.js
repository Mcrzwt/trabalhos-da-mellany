function podeestudar(concluiuEnsinomedio,idade,cursandooutrafaculdade){
    return concluiuEnsinomedio &&idade>=18 &&!cursandooutrafaculdade}


// dados da função
    let concluiuEnsinomedio = true // se sim
    let idade = 22 // definindo idade
    let cursandooutrafaculdade = false //falsa para dizer que não
      
    //verificar se pode entrar na faculdade
    let resulado = podeestudar(concluiuEnsinomedio,idade,cursandooutrafaculdade)

    //exibindo o resultado
    if(resulado){
        console.log('voce pode entrar na faculdade')
    }
    else{
        console.log("voce nao pode entrar na faculdade")
    }
