import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/ProductsStore';
import ProductItem from './ProductItem';
import {
    PageHeader,
    Grid,
    Row,
    Col,
    Navbar,
    FormGroup,
    FormControl,
    Alert,
} from 'react-bootstrap';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { showSuccessAlert: false };
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.showSuccessAlert) {
            this.setState({ showSuccessAlert: true });

            window.setTimeout(() =>
                this.setState({ showSuccessAlert: false }),
                1500);
        }
    }

    handleSearch(e) {
        this.props.searchProducts(e.target.value);
    }

    render() {

        let alert;
        if (this.state.showSuccessAlert) {
            alert = <Alert bsStyle="success"><strong>Product added</strong> to your shopping cart</Alert>
        }

        return (
                <Grid fluid>
                    <Row>
                        <Col sm={9}>
                            <PageHeader>
                                Products <small>largest variety in town</small>
                                <Navbar.Form pullRight>
                                    <FormGroup bsSize="small">
                                        <FormControl
                                            type="text"
                                            placeholder="Search products"
                                            onChange={this.handleSearch}
                                        />
                                    </FormGroup>
                                </Navbar.Form>
                            </PageHeader>
                            {alert}
                        </Col>
                    </Row>
                    <Row>
                        {
                            this.props.productItems.map((productItem) =>
                                <Col sm={3} key={productItem.id}>
                                    <ProductItem
                                        productId={productItem.id}
                                        name={productItem.name}
                                        description={productItem.description}
                                        price={productItem.price}
                                        onAddToCart={() => this.props.addCartItem(productItem.id)}
                                    />
                                </Col>)
                        }
                    </Row>
                </Grid>
            );
    }

}

export default connect(
    state => state.catalog,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Products);
