import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './style.scss'

Products.propTypes = {
    prod: PropTypes.array,
    onProdClick: PropTypes.func
};

Products.defaultProps = {
    prod: [],
    onProdClick:null
};

function Products({prod , onProdClick}) {
    const prodclick = (todo,ind)=>{
        if(!onProdClick){
            return;
        }
        onProdClick(todo,ind);
    }
    return (
        <div>
            <ol className='product-item'>
                {prod.map((todo,ind)=>(
                    <li 
                    key={todo.id} 
                    className={classnames({
                        'product-item':true,
                        remaining: todo.remaining==='sold out'})} 
                    onClick={()=>prodclick(todo,ind)}>Product: {todo.product} / Price: {todo.price}$</li>
                ))}
            </ol>
        </div>
    );
}

export default Products;