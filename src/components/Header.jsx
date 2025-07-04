import React, { useState } from 'react';
import { Badge, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Cart} from 'react-bootstrap-icons';
import { useProduct } from '../Context/ProductContext';


const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  
 const {cart, setCart} =useProduct()
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="px-4" expand="sm">
        <Navbar.Brand as={Link} to="/">Uber Rewards</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/search">All</Nav.Link>

            
            <div
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              className="position-relative"
            >
              <NavDropdown
                title="SHOP"
                id="shop-dropdown"
                show={showDropdown}
                className="mega-dropdown"
                align="center"
              >
                <div className="dropdown-mega-content d-flex">
                  <div>
                    <h6>Accessories</h6>
                    <NavDropdown.Item as={Link} to="/all/category?filter=Computer Accessories">Computer Accessories</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/all/category?filter=Health & Personal Care">Health & Personal Care</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/all/category?filter=Stationery">Stationery</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/all/category?filter=Travel+">Travel+</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/all/category?filter=Watches & Perfumes">Watches & Perfumes</NavDropdown.Item>
                  </div>
                  <div >
                    <h6>Apparels</h6>
                    <NavDropdown.Item as={Link} to="/all/category?filter=Hoodies & Jackets">Hoodies & Jackets</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/all/category?filter=Shirts">Shirts</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/all/category?filter=Socks & Belt">Socks & Belt</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/all/category?filter=T-Shirts">T-Shirts</NavDropdown.Item>
                  </div>
                  <div>
                    <h6>Bags</h6>
                    <NavDropdown.Item as={Link} to="/all/category?filter=Laptop Bag & Sleeves">Laptop Bag & Sleeves</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/all/category?filter=Other Travel Bags">Other Travel Bags</NavDropdown.Item>
                  </div>
                  <div>
                    <h6>Drinkware</h6>
                    <NavDropdown.Item as={Link} to="/all/category?filter=Mugs">Mugs</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/all/category?filter=Sippers">Sippers</NavDropdown.Item>
                  </div>
                </div>
              </NavDropdown>
            </div>

            <Nav.Link as={Link} to="/name/bulk">Bulk Order</Nav.Link>
            <Nav.Link as={Link} to="/all/category?filter=Best Seller">Best Seller</Nav.Link>
            <Nav.Link as={Link} to="/all/category?filter=New Arrival">New Arrival</Nav.Link>
            <Nav.Link as={Link} to="/cart"className="p-2"><Cart size={24} /><Badge bg="secondary">{cart.length}</Badge></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
          
      <img
        src="https://admin.foxboxrewards.com/public/content/uploads/20240903/SF-banner.jpg"
        alt="Banner"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default Header;
