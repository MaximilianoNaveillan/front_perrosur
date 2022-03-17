import Image from "next/image";
import { breakpoint, colors } from "../../styles/theme.js";

export default function Portada() {
  return (
    <>
      <div className="container">
        <Image
          src={`/images/portada.jpg`}
          alt="portada-entrelazar"
          objectFit="cover"
          priority
          layout="fill"
        />
        <div className="content-image">
          <div>
            <Image src={`/images/acuarela.png`} layout="fill" />
          </div>
        </div>
        <div className="card">
          <div className="container-text">
            <div className="border-text " />
            <div className="card-text">
              <h1>TALLER PERROSUR</h1>
              <p>Un espacio para de co-creación y aprendizaje</p>
              <div className="contentbutton">
                <button>conoce más de nosotros</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: white;
          position: relative;
          height: 800px;
          max-height: 70vh;
          min-height: 200px;
          width: 100%;
          padding: 0;
        }
        .content-image {
          display: flex;
          position: absolute;
          left: 2.5rem;
          bottom: -2.5rem;

          z-index: 1;
        }
        .content-image div {
          position: relative;
          height: 27vw;
          width: 27vw;
        }

        .card {
          height: 100%;
          width: 100%;
          position: absolute;
          text-align: center;
          top: 0;
          overflow: hidden;
        }
        .card-text {
          padding: 1rem 1.7rem;
        }
        .border-text {
          position: absolute;
          border: 0.3rem solid black;
          height: 101%;
          width: 101%;
          margin-top: -1rem;
          margin-left: -1rem;
        }
        .container-text {
          max-width: 77vw;
          background: ${colors.primary};
          position: absolute;
          bottom: 2.5rem;
          right: 2.5rem;
        }
        h1 {
          font-size: 2rem;
          font-weight: 1000;
          padding-left: 40px;
        }
        p {
          font-size: 1rem;
          padding-right: 40px;
        }

        @media screen and (max-width: 350px) {
          .container-text {
            max-width: 90vw;
            right: 0.7rem;
            left: 1.5rem;
          }
        }
        @media screen and (max-width: ${breakpoint.sm}) {
          .container {
            max-height: 65vh;
          }
          h1 {
            font-size: 1.5rem;
          }
          p {
            font-size: 0.8rem;
          }
          button {
            font-size: 0.8rem;
          }
        }
        @media screen and (max-width: ${breakpoint.xs}) {
          .card-text {
            padding: 0.5rem 0.5rem;
          }
          .content-image {
            display: none;
          }
          .container {
            max-height: 35vh;
          }
          h1 {
            font-size: 1rem;
          }
          p {
            font-size: 0.6rem;
          }
          button {
            font-size: 0.6rem;
          }
        }
        .contentbutton {
          margin: 1rem 0.8rem;
        }
      `}</style>
    </>
  );
}
