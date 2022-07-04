import React from "react";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import { PlayList } from "./PlayList";

function MenuPlayList() {
  return (
    <div className="playListContainer">
      <div className="playListTitle">
        <p>Playlist</p>
        <i>
          <FaPlus />
        </i>
      </div>
      <div className="playListContent">
        {PlayList &&
          PlayList.map((item) => (
            <div key={item.id} className="playList">
              <i className="list">
                <BsMusicNoteList />
              </i>
              <p>{item.name}</p>

              <i className="trash">
                <BsTrash />
              </i>
            </div>
          ))}
      </div>
    </div>
  );
}

export { MenuPlayList };
