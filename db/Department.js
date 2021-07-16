const DB = require("./DB")

class Department extends DB {
    getAll(cb){
        let q = `SELECT 
            e.id,
            e.department
            FROM employee_role r 
            LEFT JOIN department d 
            ON r.department_id = d.id`
        this.connection.query(q, cb)
    }
}

module.exports = new Department()