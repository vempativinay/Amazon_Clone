import React from 'react'
import { Col,Row,Container } from 'react-bootstrap';

 const Footer = () => {
  return (
    <div>
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={3}>
            <h6>PRODUCTS</h6>
            <p>Apparels</p>
            <p>Drinkware</p>
            <p>Tech Gadgets</p>
          </Col>
          <Col md={3}>
            <h6>ORDERS</h6>
            <p>Shipping</p>
            <p>Returns</p>
            <p>Track</p>
          </Col>
          <Col md={3}>
            <h6>COMPANY</h6>
            <p>About</p>
            <p>Terms</p>
            <p>Privacy</p>
          </Col>
          <Col md={3}>
            <h6>SUPPORT</h6>
            <p>Contact</p>
            <p>FAQ</p>
          </Col>
        </Row>
        <hr />
        <p className="text-center mb-0">© 2025 Uber Rewards. All Rights Reserved.</p>
      </Container>
    </footer>
    </div>
  )
}
export default Footer