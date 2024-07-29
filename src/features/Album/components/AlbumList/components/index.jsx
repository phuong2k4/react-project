import React from 'react';
import PropTypes from 'prop-types';
import Album from '../../Album';
import "./style.scss"

AlbumList.propTypes = {
    albumList: PropTypes.array
};

function AlbumList({albumList}) {
    return (
            <ol className='album_list'>
                {albumList.map(song=>(
                    <li key={song.id}>
                        <Album album={song}/>
                    </li>
                ))}
            </ol>
    );
}

export default AlbumList;