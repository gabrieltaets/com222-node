var User = function(username, pwd, f, l) {
  this.username = username;
  this.password = pwd;
  this.firstName = f;
  this.lastName = l;
};

var Database = function() {
  this.users = [];
  this.getUser = (username) => new Promise((success, fail) => {
    setTimeout(() => {
      let user = this.users.find(u => u.username === username);
      if(user === undefined) fail('Not Found');
      else success(user)
    }, 40);
  });
  this.addUser = (user) => new Promise((success, fail) => {
    setTimeout(() => {
      this.users.push(user);
      success(user);
    }), 40;
  });
};

module.exports.database = new Database();
module.exports.User = User;
