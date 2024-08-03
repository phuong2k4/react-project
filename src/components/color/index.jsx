import React, { useState } from 'react';
import PropTypes from 'prop-types';

Color.propTypes = {};

function Color(props) {
    const [color, changeColor] = useState('white')
    return (
        <div>
            {color}
            <button onClick={()=>changeColor('black')}>Change black</button>
            <button onClick={()=>changeColor('red')}>Change red</button>
        </div>
    );
}

export default Color;