import React from 'react'
import {Link} from 'react-router-dom';
import $ from 'jquery';
import Mobile from './Mobile';
import Laptop from './Laptop';
import Households from './Households';
class Products extends React.Component{
    render(){
        return(
           <div className="Container">
            <div className="jumbotron">
                <table className="table">
                    <thead>
                        <tr><th> <input id="myInput" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /></th>
                        
                        </tr>
                   <tr>
                       <th>Items</th>
                       <th>Brands</th>
                   </tr>
                    </thead>
                    <tbody id="myTable">
                       <tr>
                           <th><Link to="/mobile">Mobile</Link></th>
                           <th>Oppo F11</th>
                           
                       </tr>
                       <tr>
                           <th><Link to="/laptop">Laptop</Link></th>
                           <th>lenovo</th>
                           
                       </tr>
                       <tr>
                           <th><Link to="/households">Households</Link></th>
                           <th>Whirlpool</th>
                          
                       </tr>
                    </tbody>
                </table>
            </div>
           </div>
        );
        }

componentDidMount() {
    $(document).ready(function () {
        $("#myInput").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $("#myTable tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
}
}

export default Products; 