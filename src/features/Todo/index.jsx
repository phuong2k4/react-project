import React from 'react';
import PropTypes from 'prop-types';
import Products from './components/Products';

TodoFeatures.propTypes = {
    
};

function TodoFeatures(props) {
    const todoList = [
        {
            id: 1,
            product: 'pencil',
            price: 2.99
        },
        {
            id: 2,
            product: 'iphone',
            price: 959
        },
        {
            id: 3,
            product: 'laptop',
            price: 1299
        }
    ]
    return (
        <div>
            <h3>Product List: </h3>
            <Products todoList={todoList}/>
        </div>
    );
}

export default TodoFeatures;