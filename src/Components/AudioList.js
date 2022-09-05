import React, { useEffect } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import { MusicPlayer } from "./MusicPlayer";
import { Songs } from "./Songs";

function AudioList() {
  const [songs, setSongs] = React.useState(Songs);
  const [song, setSong] = React.useState(Songs[0].song);
  const [img, setImg] = React.useState(Songs[0].imgSrc);

  useEffect(() => {
    const allSongs = document.querySelectorAll(".songs");

    function changeMenuActive(e) {
      allSongs.forEach((obj) => obj.classList.remove("active"));
      this.classList.add("active");
    }

    allSongs.forEach((obj) => obj.addEventListener("click", changeMenuActive));
  }, []);

  const changeFavorite = (id) => {
    Songs.forEach((song) => {
      if (song.id === id) {
        song.favourite = !song.favourite;
      }
    });

    setSongs([...Songs]);
  };

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImg(imgSrc);
  };

  return (
    <div className="audioList">
      <div className="title">
        The list <span>{`${Songs.length} Songs`}</span>
      </div>

      <div className="songsContainer">
        {songs &&
          songs.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
              onClick={() => setMainSong(song?.song, song?.imgSrc)}
            >
              <div className="count">{`#${index + 1}`}</div>
              <div className="song">
                <div className="imgBox">
                  <img src={song?.imgSrc} alt="song" />
                </div>
                <div className="section">
                  <p className="songName">
                    {song?.songName}
                    <span className="spanArtist">{song?.artist}</span>
                  </p>

                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      95,490,102
                    </p>
                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      03.04
                    </p>

                    <div
                      className="favorite"
                      onClick={() => changeFavorite(song?.id)}
                    >
                      {song?.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <MusicPlayer song={song} imgSrc={img} />
    </div>
  );
}

export { AudioList };
