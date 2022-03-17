import { colors, breakpoint } from "../../styles/theme.js";
import Image from "next/image";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
export default function Actualidad() {
  return (
    <>
      <div id="actualidad" className="container">
        <div className="content">
          <div className="row">
            <div className="col-11">
              <h1 className=" title">ACTUALIDAD</h1>
            </div>
            <div className="col-1">
              <div className="icon-section">
                <div className="float">
                  <div className="img-icon">
                    <Image src="/images/revista.png" layout="fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row ">
              <div className="col-8 md-7 sm-12">
                <div className="card-title">
                  <h1>
                    {" "}
                    TALLER PERRO SUR ESTÁ EN EL PARQUE CULTURAL DE VALPARAÍSO
                  </h1>
                </div>
                <div className="card-text">
                  <p>
                    Ayer realizamos un hermoso homenaje a nuestra querida Paula
                    Manzor 💙🌌 (1978-2020) artista gráfica, quien fue la
                    gestora y artífice de este espacio y proyecto creativo Perro
                    Sur que funciona desde el año 2013. Inauguramos una
                    exposición con algunos de sus maravillosos grabados junto al
                    lanzamiento del libro "El Viaje"📕 un libro único realizado
                    originalmente en litrografía y que fue editado gracias a la
                    gestión de @pinturasspinoza y financiado por el Fondo del
                    Libro 2021, encuadernado a mano en nuestro taller por
                    @imaquineria y @pamelynda86 Estamos muy honradxs de formar
                    parte de este legado y de las bellas personas que conforman
                    esta familia taller. Si quieres visitar la muestra
                    escríbenos!
                  </p>
                </div>
              </div>
              <div className="col-2 sm-6 xxs-12">
                <div className="container-icon">
                  <div className="card-icon">
                    <div className="icon-text">
                      <p>Ir</p>
                      <p>a la</p>
                      <p>publicación</p>
                    </div>
                    <div className="icon-action">
                      <button>
                        <FaFacebookSquare />
                      </button>
                      <button>
                        <FaInstagram />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 md-3 sm-6 xxs-12">
                <div className="card-img">
                  <div className="img">
                    <Image
                      src="/images/actualidad1.jpg"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: ${colors.primary_darken};
        }
        .content {
          padding-bottom: 7rem;
        }
        .title {
          color: ${colors.magenta};
          text-align: left;
          padding: 4rem 1.7rem;
          font-size: 2.5rem;
          font-weight: 1000;
          text-shadow: 3px 6px 0px black;
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
        .img {
          margin: auto;
        }
        .img-icon {
          position: relative;
          float: right;
          height: 100%;
          width: 200px;
          max-width: 100%;
        }

        .card {
          height: calc(14.03% - 1rem);
          margin: 0 1.3rem 0 0.7rem;
          border: 0.3rem solid black;
          background-color: ${colors.green};
          padding-left: 0.7rem;
          padding-top: 0.7rem;
          -webkit-box-shadow: 0.7rem 0.7rem 0px -4px ${colors.green};
          box-shadow: 0.7rem 0.7em 0px -4px ${colors.green};
          background-clip: content-box;
        }
        .card-title {
          padding: 1.6rem 1.6rem 0;
        }
        .card-title h1 {
          font-size: 1.41rem;
          font-weight: 1000;
        }
        .card-text {
          padding: 0 1.6rem 1.6rem;
        }
        .card-text p {
          font-size: 1.3rem;
        }
        .container-icon {
          height: 100%;
          position: relative;

          overflow: hidden !important;
          text-overflow: ellipsis;
          min-height: 300px;
        }
        .card-icon {
          margin: 0;
          position: absolute;
          top: 50%;
          left: calc(50% - 0.2rem);
          height: 200px;
          width: calc(80% - 0.4rem);
          max-width: 150px;

          transform: translate(-50%, -50%);
          border: 0.3rem solid black;
          background-color: ${colors.secondary_lighten};
          padding-left: 0.7rem;
          padding-top: 0.7rem;
          -webkit-box-shadow: 0.7rem 0.7rem 0px -4px ${colors.secondary_lighten};
          box-shadow: 0.7rem 0.7em 0px -4px ${colors.secondary_lighten};
          background-clip: content-box;
        }
        .card-img {
          position: relative;
          height: 100%;
          width: 100%;
          min-width: 158px;
          float: right;
          min-width: 135px;
          min-height: 250px;
        }
        .icon-text {
          font-size: 1.2rem;
          font-weight: 600;
          padding-left: 0.8rem;
          padding-top: 40px;
        }
        @media screen and (max-width: ${breakpoint.md}) {
          .icon-text {
            font-size: 1.1rem;
            padding-left: 0.5rem;
          }
          .card-icon {
            width: 87%;
            left: 44%;
          }
        }
        @media screen and (max-width: ${breakpoint.sm}) {
          .card-img {
            padding-bottom: 0.5rem;
            padding-right: 0.5rem;
          }
        }
        @media screen and (max-width: ${breakpoint.xxs}) {
          .card-img {
            padding: 0;
          }
          .card-icon {
            width: 200px;
            left: calc(50% - 0.2rem);
          }
        }

        .icon-action {
          text-align: center;
          padding-top: 1rem;
        }
        .icon-action button {
          height: 2.9rem;
          margin-left: 0.2rem;
          margin-right: 0.2rem;
          font-size: 2.6rem;
          background: none;
          border-radius: 5px;
          cursor: pointer;
          border: none;
        }
        .icon-action button:hover {
          background: ${colors.secondary};
        }
      `}</style>
    </>
  );
}
