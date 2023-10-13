import React from "react";
import styles from './Track.module.css';

function Track(props) {
    const trackAction = (e) => {
        props.onclick(props.track)
    }

    return (
        <div className={styles.Track}>
        <div className="Track-information">
            <div>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            
        </div>
        <button className="Track-action" onClick={trackAction}></button>
            {props.btnAction}
        </div>
    );
}

export default Track;