import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList/components';
import "./style.sass"
AlbumsMusic.propTypes = {};

function AlbumsMusic({props}) {
    const albumList = [
        {
            id: 1,
            name: 'Highest In The Room',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/5/0/d/9/50d9c0a9cbc4ed3609de552939378040.jpg',
            owner: 'Travis Scott'
        },
        {
            id: 2,
            name: 'Pray For Me ',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/2/5/e/b/25eb7a1802c4140f03b6ab55a580c022.jpg',
            owner: 'The Weeknd'
        },
        {
            id: 3,
            name: 'Hummble',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/1/f/9/3/1f93afe2d1735fe45b75d961054f5797.jpg',
            owner: 'Kendrick Lammar'
        },
    ]
    return (
        <div>
            <h2 className='title'> My Favorite Song </h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumsMusic;