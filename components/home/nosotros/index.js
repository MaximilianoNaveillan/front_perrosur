import { colors, breakpoint } from "../../../styles/theme.js";
import Quehacemos from "./quehacemos";
import Tienda from "./tienda";
import Image from "next/image";

export default function Nosotros() {
  return (
    <>
      <div className="container">
        <div className="icon-section">
          <div className="float">
            <div className="img-icon">
              <Image src="/images/pincel.png" layout="fill" />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div id="que_hacemos" className="col-6 md-12 ">
              <Quehacemos />
            </div>
            <div className="col-6 md-12 fill-height">
              <Tienda />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: ${colors.secondary};
        }
        .content {
          padding-top: 3rem;
          padding-bottom: 7rem;
        }
        .icon-section {
          position: absolute;
          left: 0;
          right: 0;
          margin-top: -90px;
          height: 230px;
          min-height: 230px;
        }
        .float {
          width: 90%;
          max-width: calc(${breakpoint.md} - 2.3rem);
          height: 100%;
          margin: auto;
        }
        .img-icon {
          position: relative;
          float: right;
          margin-top: 20px;
          margin-right: 50px;
          height: 70%;
          width: 500px;
          max-width: 100%;
        }
        @media screen and (max-width: ${breakpoint.xxs}) {
          .img-icon {
            margin-top: 10%;
            height: 60%;
          }
        }
      `}</style>
    </>
  );
}
