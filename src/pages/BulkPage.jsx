import React from 'react'
import { products } from '../utils/sampleProducts';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../components/Products';

const BulkPage = () => {

    return (
        <div>
            <Row >
                {
                    products.map((cat, idx) => (
                        cat?.subcategories?.map((sub) => (
                            <Col key={idx} >
                                <ProductCard item={sub} />
                            </Col>
                        ))
                    ))
                }
            </Row>
        </div>
    )
}

export default BulkPage;
