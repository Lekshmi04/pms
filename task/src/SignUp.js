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
    pincode:"",
    state:"",
    country:""
  }
  onPincodeChange=(event)=>{
    this.setState({pincode:event.target.value});
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
   onSignUp=(event)=>{ 
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
    <form onSubmit={this.onSignUp}>
     <div className="form-group">
       <label for="exampleInputUsername1" >Username</label>
       <input value={this.state.username} onChange={this.onUsernameChange} type="text" className="form-control" id="uname" aria-describedby="emailHelp" />
       
     </div>
     <div className="form-group">
       <label for="exampleInputPassword1" >Address</label>
       <input value={this.state.address} onChange={this.onAddressChange} type="text" className="form-control" id="addr" />
     </div>
     <div className="form-group">
       <label for="exampleInputemail" >Email</label>
       <input value={this.state.email} onChange={this.onEmailChange}  type="email" className="form-control" id="email" />
     </div>
     <div className="form-group">
       <label for="exampleInputPassword1" >Password</label>
       <input value={this.state.password} onChange={this.onPasswordChange} type="password" className="form-control" id="pwd" />
     </div>
     <div className="form-group">
       <label for="exampleInputPassword1" >Phone Number</label>
       <input value={this.state.number} onChange={this.onNumberChange} type="number" className="form-control" id="phnum" />
     </div>
     <div className="form-group">
       <label for="exampleInputPassword1" >Landmark</label>
       <input value={this.state.landmark} onChange={this.onLandmarkChange} type="text" className="form-control" id="landmark" />
     </div>
     <div className="form-group">
       <label for="exampleInputPassword1" >Pincode</label>
       <input value={this.state.pincode} onChange={this.onPincodeChange} type="number" className="form-control" id="pincode" />
     </div>
     <div className="form-group">
       <label for="exampleInputPassword1" >State</label>
       <input value={this.state.state} onChange={this.onStateChange} type="text" className="form-control" id="state" />
     </div>
     <div className="form-group">
       <label for="exampleInputPassword1" >Country</label>
       <input value={this.state.country} onChange={this.onCountryChange} type="text" className="form-control" id="country" />
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