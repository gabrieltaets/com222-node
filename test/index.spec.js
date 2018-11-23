var assert = require('assert');
var {existe, promiseExiste} = require('../index.js');

describe('index.js', function() {

    describe('lista', function() {
        it('deve conter \'Gabriel\'', function() {
            assert.equal(existe('Gabriel'), true);
        });

        it('não deve conter \'Pabblo Vittar\'', function() {
            assert.equal(existe('Pabblo Vittar'), false);
        });
    });

    describe('lista - promise', function() {
        it('deve conter \'Gabriel\' após 3s', function() {
            this.timeout(4000);
            return promiseExiste('Gabriel').then(e => {
                return assert.ok(e);
            });
        });

        it('não deve ter \'Pabblo Vittar\' após 3s', function() {
            this.timeout(4000);
            assert.rejects(promiseExiste('Pabblo Vittar'));
        });

        it('deve conter Jonathan', async function() {
            this.timeout(3010);
            assert.ok(await promiseExiste('Jonathan'));
        });
    });
});
