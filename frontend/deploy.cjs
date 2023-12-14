const ncp = require('ncp').ncp;
const path = require('path');

// Source directory (build directory)
const sourceDir = path.join(__dirname, 'build');

// Destination directory (temporary directory)
const destDir = path.join(__dirname, 'deploy_temp');

ncp(sourceDir, destDir, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Build files copied to deploy_temp');
});
