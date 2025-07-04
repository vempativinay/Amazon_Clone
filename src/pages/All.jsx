import React, { useState } from 'react';
import PriceLabel from '../components/PriceLabel';
import ProductCard from '../components/Products';
import { products } from "../utils/sampleProducts";
import {  Col, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const All = () => {
  const categories = products.map(p => p.name); // Get category names from data
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const productList = products.find(p => p.name === selectedCategory)?.subcategories || [];

  

  return (
    <div className="m-4">
      <h3>Points</h3>
      <Row>
        <Col md={4}>
          <PriceLabel />
          {categories.map((category, index) => (
            <Form.Check
            key={index}
            type="radio"
            name="category"
            id={`radio-${index}`}
            label={category}
            checked={selectedCategory === category}
            onChange={() => handleClick(category)}
            className="mb-2"
          />
          ))}
        </Col>

        <Col md={8}>
          <Row>
            {productList.map((item, idx) => (
              <Col key={idx} xl={3} md={4} sm={6} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default All;
