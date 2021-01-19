import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productsAction';
import { Container, Row } from 'reactstrap';
import CardProduct from '../components/cardProduct';

const ProductPage = (props) => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => {
        return {
            products: state.ProductsReducer.products
        }
    })

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const renderProduct = () => {
        return products.map((item, index) => {
            return (
                <CardProduct key={index}>{item}</CardProduct>
            )
        })
    }

    return (
        <Container>
            <Row>
                {renderProduct()}
            </Row>
        </Container>
    )
}

export default ProductPage;