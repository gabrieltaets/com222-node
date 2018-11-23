var {database, User} = require('./database.js');

var u1 = new User('gtaets', 'abc', 'G.', 'T.');
var u2 = new User('elgonca', 'xyz', 'E.', 'C.');
var u3 = new User('ggferre', '123', 'G', 'F');

database.addUser(u1).then(x => console.log('Add u1'));
database.addUser(u2).then(x => console.log('Add u2'));
database.addUser(u3).then(x => console.log('Add u3'));

module.exports.database = database;
