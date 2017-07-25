var express = require('express');

var path = require('path');
var appRootDirectory = path.dirname(require.main.filename);

var app = express();
app.set('view engine', 'ejs');

// Set environment
app.set('port', (process.env.PORT || 5000));

// Routes for static files
app.use(express.static(__dirname));

// Sample API GET request handler
app.get('/:name/:message', function(request, response) {
  response.render('dear-name', {
    name: request.params.name.replace(/\+/g, ' '),
    message: request.params.message.replace(/\+/g, ' '),
  });
});

app.listen(app.get('port'), function(){
  console.log('ui-server listening on port ' + app.get('port'))
});
