var take_screenshot = function(url) {

    var system = require('system');
    var args = system.args;

    var page = require('webpage').create();
    page.viewportSize = {
            width: 1000,
                height: 800
    };

    var site = "http://www.github.com";

    page.open(site, function() {
          page.render('githu3b.png');
            phantom.exit();
    }); 

};
