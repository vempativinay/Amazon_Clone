
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { products } from "../utils/sampleProducts";
import ProductCard from "../components/Products";
import PriceLabel from "../components/PriceLabel";

const Shop = () => {
  const location = useLocation();
  const [shopProduct, setShopProduct] = useState("All");
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filter = queryParams.get("filter") || "All";
    setShopProduct(filter);

    const matchedCategory = products.find((p) => p.tag === filter);
    if (matchedCategory) {
      setSubcategories(matchedCategory.subcategories);
    } else {
      
      const allCategory = products.find((p) => p.tag === "All"||"no product");
      setSubcategories(allCategory?.subcategories || <h3> avilable product</h3>);
    }
  }, [location.search]);

  return (
    <div className="p-4">
      <h3 className="text-center mb-4">{shopProduct}</h3>
      <Row>
        <Col md={4}>
        <PriceLabel/>
        </Col>
        <Col md={8}>
        <Row>
        {subcategories.map((item, idx) => (
          <Col key={idx} xs={12} md={4} lg={3} className="mb-4">
            <ProductCard item={item} />
          </Col>
        ))}
        </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Shop;
