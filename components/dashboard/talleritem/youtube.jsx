import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { breakpoint } from '../../../styles/theme';

function LayoutYoutube({ url, handleChangeSelect }) {
  const [innerwidth, setInnerWidth] = useState(window.innerWidth);
  const [video, setVideo] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    setVideo(url);
    setError(null);
  }, [url]);

  const width = innerwidth < parseInt(breakpoint.sm, 10) ? 224 : 400;

  const onError = (e) => {
    // @ts-ignore
    handleChangeSelect({ name: 'key', value: null });
    setError(e);
  };

  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };

  const opts = {
    height: 'auto',
    width,
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      {video && !error && (
        <div className="layout-vimeo">
          <div className="placeholder">
            <YouTube
              videoId={video}
              onError={onError}
              opts={opts}
              onReady={onPlayerReady}
            />
          </div>
        </div>
      )}
      <style jsx>{`
        .layout-vimeo {
          margin: auto;
        }
        .placeholder {
          margin: 0 auto;
          background-color: #eee;
        }

        @keyframes placeHolderShimmer {
          0% {
            background-position: -468px 0;
          }
          100% {
            background-position: 468px 0;
          }
        }

        .animated-background {
          animation-duration: 1.25s;
          animation-fill-mode: forwards;
          animation-iteration-count: infinite;
          animation-name: placeHolderShimmer;
          animation-timing-function: linear;
          background: darkgray;
          background: linear-gradient(
            to right,
            #eeeeee 10%,
            #dddddd 18%,
            #eeeeee 33%
          );
          background-size: 800px 104px;
          height: 100px;
          position: relative;
        }
      `}</style>
    </>
  );
}

export default LayoutYoutube;
