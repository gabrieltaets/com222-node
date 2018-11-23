var assert = require('assert');
var {database} = require('../index.js');

describe('index.js', function() {
    describe('Database', function () {
        it('deve encontrar Gabriel',async function() {
            let user = await database.getUser('Gabriel');
            assert.deepEqual(user, {
                nome: 'Gabriel',
                matricula: '2017000959'
            });
        });
    });
});
