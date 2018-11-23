const assert = require('chai').assert;
const calculadora = require('../calculadora');
describe('TDD de Operações da Calculadora',() => {
  it('Teste: Soma de 2 números', () => {
    assert.equal(calculadora.adicionar(1, 1), 2);
  });
  it('Teste: Subtrair 2 números', () => {
    assert.equal(calculadora.subtrair(1, 1), 0);
  });
  it('Teste: Multiplicar 2 números', () => {
    assert.equal(calculadora.multiplicar(1, 1), 1);
  });
  it('Teste: Dividir 2 números', () => {
    assert.equal(calculadora.dividir(1, 1), 1);
  });
  it('Teste: NaN', () => {
    assert.isNaN(calculadora.dividir(1, "sei la "));
  });
});
