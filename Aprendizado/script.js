/**
 *   -FOR => É usado para repetir uma ação um número determinado de vezes até a condição ser atendida.
 *      1 - Inicialização: onde você define uma variável de controle e atribui um valor inicial a ela.   
 *      2 - Condição:onde você define a condição que deve ser atendida para que o loop continue.
 *      3 - Expressão final:oque vai ocorrer a cada  vez que o loop é executado.
 * 
 * 
 *      for ([inicialização]; [condição]; [expressão final]) {
 *        bloco de código a ser executado enquanto a condição for verdadeira
 *       }
 */


/*for(let i = 0; i < 10; i++){
    console.log(i);
}
*/


const users = ["lucas", "joão", "maria", "pedro", "ana", "jose", "carlos", "marcos", "fernanda", "juliana"];

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}
