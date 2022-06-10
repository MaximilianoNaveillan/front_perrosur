import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../Img/icon';
import { colors, breakpoint } from '../../../styles/theme';

export default function Tienda() {
  return (
    <>
      <div className="card_title">
        <h1 className="title">PORTAFOLIO</h1>
      </div>
      <div className="card_2">
        <div className="icon-primary">
          <div className="row">
            <div className="centered-element">
              <Image
                src="/images/iconobolsa.png"
                alt="quehacemos1-entrelazar"
                width={200}
                height={240}
              />
            </div>
          </div>
        </div>
        <div className="icon-primary">
          <div className="contentbutton">
            <Link href="/tienda" passHref>
              <button type="button">Ingresa al portafolio</button>
            </Link>
          </div>
        </div>
      </div>
      <div id="recursos" className="card_title">
        <h1 className="title2 ">RECURSOS</h1>
      </div>
      <div className="card_3 min-height">
        <div className="row ">
          <div className="col-5  item">
            <Icon src="/images/iconolibro.png" aspect="2-1" />
          </div>
          <div className="col-7">
            <div className="card-text">
              <p>Documentos y publicaciones</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card_4 min-height">
        <div className="row ">
          <div className="col-7">
            <div className="card-text">
              <p>Descarga contenido de referencia</p>
            </div>
          </div>
          <div className="col-5  item">
            <Icon src="/images/icononube.png" aspect="2-1" />
          </div>
        </div>
      </div>
      <div className="card_5 min-height">
        <div className="row ">
          <div className="col-5  item">
            <Icon src="/images/iconoflecha.png" aspect="2-1" />
          </div>
          <div className="col-7">
            <div className="card-text">
              <p>Links a otros sitios de referencia</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .row {
          height: 100%;
        }
        .title {
          color: black;
          text-align: right;
          padding: 1rem 3rem;
          font-weight: 1000;
          text-shadow: 6px -6px 0px ${colors.primary_darken};
        }

        .title2 {
          color: black;
          text-align: center;
          font-weight: 1000;
          text-shadow: -6px 6px 0px ${colors.secondary_darken};
          height: 100%;
          padding-top: 30px;
        }
        .card_title {
          height: 10%;
          margin: 4rem 1.3rem 0 0.7rem;
          border: 0.3rem solid black;
          background-color: white;
          padding-left: 0.7rem;
          padding-top: 0.7rem;
          -webkit-box-shadow: 0.7rem 0.7rem 0px -4px white;
          box-shadow: 0.7rem 0.7rem 0px -4px white;
          background-clip: content-box;
          min-height: 120px;
        }
        .card_2 {
          height: calc(35% - 1.7rem);
          margin: -0.3rem 1.3rem 0 0.7rem;
          border: 0.3rem solid black;
          background-color: ${colors.primary_darken};
          padding-left: 0.7rem;
          padding-top: 1rem;
          -webkit-box-shadow: 0.7rem 1rem 0px -4px ${colors.primary_darken};
          box-shadow: 0.7rem 1rem 0px -4px ${colors.primary_darken};
          background-clip: content-box;
        }
        .card_3 {
          height: calc(14.2% - 1rem);
          margin: -0.3rem 1.3rem 0 0.7rem;
          border: 0.3rem solid black;
          background-color: ${colors.pink};
          padding-left: 0.7rem;
          padding-top: 0.7rem;
          -webkit-box-shadow: 0.7rem 0.7rem 0px -4px ${colors.pink};
          box-shadow: 0.7rem 0.7em 0px -4px ${colors.pink};
          background-clip: content-box;
        }
        .card_4 {
          height: calc(14.2% - 1rem);
          margin: -0.3rem 1.3rem 0 0.7rem;
          border: 0.3rem solid black;
          background-color: ${colors.green};
          padding-left: 0.7rem;
          padding-top: 0.7rem;
          -webkit-box-shadow: 0.7rem 0.7rem 0px -4px ${colors.green};
          box-shadow: 0.7rem 0.7em 0px -4px ${colors.green};
          background-clip: content-box;
        }
        .card_5 {
          height: calc(14.2% - 1rem);
          margin: -0.3rem 1.3rem 4.9rem 0.7rem;
          border: 0.3rem solid black;
          background-color: ${colors.primary};
          padding-left: 0.7rem;
          padding-top: 0.7rem;
          -webkit-box-shadow: 0.7rem 0.7rem 0px -4px ${colors.primary};
          box-shadow: 0.7rem 0.7em 0px -4px ${colors.primary};
          background-clip: content-box;
        }

        .card_title h1 {
          font-size: 2.5rem;
        }

        .content-card {
        }
        .icon-primary {
          position: relative;
          height: 100%;
          min-height: 200px;
          width: 100%;
          margin-bottom: 3.5rem;
          text-align: center;
        }

        .contentbutton {
          margin: -6.8rem 1rem;
        }
        .min-height {
          min-height: 170px;
        }
        .card-text {
          height: 100%;
          position: relative;
          max-width: 44vw;
          overflow: hidden !important;
          text-overflow: ellipsis;
        }
        .card-text p {
          margin: 0;

          font-size: 1.5rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        @media screen and (max-width: ${breakpoint.md}) {
          .min-height {
            min-height: 175px;
          }
        }
        @media screen and (max-width: ${breakpoint.xxs}) {
          .card-text p {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}
