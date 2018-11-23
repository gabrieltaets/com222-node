var lista = ['Gabriel', 'Jonathan', 'Fábio', 'Gustavo'];

function existe(nome) {
    return lista.includes(nome);
}

function promiseExiste(nome) {
    return new Promise((yes, no) => {
        setTimeout(() => {
            if(existe(nome)) yes(true);
            else no();
        }, 3000);
    });
}

module.exports = {
    existe, promiseExiste
}
