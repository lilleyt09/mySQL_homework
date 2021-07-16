const _connection = require("./connection")

class DB {
    connection = _connection

    getAll(cb) {
        this.connection.query("SELECT * FROM ??", [this.constructor.name], cb)
    }
}

module.exports = DB