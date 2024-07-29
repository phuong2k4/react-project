import React from 'react';
import PropTypes from 'prop-types';

Products.propTypes = {
    todoList: PropTypes.array,
};

// Products.defaultProps = {
//     todoList: [],
// };

function Products({todoList}) {
    return (
        <div>
            <ol>
                {todoList.map(todo=>(
                    <li key={todo.id}>Product: {todo.product} / Price: {todo.price}$</li>
                ))}
            </ol>
        </div>
    );
}

export default Products;