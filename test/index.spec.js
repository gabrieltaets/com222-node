/* test/index.spec.js */
var assert = require('assert'); // módulo assert do Node.js
var {database} = require('../index.js'); // database instanciado
describe('index.js', function() { // coleção principal de teste
  describe('Database', function () { // sub-coleção de teste
    it('deve encontrar elgonca', function() { // o que se espera desse teste?
      return database.getUser('elgonca').then((u) => { // chama o “database”
        assert.deepEqual(u, { // verifica que os atributos batem
          username: 'elgonca',
          password: 'xyz',
          firstName: 'E.',
          lastName: 'C.'
        });
      });
    });
  });
});
