const DB = require("./DB")

class Employee extends DB {
    getAll(cb){
        let q = `SELECT 
            e.id,
            e.first_name,
            e.last_name,
            d.depname AS department
            FROM employee_role r 
            LEFT JOIN department d 
            ON r.department_id = d.id`
        this.connection.query(q, cb)
    }
}

module.exports = new Employee()