function resolverequacaodesegundograu(a,b,c){  
    //passo 1: calcular o delta
    let delta = b*b-4*a*c

    // paasp 2: verificar se o delta é 0, negativo ou positivo
if (delta<0){ 
    // se o delta for negativo, a equação não tem raiz reais
    console.log("a equação não tem raizes reais") 

}
else if (delta===0){
    //se o delta for igual a zero, a equação tem duas raizes iguais
    console.log("a equação tem raizes iguais. ")
}
else { 
    //se o delta for positiva, a equação tem duas raizes diferentes
    let x1 = (-b+ Math.sqrt(delta))/(2*a)
    let x2 = (-b- Math.sqrt(delta))/(2*a)
    
 console.log("a equação tem duas raizes reais: x1 ",x1, "e x2+ " ,x2 )   


}

}
resolverequacaodesegundograu(1, -3, 2)
resolverequacaodesegundograu(4, -8, 6)
resolverequacaodesegundograu(9, -3, 18)
