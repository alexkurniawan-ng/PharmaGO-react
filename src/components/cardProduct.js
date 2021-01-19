import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap';

const CardProduct = ({ children }) => {
    // const location = useLocation()

    return (
        <Col sm={6} md={3} style={{ margin: 'auto', justifyContent: 'center' }}>
            <Card className="shadow-sm mx-1 my-2" style={{ textAlign: 'center', letterSpacing: 1.5, display: 'inline-flex', flexWrap: 'nowrap', borderRadius: 10, overflow: 'auto' }} onCl>
                <CardImg top width='100%' src={children.product_image} alt={children.name} />
                <CardBody>
                    <CardTitle tag='h6'>{children.name}</CardTitle>
                    <CardSubtitle className="text-muted" style={{ fontSize: 13, fontStyle: 'italic', marginBottom: 5 }}>Per Kemasan</CardSubtitle>
                    <CardText style={{ fontWeight: 'bold' }}>Rp{children.price.toLocaleString()},-</CardText>
                    <Button color='success' className="btn-block" outline style={{ borderRadius: 20, letterSpacing: 2 }}>Beli</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CardProduct;