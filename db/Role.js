const DB = require("./DB")

class Employee_Role extends DB {
    getAll(cb){
        let q = `SELECT 
            r.id,
            r.title,
            r.salary,
            d.depname AS department
            FROM employee_role r 
            LEFT JOIN department d 
            ON r.department_id = d.id`
        this.connection.query(q, cb)
    }
}

module.exports = new Employee_Role()