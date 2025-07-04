import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/Products";
import { products } from "../utils/sampleProducts";

const categories = [
  { title: "Drinkware", color: "#814c2b" },
  { title: "Gadgets", color: "#3b250f" },
  { title: "Apparels", color: "#44515e" },
];

const HomePage = () => {
  const bestsellers = products.find((product)=>product.name ==="Best Seller")?.subcategories|| []

  return (
    <>
      <Container className="my-5">
        <Row>
          {categories.map((cat, idx) => (
            <Col key={idx} md={4} className="mb-4">
              <div
                className="text-white text-center p-5 rounded"
                style={{ backgroundColor: cat.color }}
              >
                <h4>{cat.title}</h4>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="mb-5">
        <h4 className="mb-3 fw-bold text-center">BEST SELLERS</h4>
        <Row className="g-3">
          {bestsellers.map((item, idx) => (
            <Col key={idx} xs={6} md={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
