import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({album}) {
    return (
        <div className='album'> 
            <div className='album__img'>
                <img src={album.img} alt="" />
            </div>
            <p className="album__name" >{album.name}</p>
            <p className='album__owner'>{album.owner}</p>
        </div>
    );
}

export default Album;