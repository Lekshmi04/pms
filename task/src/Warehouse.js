import React from 'react'
class Warehouse extends React.Component{
    render(){
        return(
            <div className="Container">
            <div className="jumbotron">
                <h3>WAREHOUSES</h3>
                <table className="table">
                    <thead>
                        
                   <tr>
                       <th>W.NO</th>
                       <th>NAME</th>
                       <th>PLACE</th>
                       
                   </tr>
                    </thead>
                    <tbody >
                       <tr>
                           <th>W.1</th>
                           <th>XXXX</th>
                           <th>KUNDANOOR</th>
                       </tr>
                       <tr>
                           <th>W.2</th>
                           <th>YYYY</th>
                           <th>ALUVA</th>
                       </tr>
                       <tr>
                           <th>W.3</th>
                           <th>ZZZZ</th>
                           <th>AROOR</th>
                       </tr>
                    </tbody>
                </table>
            </div>
           </div>
        );
        }
        
    }

export default Warehouse; 