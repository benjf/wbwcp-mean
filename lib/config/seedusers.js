
var mongoose = require('mongoose'),
  User = mongoose.model('User');

User.find({}).exec(function (err, collection) {
  // if no Users exist, populate initial User data
  if (collection.length === 0) {
    User.create({
        name: 'Benj Fredrick',
        email: 'benj.fredrick@gmail.com',
        role: 'admin',
        password: 'changeme'
      });
      User.create({
        name: 'Andy Hieb',
        email: 'arh1@dtek.net',
        role: 'admin',
        password: 'changeme'
      });
      User.create({
        name: 'Rhys Daunic',
        email: 'rhys@themediaspot.org',
        role: 'admin',
        password: 'changeme'
      });
      User.create({
        name: 'Andy Shirey',
        email: 'ashirey_sf@yahoo.com',
        role: 'admin',
        password: 'changeme'
      });
      User.create({
        name: 'Joe Destefano',
        email: 'jdseph@gmail.com',
        role: 'admin',
        password: 'changeme'
      });
  }
});
