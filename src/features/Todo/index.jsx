import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Products from './components/Products/index.jsx';

TodoFeatures.propTypes = {
    
};

function TodoFeatures() {
    const initProducts = [
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

    const [productList, setProd] = useState(initProducts)
    const [filteredStatus, setFilteredStatus] = useState('all')

    const funcProdClick = (todo,ind) => {
        const newprodlist = [...productList]

        newprodlist[ind] = {
            ...newprodlist[ind],
            remaining: newprodlist[ind].remaining === 'stocking'? 'sold out' : 'stocking',
        }
        setProd(newprodlist)
    }

    const handleShowAll = () => {
        setFilteredStatus('all')
    }

    const handleShowStocking = () => {
        setFilteredStatus('stocking')
    }

    const handleShowSoldOut = () => {
        setFilteredStatus('sold out')
    }

    const renderProd = productList.filter(item => filteredStatus === 'all' || filteredStatus === item.remaining)
    console.log(renderProd)

    return (
        <div>
            <h3>Product List: </h3>
            <Products prod={renderProd} onProdClick={funcProdClick}/>

            <div>
                <button onClick={handleShowAll}>Show All</button>
                <button onClick={handleShowStocking}>Show Stocking</button>
                <button onClick={handleShowSoldOut}>Show Sold out</button>
            </div>
        </div>

    );
}

export default TodoFeatures;