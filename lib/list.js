var fs = require('fs');

exports.list = function (dir) {

    var dir = dir || '.';

    try {
        var list = fs.readdirSync(dir);
        var item = [];

        console.log("..");

        item.push({
            'name' : '..',
            'count' : -1
        });

        for (var i = 0; i < list.length; i++) {
            if (isDir(list[i])) {
                console.log(list[i] + "/");
            } else {
                console.log(list[i]);
            }

            item.push({
                'name' : list[i],
                'count' : i
            });
        }

        return item;
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }

}

var isDir = function(filepath) {  
    return fs.existsSync(filepath) && fs.statSync(filepath).isDirectory();
};