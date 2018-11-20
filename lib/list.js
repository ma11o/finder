var fs = require('fs');

exports.list = function () {

    try {
        var list = fs.readdirSync('.');

        for (var i = 0; i < list.length; i++) {
            if (isDir(list[i])) {
                console.log("📁 " + list[i] + "/");
            } else {
                console.log("📝 " + list[i]);
            }
        }
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }

}

var isDir = function(filepath) {  
    return fs.existsSync(filepath) && fs.statSync(filepath).isDirectory();
  };