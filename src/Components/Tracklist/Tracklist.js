import React from "react";
import styles from './Tracklist.module.css';
import Tracks from '../Track/Track';

function TrackList(props) {
    return (
        <div className={styles.Tracklist}>
            {props.tracks.map((track)=> {
                return (
                    <Tracks
                        onClick={props.onClick}
                        track={track}
                        key={track.id}
                        inPlaylist = {props.inPlaylist}
                        btnAction = {props.btnAction}
                    />
                );
            })}

        </div>
    );
}

export default TrackList;