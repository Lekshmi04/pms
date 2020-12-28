import React from 'react'
import Products from './Products';
import Carousel from 'react-bootstrap/Carousel' 
import {Link} from 'react-router-dom' ;
import {withRouter}  from 'react-router';
class Mobile extends React.Component{
    render(){
        return( 
           <div className='container-fluid' >  
             <Carousel>  
            <Carousel.Item style={{'height':"500px"}} >  
            <img style={{'height':"500px"}}  
            className="d-block w-100"  
            src={'assets/img/img1.jpg'}  />  
        <Carousel.Caption>  
            <h3>First Demo </h3>  
     </Carousel.Caption>  
    </Carousel.Item  >  
    <Carousel.Item style={{'height':"500px"}}>  
        <img style={{'height':"300px"}}  
        className="d-block w-100"  
         src={'assets/img/img3.jpg'}    />  
        <Carousel.Caption>  
     <h3>Second Demo</h3>  
     </Carousel.Caption>  
       </Carousel.Item>    
</Carousel> <br/>
<h4>OPPO F11 PRO SUMMARY</h4>
<p>

Oppo F11 Pro is among the few smartphones to sport a pop-up selfie camera. The Oppo F11 Pro sports a big 6.5-inch display and claims a 90.9 percent screen-to-body ratio. The F11 Pro has very thin bezels around the smartphone. The phone is slightly bulky at 191g and is heavier than average. It packs in  a 4,000mAh battery and has support for 20W fast charging.The Oppo F11 Pro is powered by a MediaTek Helio P70 SoC and comes with 6GB of RAM and 64GB of storage. It runs ColorOS 6 running on top of Android 9 Pie. The UI is minimalistic and is easy to use, however, it comes with a fair amount of bloatware preinstalled on the device. There is face unlock which causes the pop-up camera to rise up for an unlock. The phone offers good battery life and lasted over a day with our use.It has a dual-camera setup at the back with a 48-megapixel primary camera and a 5-megapixel depth sensor. The camera app is feature packed and the device manages to click good shots in different lighting conditions. It captures good photos in daylight and the AI is capable of detecting what the phone is pointed towards. Low-light shots didn’t have a lot of noise and the output wasn’t grainy. We found Nightscape mode to produce better photos in low-light.
</p><br/>
<label for ="pri" rows="1" colums="1"><strong>Price:-INR 16999</strong></label>
No EMI Avaliable<br/>
 
<label for=""><strong>Color:-</strong></label>
<label for ="pb">purple blue</label> 
<input type="radio" name="color"id="" />   
  <label for ="mb">metallic black</label> 
  <input type="radio" name="color"id="" />
  <label for ="pb">arora green</label>       
<input type="radio" name="color"id="" /><br/>
<button type="submit" className="btn btn-primary">Add to cart</button><br/>

<label for=""><strong>Payment:-</strong></label>
<label for ="on">online payment</label> 
<input type="radio" name="payment"id="" />   
  <label for ="cas">cash on delivery</label> 
  <input type="radio" name="payment"id="" /><br/>
<label for ="revi" rows="5" colums="5"><strong>Reviews</strong></label>
<textarea id="revi"></textarea>
 
    </div>  
);
    }
}
export default withRouter(Mobile);