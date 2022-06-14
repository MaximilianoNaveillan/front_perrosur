import { useEffect, useState } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { breakpoint } from '../../../styles/theme';

function LayoutVimeo({ url, handleChangeSelect }) {
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

  const onError = (e) => {
    // @ts-ignore
    handleChangeSelect({ name: 'key', value: null });
    setError(e);
  };

  const onLoaded = (e) => {
    handleChangeSelect({ name: 'key', value: `vimeo-${e.id}` });
  };

  const width = innerwidth < parseInt(breakpoint.sm, 10) ? 224 : 400;
  return (
    <>
      {video && !error && (
        <div className="layout-vimeo">
          <div className="placeholder">
            <Vimeo
              video={video}
              width={width}
              autoplay
              volume={0}
              onError={onError}
              onLoaded={onLoaded}
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

export default LayoutVimeo;
