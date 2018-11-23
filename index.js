var User = function (nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
}

var Database = function() {
    this.data = [
        new User('Gabriel', '2017000959'),
        new User('Fabio', '2016006260'),
        new User('Jonathan', '2017000850')
    ];
    this.getUser = (nome) => {
        return new Promise((success, error) => {
            setTimeout(() => {
                let user = this.data.find(x => x.nome === nome);
                if(user === undefined) error('Not found');
                else success(user);
            }, 100);
        });
    };
}

var db = new Database();

module.exports = {
    database: db
}
