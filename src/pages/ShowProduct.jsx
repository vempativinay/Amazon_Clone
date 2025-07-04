import { Button, Card } from "react-bootstrap";
import { useProduct } from "../Context/ProductContext";
import { useLocation, useNavigate } from "react-router-dom";



export function ShowProduct() {

  const { cart, setCart } = useProduct();
  let navigate = useNavigate()
  const location = useLocation()
  const item = location.state;

 

  // console.log(item, "items");

  // console.log(cart, "cart ");


  const addTocart = (item) => {
    navigate(`/cart/${item.tittle}`)
    setCart([...cart, item])

  };



  return (
    <div className="p-4">
      <h2>Product Details</h2>
      <Card className="shadow-sm" style={{ maxWidth: "400px" }}>
        <Card.Img variant="top" src={item.img} style={{ height: "200px", objectFit: "cover" }} />
        <Card.Body>
          {item.tag && <div className="badge bg-danger mb-2">{item.tag}</div>}
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.points}</Card.Text>
          <Card.Text>{item.points}</Card.Text>
          <Button onClick={() => addTocart(item)}>Add to Cart</Button> 
        </Card.Body>
      </Card>
    </div>
  );
}
