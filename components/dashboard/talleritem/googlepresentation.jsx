import { useEffect, useState } from 'react';

function GooglePresentation({ url }) {
  const [src, setSrc] = useState(window.innerWidth);
  useEffect(() => {
    if (url.includes('/pub?')) {
      setSrc(url.split('/pub?')[0]);
    }
    if (url.includes('/edit?usp=sharing')) {
      setSrc(url.split('/edit?usp=sharing')[0]);
    }
  }, [url]);
  return (
    <>
      <iframe
        title="titulo"
        src={`${src}/embed?start=false&loop=false&delayms=3000`}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      >
        Cargando…
      </iframe>
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

export default GooglePresentation;
