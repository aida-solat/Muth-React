import React from "react";
import {
  FaRegHeart,
  FaHeart,
  FaStepBackward,
  FaBackward,
  FaPlay,
  FaPause,
  FaForward,
  FaStepForward,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

function MusicPlayer(props) {
  const [isLove, setLoved] = React.useState(false);
  const [isPlay, setPlay] = React.useState(false);

  const changeLoved = () => {
    setLoved(!isLove);
  };

  const changePlaying = () => {
    setPlay(!isPlay);
  };

  return (
    <>
      <div className="musicPlayer">
        <div className="songImg">{props.imgSrc}</div>
        <div className="songAttr">
          <audio src={props.song} preload="metadata" />

          <div className="top">
            <div className="left">
              <div className="loved" onClick={changeLoved}>
                {isLove ? (
                  <i>
                    <FaHeart />
                  </i>
                ) : (
                  <i>
                    <FaRegHeart />
                  </i>
                )}
              </div>
              <div className="download">
                <i>
                  <BsDownload />
                </i>
              </div>
            </div>
            <div className="middle">
              <div className="back">
                <i>
                  <FaStepBackward />
                </i>
                <i>
                  <FaBackward />
                </i>
              </div>
              <div className="playPause" onClick={changePlaying}>
                {isPlay ? (
                  <i>
                    <FaPause />
                  </i>
                ) : (
                  <i>
                    <FaPlay />
                  </i>
                )}
              </div>
              <div className="forward">
                <i>
                  <FaForward />
                </i>
                <i>
                  <FaStepForward />
                </i>
              </div>
            </div>
            <div className="right">
              <i>
                <FaShareAlt />
              </i>
            </div>
          </div>
          <div className="bottom">
            <div className="currentTime">00:00:00</div>
            <input type="range" className="progressBar" />
            <div className="totalTime">00:00:00</div>
          </div>
        </div>
      </div>
    </>
  );
}

export { MusicPlayer };
