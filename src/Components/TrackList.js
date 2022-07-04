import React from "react";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import Track from "../img/track.png";

function TrackList() {
  return (
    <div className="trackList">
      <div className="trackListHeader">
        <img src={Track} alt="Track" />
        <p>
          Sample Name <span>Artist</span>
        </p>
      </div>
      <div className="trackListContent">
        <i>
          <BsFillVolumeUpFill />
        </i>
        <input type="range" />
        <i>
          <BsMusicNoteList />
        </i>
        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
}

export { TrackList };
