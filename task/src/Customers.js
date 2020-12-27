let data={
   lekshmi:{username:"lekshmi",address:"xxxx",email:"xxxx",password:"lekshmi",phone:7736745599,landmark:"xxxx",state:"xxxx",country:"xxxx"}
    

}
    let newData = localStorage.getItem('data');
    if (newData) {
      data = JSON.parse(newData);
      
    } 
      class Customers{
   
      static currentUser="";
      static getUser(){
         return data;
      }
      static saveData(){
        localStorage.setItem("data",JSON.stringify(data));
      } 
        
      
      static getAccountDetails(){
        return data;
      }
      static setcurrentUser(email){
        localStorage.setItem("currentUser",email);
        
      }
      static getcurrentUser(){
       return localStorage.getItem("currentUser");
        
      }
      
     static addUser(username,address,email,password,phone,landmark,state,country){
      data[username]={username,address,email,password,phone,landmark,state,country};
      Customers.saveData();
     }
    static deleteUser(username){
       delete data[username];
     }
    
     

}
export default Customers;