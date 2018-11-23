var assert = require('assert');
var {database} = require('../index.js');

describe('index.js', function() {
  describe('Database', function () {
    it('deve encontrar Gabriel', async function() {
      let user = await database.getUser('Gabriel');
      assert.deepEqual(user, {
        nome: 'Gabriel',
        matricula: '2017000959'
      });
    });
    it('deve encontar Gabriel 2', function() {
      return database.getUser('Gabriel').then(u => {
        assert.deepEqual(u, {
          nome: 'Gabriel',
          matricula: '2017000959'
        });
      });
    });
    it('nao deve encontrar José', function() {
      return assert.rejects(database.getUser('José'));
    });
  });
});

/*
Promise/then <-> async/await
*/
