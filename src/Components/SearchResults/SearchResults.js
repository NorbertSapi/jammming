import React from "react";
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

function SearchResult(props) {
        
    return (
        <div className={styles.SearchResult}>
        <h2>Results</h2>
            <Tracklist
                onClick={props.onAdd}
                btnAction="Add to the Playlist"
                tracks={props.SearchResult}
                inPlaylist={false}
            />
        </div>
    )
};

export default SearchResult;