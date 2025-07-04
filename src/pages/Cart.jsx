import React, { useState } from 'react'
import { useProduct } from '../Context/ProductContext';
import { Button, Card } from 'react-bootstrap';

const Cart = () => {
    const { cart, setCart,filteredCart } = useProduct();





    const removeFromCart = (product) => {
       let array = cart  
       let Index = array.findIndex(item=>item.id==product.id)
       array.splice(Index, 1)
       setCart([...array])
    };  


    const addTocart = (item) => {
        setCart([...cart, item])
    };


    const uniqueItems = Object.values(filteredCart);
    //   console.log("uniquwjdb",uniqueItems)
       let TotalPrice =0;
       uniqueItems.forEach(item=>{
        return TotalPrice += item.price*(item.quantity)
       })

    return (
        <div className="p-4">
            {uniqueItems?.length ? uniqueItems?.map((item) => (
                <Card className="shadow-sm" style={{ maxWidth: "400px" }}>
                    <Card.Img variant="top" src={item.img} style={{ height: "200px", objectFit: "cover" }} />
                    <Card.Body>
                        {item.tag && <div className="badge bg-danger mb-2">{item.tag}</div>}
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.price.toLocaleString('en-IN',{style:"currency",currency:'INR'})}</Card.Text>
                        <Button onClick={() => removeFromCart(item)}>-</Button>
                        <span>{item.quantity}</span>
                        <Button onClick={() => addTocart(item)}>+</Button>
                    </Card.Body>
                </Card>
            )) : <h1>No Cart Item to Show</h1>
             }
             <div>
                <Card style={{maxWidth:"400px"}}>
                    <h5 className='d-flex justify-content-end'>TotalPrice({cart.length}):{TotalPrice.toLocaleString('en-IN',{style :"currency",currency:"INR"})}</h5>
                </Card>
             </div>
        </div>
        
    )
}

export default Cart; 