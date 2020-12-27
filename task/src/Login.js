import React from 'react'
import {Link}  from 'react-router-dom';
import {withRouter} from 'react-router';
import Customers from './Customers';
class Login extends React.Component{
  state={
    email:"",
    password:""
  }
  onEmailChange=(event)=>{
    this.setState({email:event.target.value});
  }
  onPasswordChange=(event)=>{
    this.setState({password:event.target.value});
  }
  onLogin=(event)=>{
    event.preventDefault();
    let email=this.state.email;
    let pwd=this.state.password;
    let data=Customers.getAccountDetails();
    if(email in data){
      let password=data[email]["password"];
      if(pwd===password){
        Customers.setcurrentUser(email);
        alert("Login successful");
        this.props.history.push("./products");
      }
      else{
        alert("Login failed");
      }
    }
    else{
      alert("Invalid User");
    }
  }
    render(){
        return(
          
            <div className="Container">
               <div className="row">
               <div className="col-4" ></div>
 <div className='col-4'> 
 <div className="jumbotron" >
      <form onSubmit={this.onLogin}>
       <div className="form-group">
         <label for="exampleInputEmail" >Email</label>
         <input value={this.state.email} onChange={this.onEmailChange} type="text" className="form-control" id="email" aria-describedby="emailHelp" />
         
       </div>
       <div className="form-group">
         <label for="exampleInputPassword1" >Password</label>
         <input value={this.state.password} onChange={this.onPasswordChange}  type="password" className="form-control" id="pwd" />
       </div>
       
       <button type="submit" className="btn btn-primary">Login</button><br/>
       <Link to ='/signup'>New to Shoppymart?SignUp</Link>
       </form>
     </div>
     
     <div className="col-4"></div>
    </div> 
</div>
</div>
        );
    }
}
export default withRouter(Login); 