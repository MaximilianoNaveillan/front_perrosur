import Image from "next/image";
import { breakpoint } from "../../styles/theme.js";
export default function Icon({ src, aspect }) {
  return (
    <>
      <div className="contentIcon">
        <div className="img">
          <Image layout="fill" src={src} />
        </div>
      </div>
      <style jsx>{`
        .contentIcon {
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-top: 12px;
          height: 130px;
          width: 100px;
        }
        @media screen and (max-width: ${breakpoint.sm}) {
          .contentIcon {
            margin-top: 20px;
            height: 115px;
            width: 80px;
          }
        }
        @media screen and (max-width: ${breakpoint.xxs}) {
          .contentIcon {
            margin-top: 22px;
            height: 110px;
            width: 75px;
          }
        }
      `}</style>
    </>
  );
}
