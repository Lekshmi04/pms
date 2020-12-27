import React from 'react'
import {withRouter} from 'react-router';
import Customers from './Customers';
class SignUp  extends React.Component{
  state={
    username:"",
    email:"",
    address:"",
    phone:"",
    password:"",
    landmark:"",
    state:"",
    country:""
  }
 
  onUsernameChange=(event)=>{
    this.setState({username:event.target.value});
  }
  onEmailChange=(event)=>{
    this.setState({email:event.target.value});
  }
  onPasswordChange=(event)=>{
   this.setState({password:event.target.value});
  } 
  onAddressChange=(event)=>{
    this.setState({address:event.target.value});
   }
   onLandmarkChange=(event)=>{
    this.setState({landmark:event.target.value});
   }  
   onStateChange=(event)=>{
    this.setState({state:event.target.value});
   }  
   onCountryChange=(event)=>{
    this.setState({country:event.target.value});
   }   
   onNumberChange=(event)=>{
    this.setState({number:event.target.value});
   }   
   onSubmit=(event)=>{ 
    event.preventDefault();
    let uname=this.state.username;
   let pwd=this.state.password;
  let data=Customers.getAccountDetails();
 if(uname in data){
    alert("Registeration failed!"); 
 }
 else {
     Customers.addUser();
    alert("Registeration success!");
   this.props.history.push("/login");
   }
   }

    render(){
        return(
            <div className="Container">
            
            <div className="row">
             <div className="col-4" ></div>
<div className='col-4'> 
<div className="jumbotron" >
    <form>
     <div className="form-group">
       <label for="exampleInputUsername1" >Username</label>
       <input  type="text" className="form-control" id="uname" aria-describedby="emailHelp" />
       
     </div>
     <div className="form-group">
       <label for="exampleInputPassword1" >Address</label>
       <input type="text" className="form-control" id="addr" />
     </div>
     <div className="form-group">
       <label for="exampleInputemail" >Email</label>
       <input type="email" className="form-control" id="email" />
     </div>
     <div className="form-group">
       <label for="exampleInputPassword1" >Password</label>
       <input type="password" className="form-control" id="pwd" />
     </div>
     <div className="form-group">
       <label for="exampleInputPassword1" >Phone Number</label>
       <input type="number" className="form-control" id="phnum" />
     </div>
     <div className="form-group">
       <label for="exampleInputPassword1" >Landmark</label>
       <input type="text" className="form-control" id="landmark" />
     </div>
     
     <div className="form-group">
       <label for="exampleInputPassword1" >State</label>
       <input type="text" className="form-control" id="state" />
     </div>
     <div className="form-group">
       <label for="exampleInputPassword1" >Country</label>
       <input type="text" className="form-control" id="country" />
     </div>
     
     <button type="submit" className="btn btn-primary"  >SignUp</button><br/>
     
     </form>
   </div>
   
   <div className="col-4"></div>
  </div> 
</div>
</div>
        );
    }
}
export default withRouter(SignUp); 