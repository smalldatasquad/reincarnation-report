/*'use strict'

const _         = require('lodash')
const vow       = require('vow')
const debug     = require('debug')
const webshot     = require('webshot')
const fs = require('fs');



const dbg = {
      fn:     debug('hexo-screenshot:fn'),
        config: debug('hexo-screenshot:config')
}


var url_to_png = function(url) {
    var cleanurl = url.replace(/(\?|#|&|\+|:|\/|-|=|\.)+/g, '_');
    var dir = "/source/images/"
    return dir + cleanurl + ".png";
}

hexo.extend.helper.register("url_to_png", function (url) {
    return url_to_png(url)
})


var take_screenshot = function(url) {


    var filepath = url_to_png(url);

    console.log("taking screenshot ... " + filepath);

    webshot(url, filepath, function(err) {
          // screenshot now saved to google.png
          return filepath
    });

    return filepath

};
// profiles
let options = _.extend(
  {
    // default profile
    profiles: {
      default_screenshot: {
        size: [ 1000, 800 ]
      }
    }
  },
  hexo.config.screenshot
)

hexo.extend.filter.register('before_post_render', function(data) {
      data['default_screenshot'] = "testytest"
      return data
})

hexo.extend.filter.register('before_generate', function() {
  // some naughty direct database access
  let posts = hexo.model('Post').toArray()
  return vow.all(_.map(posts, function(post) {
    if (!post.factoids || !post.factoids.length) {
      return
    }

	return vow.all(_.map(post.factoids, function(factoid) {
	
		return vow.all(_.map(options.profiles, function(profile, profileName) {
            post[profileName] = "yoyuo"
			console.log ("===========");
			console.log (factoid.text);
			console.log (factoid.url);
            if(! fs.existsSync(url_to_png(factoid.url))) {
                var screenshot_path = take_screenshot (factoid.url);
                console.log("TAKING SCREENSHOT OF " + factoid.url);
            }
			console.log (profileName);
		}))

	}))

  }))

})
*/
