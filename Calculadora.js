/*Crear dos calculadoras con HTML y CSS y crear con JS el Objeto Calculadora
utilizando el patrón function factory. El objeto calculadora debe heredar a dos objetos
calculadoraBasica y CalculadoraCientífica, que van a heredar sus funciones básicas de 
calculadora. Luego para calculadora científica agregar las funciones para potenciación
raíz cuadrada y valor absoluto.*/

var Calculadora = (function(){
    var Calculadora = function(){
        this.resultado = 0;
    }
    Calculadora.prototype.sumar = function(num1, num2){
        this.resultado = num1 + num2;
        return this.resultado;
    }
    Calculadora.prototype.restar = function(num1, num2){
        this.resultado = num1 - num2;
        return this.resultado;
    }
    Calculadora.prototype.multiplicar = function(num1, num2){
        this.resultado = num1 * num2;
        return this.resultado;
    }
    Calculadora.prototype.dividir = function(num1, num2){
        this.resultado = num1 / num2;
        return this.resultado;
    }
    Calculadora.prototype.potencia = function(num1, num2){
        this.resultado = Math.pow(num1, num2);
        return this.resultado;
    }
    Calculadora.prototype.raiz = function(num1, num2){
        this.resultado = Math.pow(num1, 1/num2);
        return this.resultado;
    }
    Calculadora.prototype.valorAbsoluto = function(num1){
        this.resultado = Math.abs(num1);
        return this.resultado;
    }
    return Calculadora;
})();

var CalculadoraBasica = (function(){
    var CalculadoraBasica = function(){
        this.resultado = 0;
    }
    CalculadoraBasica.prototype = new Calculadora();
    return CalculadoraBasica;
}   )();

var CalculadoraCientifica = (function(){
    var CalculadoraCientifica = function(){
        this.resultado = 0;
    }
    CalculadoraCientifica.prototype = new Calculadora();
    CalculadoraCientifica.prototype.potencia = function(num1, num2){
        this.resultado = Math.pow(num1, num2);
        return this.resultado;
    }
    CalculadoraCientifica.prototype.raiz = function(num1, num2){
        this.resultado = Math.pow(num1, 1/num2);
        return this.resultado;
    }
    CalculadoraCientifica.prototype.valorAbsoluto = function(num1){
        this.resultado = Math.abs(num1);
        return this.resultado;
    }
    return CalculadoraCientifica;
})();

var calculadoraBasica = new CalculadoraBasica();
var calculadoraCientifica = new CalculadoraCientifica();

console.log(calculadoraBasica.sumar(2,3));
console.log(calculadoraBasica.restar(2,3));
console.log(calculadoraBasica.multiplicar(2,3));
console.log(calculadoraBasica.dividir(2,3));
console.log(calculadoraBasica.potencia(2,3));
console.log(calculadoraBasica.raiz(2,3));
console.log(calculadoraBasica.valorAbsoluto(2));
