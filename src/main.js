var classes = require("./classes");
var OrientDB = require("./orientdb-js");

var orientdb = function(options, callback){
    try {
        if(typeof options === 'function'){
            callback = options;
            options = undefined;
        }
        var db = new OrientDB(options);
        connect = db.connect().then().nodeify(callback);
    } catch(error) {
        if(callback) return callback(error);
        console.error(error);
    }

    return connect;
};

module.exports = {
    "connect": orientdb,
    "T": classes.T,
    "Contains": classes.Contains,
    "Vertex": classes.Vertex,
    "Edge": classes.Edge
};
