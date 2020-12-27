import React from 'react'
import BellIcon from 'react-bell-icon';
class Navbar extends React.Component{
    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><em>SHOPPYMART</em></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="offer">Offer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">About</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link" href="login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="signup">SignUp</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="warehouse">Warehouse</a>
              </li>
 
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="products">Mobiles</a></li>
                  <li><a className="dropdown-item" href="products">Laptops</a></li>
                  
                  <li><a className="dropdown-item" href="products">Shoes</a></li>
                </ul>
              </li>
              
            
              <li className="nav-item">
                <a className="nav-link" href="Cart">Cart</a>
              </li>
              <BellIcon width='35' color='white' active={true} />
              <li className="nav-item">
                <a className="nav-link" href="transport">Transport</a>
              </li>
            </ul>
            
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul>
            <button type="button" class="btn btn-dark">Logout</button>
            </ul>
          </div>
        </div>
      </nav>);
    }
}
export default Navbar;