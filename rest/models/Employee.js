var db=require('../db');

var Employee={

getAllEmployees:function(callback){
return db.query("select * from employee",callback);
},

getEmployeeById:function(id,callback){
    return db.query("select * from employee where Id=?",[id],callback);
},

addEmployee:function(Employee,callback){
return db.query("insert into employee(title,name) values(?,?)",[Employee.Title,Employee.Name],callback);
},
deleteEmployee:function(id,callback){
    return db.query("delete from employee where Id=?",[id],callback);
},
updateEmployee:function(id,Employee,callback){
  console.log(Employee.Title);
  console.log(Employee.Name);
    return  db.query("update employee set Title=?,Name=? where Id=?",[Employee.Title,Employee.Name,id],callback);
},
deleteAll:function(item,callback){
   return db.query("delete from employee",callback);
}
};
module.exports=Employee;
