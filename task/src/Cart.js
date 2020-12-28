import React from 'react'
class Cart extends React.Component{
    render(){
       
        return(
            <div className="Container">
            <div className="jumbotron">
                <table className="table">
                    <thead>
                         <tr>
                       <th>Email</th>
                       <th>Products ordered</th>
                       <th>Qty</th>
                   </tr>
                    </thead>
                    <tbody id="myTable">
                       <tr>
                           <th>xxxx@gmail.com</th>
                           <th>Oppo F11</th>
                           <th>1</th>
                           <th><button type="submit" className="btn btn-danger">Cancel</button><br/></th>
                           
                       </tr>
                       <tr>
                           <th></th>
                           <th></th>
                           
                       </tr>
                       <tr>
                           <th></th>
                           <th></th>
                          
                       </tr>
                    </tbody>
                </table>
            </div>
           </div>
        );
    
    }
}
export default Cart; 