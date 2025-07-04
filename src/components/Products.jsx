import { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";




const ProductCard = ({ item }) => {
  const [buttonclick, setButtonclick] = useState(false)
  const { cart, setCart, filteredCart } = useProduct()
  const navivage = useNavigate()
  const handleclick = () => {
    navivage(`/Showproducts/${item?.title}`, { state: item })
  }
  const addTocart = (item) => {
    setCart([...cart, item])
   
    
  }
  
  // console.log("items",item);
  const removevCart = (product) => {
    const array = cart
    let index = array?.findIndex((item) => item?.id== product?.id)
    array.splice(index, 1)
    setCart([...array])
  }

  // console.log("itms");
  

  return (
    <>
      {

        <Card className="h-100 shadow-sm">

          <Card.Img variant="top" src={item.img} style={{ height: "160px", objectFit: "cover" }} />
          <Card.Body>
            {item.tag && (
              <div className="badge bg-danger mb-2">{item.tag}</div>
            )}
            <Card.Title className="fs-6">{item?.title}</Card.Title>
            <Card.Text >
              {item?.points}
            </Card.Text>
            <Card.Text>{item?.price?.toLocaleString("en-IN", { style: "currency", currency: "INR" })}</Card.Text>

            <div className="d-flex gap-1 ">
              <Button className="btn btn-white" onClick={() => { handleclick(item) }}>view</Button>
              <div>
                {
                  !buttonclick ? (<Button onClick={() => { setButtonclick(true); addTocart(item) }} >AddTocart</Button>)
                    : (<div>
                      <Button onClick={() => { removevCart(item) }}>-</Button><span>{filteredCart[item?.id]?.quantity}</span><Button onClick={() => { addTocart(item) }}>+</Button>
                    </div>)
                }

              </div>
            </div>

          </Card.Body>
        </Card>
      }
    </>

  );
}

export default ProductCard;