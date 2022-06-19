/* eslint-disable react/jsx-filename-extension */
import Image from 'next/image';
import { breakpoint } from '../../styles/theme';

export default function ImgEquipo({ src, name, selected }) {
  return (
    <>
      <div className="img-overlay">
        <div className="img">
          <Image src={src} alt={name} objectFit="cover" layout="fill" />
        </div>
        <div className={`overlay overlay-${selected}`}>
          <div className="text">{name.replace(' ', '\n')}</div>
        </div>
      </div>
      <style jsx>{`
        .text {
          color: black;
          font-weight: 1000;
          position: absolute;
          bottom: 1.3rem;
          left: 1.3rem;
          text-align: left;
          white-space: pre-line;
          text-transform: uppercase;
          max-width: 80%;
          overflow: hidden;
        }
        @media screen and (max-width: 490px) {
          .text {
            left: 0.4rem;
            font-size: 12.6px;
            max-width: 100%;
          }
        }

        @media screen and (max-width: ${breakpoint.xxs}) {
          .text {
            font-size: 8.6px;
          }
        }
      `}</style>
    </>
  );
}
