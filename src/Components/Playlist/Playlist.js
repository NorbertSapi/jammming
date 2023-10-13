import React from "react";
import styles from '.Playlist.module.css/';
import TrackList from '../Tracklist';

function PlayList(props) {
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    
    return (
        <div className={styles.Playlist}>
        <input defaultValue="New Playlist"/>
            {/*<!-- Add a TrackList component -->*/}
        <button class="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
};

export default PlayList;