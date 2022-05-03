import Image from "next/image";
import { breakpoint } from "../../styles/theme.js";

export default function ImgEquipo({ src, name, selected }) {
  return (
    <>
      <div className="img-overlay">
        <div className="img">
          <Image src={src} alt={name} objectFit="cover" layout="fill" />
        </div>
        <div className={`overlay overlay-${selected}`}>
          <div className="text">{name.replace(" ", "\n")}</div>
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
        @media screen and (max-width: ${breakpoint.xs}) {
          .text {
            left: 1rem;
          }
        }
      `}</style>
    </>
  );
}
