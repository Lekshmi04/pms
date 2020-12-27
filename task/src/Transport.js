import React from 'react'
import Warehouse from './Warehouse';
import './Transport.css';
class Transport extends React.Component{
    render(){
        return(
            <div className="Container2">
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label className="form-check-label" for="inlineRadio1"><strong>SELLER(PACKING)</strong></label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label className="form-check-label" for="inlineRadio2"><strong>W.NO</strong></label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
            <label className="form-check-label" for="inlineRadio3"><strong>SHIPPING</strong></label>
          </div> 
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
            <label className="form-check-label" for="inlineRadio3"><strong>W.NO</strong></label>
          </div> 
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
            <label className="form-check-label" for="inlineRadio3"><strong>CUSTOMER(LANDMARK)</strong></label>
          </div> 
         
          </div> 
        );
    }
}
export default Transport; 