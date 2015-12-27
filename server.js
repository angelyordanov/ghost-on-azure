var ghost = require('ghost'),
    path = require('path');

ghost({
  config: path.join(__dirname, 'config.js') //path to your config
}).then(function (ghostServer) {
    ghostServer.start();
});
