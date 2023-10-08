import React, { useState } from "react";
import './magnifyingGlass.png';
import styles from './SearchBar.module.css';

function SearchBar(props) {
    const [search, setSearch] = useState('');

    const searching = () => {
        props.onSearch(search);
    }

    return (
        <form className={styles.SearchBar}>
            <input 
                type="text" 
                placeholder=  "Search for a Song, Artist or Album" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className={styles.SearchButton} type="submit" onClick={searching}>SEARCH</button>
        </form>
    )
};

export default SearchBar;