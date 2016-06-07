var Datastore = require("nedb");
var instance;

var collection = function(name) {
    if (!instance) {
        instance = new Datastore({
            filename: "./server/database/picsys/" + name + ".db", 
            autoload: true 
        });

        console.log("Collection Open At %s", instance.filename);
    }
    
    return instance;
};

module.exports = collection;