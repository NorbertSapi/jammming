import React, { useState } from "react";
import TrackList from './TrackList';
import './magnifyingGlass.png';
import styles from './SearchBar.module.css';

function SearchBar() {
    const [search, setSearch] = useState('');

    return (
        <div className={styles.SearchBar}>
            {/*take out the "SEARCH BAR" title, that one is for just the visualisation for the production*/}
            <h3 className="title">SEARCH BAR</h3>
                <input 
                    type="text" 
                    placeholder=  "Search for a Song, Artist or Album" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
            {/* a track array passed down to List */}
            {/*<List track={track}/>*/}
            <button className={styles.SearchButton}>SEARCH</button>
        </div>
    )
};

export default SearchBar;