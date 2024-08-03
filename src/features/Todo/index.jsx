import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Products from './components/Products';

TodoFeatures.propTypes = {
    
};

function TodoFeatures({props}) {
    const products = [
        {
            id: 1,
            product: 'pencil',
            price: 2.99,
            remaining: 'sold out'
        },
        {
            id: 2,
            product: 'iphone',
            price: 959,
            remaining: 'stocking'
        },
        {
            id: 3,
            product: 'laptop',
            price: 1299,
            remaining: 'sold out'
        }
    ]

    const [productList, setProd] = useState(products)

    const funcProdClick = (todo,ind)=>{
        const newprodlist = [...productList]

        newprodlist[ind] = {
            ...newprodlist[ind],
            remaining: newprodlist[ind].remaining ==='stocking'? 'sold out' : 'stocking',
        }

        setProd(newprodlist)
        console.log(todo,ind)
    }
    return (
        <div>
            <h3>Product List: </h3>
            <Products prod={products} onProdClick={funcProdClick}/>
        </div>
    );
}

export default TodoFeatures;