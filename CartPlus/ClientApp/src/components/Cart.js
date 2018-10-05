import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/ProductsStore';
import { LinkContainer } from 'react-router-bootstrap';

import {
    PageHeader,
    Table,
    ButtonToolbar,
    Button,
    Glyphicon,
    Grid,
    Row,
    Col,
    Alert
} from 'react-bootstrap';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { showErrorAlert: false, showSuccessAlert: false };
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.showErrorAlert) {
            this.setState({ showErrorAlert: true });
        }
        else {
            this.setState({ showErrorAlert: false });
        }

        if (nextProps.showSuccessAlert) {
            this.setState({ showSuccessAlert: true });

            window.setTimeout(() =>
                this.setState({ showSuccessAlert: false }),
                1500);
        }
    }


    render() {
        let alert;
        if (this.state.showSuccessAlert) {
            alert = <Alert bsStyle="success"><strong>Your order</strong> was successfully submitted</Alert>
        }
        else if (this.state.showErrorAlert) {
            alert = <Alert bsStyle="danger"><strong>Failed</strong> to submit your order. Try again or contact us</Alert>
        }

        return (
            <div>
                <PageHeader>
                    Shopping Cart
                </PageHeader>
                {alert}
                <Grid>
                    <Row>
                        <Col sm={10}>
                            <Table responsive condensed striped>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Product Item</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.cartItems.map((cartItem) =>
                                            <tr key={cartItem.id}>
                                                <td>
                                                    <Button bsStyle="link" onClick={() => this.props.removeCartItem(cartItem.id)}>
                                                        <Glyphicon glyph="remove" />
                                                    </Button>
                                                </td>
                                                <td style={{ verticalAlign: 'middle' }}>{cartItem.name}</td>
                                                <td style={{ verticalAlign: 'middle' }}>{cartItem.qty}</td>
                                                <td style={{ verticalAlign: 'middle' }}>{cartItem.lineTotal}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="2"></td>
                                        <td align="right"><h4>Subtotal:</h4></td>
                                        <td><h4>${this.props.cartTotals.subTotal}</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"></td>
                                        <td align="right"><h4>Tax (5%):</h4></td>
                                        <td><h4>${this.props.cartTotals.tax}</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"></td>
                                        <td align="right"><h4>Total:</h4></td>
                                        <td><h4>${this.props.cartTotals.total}</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"></td>
                                        <td>{this.props.isLoading ? <span>Loading...</span> : []}</td>
                                        <td>
                                            <ButtonToolbar>
                                                <Button bsStyle="primary" onClick={() => this.props.submitCart()}>Check Out</Button>
                                                <LinkContainer to={'/'}>
                                                    <Button> Shop More</Button>
                                                </LinkContainer>
                                            </ButtonToolbar>
                                        </td>
                                    </tr>
                                </tfoot>
                            </Table>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default connect(
  state => state.catalog,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Cart);
