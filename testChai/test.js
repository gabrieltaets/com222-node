const chai = require('chai');
const calculadora = require('./calculadora');
const assert = chai.assert;

//Testes:
//Nº 1
describe('TDD de Operações da Calculadora1',() =>{
    it('Teste: Soma de 2 números', () =>{
        assert.equal(calculadora.adicionar(1,1),2);
    });

    it('Teste: Substrair 2 números', () =>{
        assert.equal(calculadora.subtrair(1,1),0);
    });

    it('Teste: Multiplicar 2 números', () =>{
        assert.equal(calculadora.multiplicar(1,1),1);
    });

    it('Teste: Dividir 2 números', () =>{
        assert.equal(calculadora.dividir(1,1),1);
    });
});