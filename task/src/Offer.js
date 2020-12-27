import React from 'react'
import './Offer.css';
import Carousel from 'react-bootstrap/Carousel' ;
class Offer extends React.Component{
    render(){
        return(
     <div className='container-fluid' >  
             <h2 id="one">New Year Special Offers</h2>
            <Carousel>  
           <Carousel.Item style={{'height':"500px"}} >  
           <img style={{'height':"300px"}}  
           className="d-block w-100"  
           src={'assets/img/img1.jpg'}  />  
       <Carousel.Caption>  
           <h3>First Demo </h3>  
    </Carousel.Caption>  
   </Carousel.Item  >  
   <Carousel.Item style={{'height':"500px"}}>  
       <img style={{'height':"300px"}}  
       className="d-block w-100"  
        src={'assets/img/img4.jpg'}    />  
       <Carousel.Caption>  
    <h3>Second Demo</h3>  
    </Carousel.Caption>  
      </Carousel.Item> 
      <Carousel.Item style={{'height':"500px"}}>  
       <img style={{'height':"300px"}}  
       className="d-block w-100"  
        src={'assets/img/img5.jpg'}    />  
       <Carousel.Caption>  
    <h3>Third Demo</h3>  
    </Carousel.Caption>  
      </Carousel.Item> 
      <Carousel.Item style={{'height':"500px"}}>  
       <img style={{'height':"300px"}}  
       className="d-block w-100"  
        src={'assets/img/img6.jpg'}    />  
       <Carousel.Caption>  
    <h3>Fourth Demo</h3>  
    </Carousel.Caption>  
    </Carousel.Item>   
</Carousel> <br/>
<input type="text" id="dis" value="Discount up to 25%"/>
</div>
        );
    }
}
export default Offer; 