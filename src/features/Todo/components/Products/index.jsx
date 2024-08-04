import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './style.scss'

Products.propTypes = {
    prod: PropTypes.array.isRequired,
    onProdClick: PropTypes.func.isRequired
};

function Products({prod , onProdClick}) {
    const prodclick = (todo,ind)=>{
        if(!onProdClick){
            return;
        }
        onProdClick(todo,ind);
        console.log(onProdClick)
    }
    return (
        <div>
            <ol className='product-list'>
                {prod.map((todo,ind)=>(
                    <li 
                    key={todo.id}
                    className={classnames({
                        'product-item': true,
                        remaining: todo.remaining==='sold out'
                    })}
                    onClick={() => prodclick(todo,ind)}
                    >
                    Product: {todo.product} / Price: ${todo.price} / Remaining: {todo.remaining}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Products;