
// example usage: "$ phantomjs screenshot.js http://github.com "

var system = require('system');
var args = system.args;

var page = require('webpage').create();
page.viewportSize = {
    width: 1000,
    height: 800
};

var site = args[1];

page.open(site, function() {
  page.render('screenshot.png');
  phantom.exit();
}); 
