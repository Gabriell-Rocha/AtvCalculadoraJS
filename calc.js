let op = '';
function Limpar(){
    document.getElementById('tela').value = "";
}
function Mostrar(valor){
    document.getElementById('tela').value += valor;

     if(valor==='+' || valor==='-' || valor==='x' || valor==='/'){
     op = valor;
    }
}
function Calcular(){
    let arrayOperacao = document.getElementById('tela').value.split(op)
    arrayOperacao[0] = parseFloat(arrayOperacao[0]);
    arrayOperacao[1] = parseFloat(arrayOperacao[1]);
    let result = 0;

    switch(op){
        case '+':
            result = arrayOperacao[0] + arrayOperacao[1];
            break;
        case '-':
            result = arrayOperacao[0] - arrayOperacao[1]; 
            break;
        case 'x':
            result = arrayOperacao[0] * arrayOperacao[1];
            break;
        case '/':
            result = arrayOperacao[0]/arrayOperacao[1];
            break;              
       }
       document.getElementById('tela').value = result;
}
    


