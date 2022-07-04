import React, { useEffect } from "react";
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
  const [duration, setDuration] = React.useState(0);

  const audioPlayer = React.useRef();
  const progressBar = React.useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);

    setDuration(seconds);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer.current.readyState]);

  const CalculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const seconds = Math.floor(sec % 60);
    const returnSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${returnMinutes}:${returnSeconds}`;
  };

  const changeLoved = () => {
    setLoved(!isLove);
  };

  const changePlaying = () => {
    const prevValue = isPlay;
    if (!prevValue) {
      audioPlayer.current.play();
    }
    audioPlayer.current.pause();

    setPlay(!prevValue);
  };

  return (
    <>
      <div className="musicPlayer">
        <div className="songImg">
          <img src={props.imgSrc} alt="song" />
        </div>
        <div className="songAttr">
          <audio src={props.song} preload="metadata" ref={audioPlayer} />

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
            <input type="range" className="progressBar" ref={progressBar} />
            <div className="totalTime">
              {duration && !isNaN(duration) && CalculateTime(duration)
                ? CalculateTime(duration)
                : "00:00"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { MusicPlayer };
