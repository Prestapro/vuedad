const browserify = require('browserify');
const babelify = require('babelify');

browserify({ 
  // Your Browserify configuration goes here
})
.transform(babelify.configure({
  presets: ["@babel/preset-env"]
}))
.bundle()
// Further processing, such as piping output to a file

