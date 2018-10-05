import React from 'react';
import {
    Well,
    ButtonGroup,
    Button,
    Glyphicon
} from 'react-bootstrap';

export default props => (
    <Well>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <h4 style={{ textAlign: 'right' }}>${props.price}</h4>
        <ButtonGroup>
            <Button><Glyphicon glyph="heart" /></Button>
            <Button onClick={props.onAddToCart}><Glyphicon glyph="shopping-cart" /></Button>
        </ButtonGroup>
    </Well>
);
