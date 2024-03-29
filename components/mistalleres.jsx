import Image from 'next/image';
import { useState, useEffect } from 'react';
// import Link from 'next/link';
import { breakpoint, colors } from '../styles/theme';
import ItemSqueleton from './dashboard/talleritem/itemsqueleton';

const S_URL = process.env.SERVER_URL;

function Card({ item, handleContinue }) {
  const [moduloslength, setModulosLength] = useState(0);
  useEffect(() => {
    const arr = item.modulos;
    setModulosLength(arr.length);
  }, [item.modulos]);
  const background = `rgb(${item.bg},${item.bg},${item.bg},0.2)`;
  return (
    <>
      <div id={`t-${encodeURI(item.titulo)}`} className="taller-items-card">
        <div id={`dif-${item.dificultad}`} className="row">
          <div id={`dur-${item.duracion}`} className="col-4 sm-3 xs-5 xxs-12">
            <div
              id={`c-${item.categoria}`}
              className="taller-items-card-image "
            >
              <Image
                src={`${S_URL}/uploadimg/image/taller-item-${item._id}-${item.imagen}.png`}
                height="300"
                width="400"
                alt={`taller-item-${item._id}-${item.imagen}`}
              />
            </div>
          </div>
          <div className="col-7 taller-items-card-title">
            <div className="taller-items-card-title-container">
              <div className="title" style={{ backgroundColor: background }}>
                {item.titulo}
              </div>
            </div>
          </div>
          <div className="col-8 sm-9 xs-12">
            <div className="taller-items-card-text">
              <div className="title" style={{ backgroundColor: background }}>
                {item.titulo}
              </div>
              <div className="text" style={{ backgroundColor: background }}>
                {item.resumen}
              </div>
            </div>
            <div className="taller-items-card-level">
              <div className="row">
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon">
                    <div
                      className="icon-label"
                      style={{ backgroundColor: background }}
                    >
                      <div className="span-label">Dificultad</div>
                      <div className="space" />
                      <span>
                        <Image
                          src={`/images/ICONONIVEL${item.dificultad}.png`}
                          alt={`ICONONIVEL${item.dificultad}`}
                          height="25px"
                          width="80px"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 sm-0">
            <div className="taller-items-card-icon-left">
              <div className="row">
                <div className="col-5 sm-0" />
                <div className="col-7 sm-12">
                  <div className="taller-item-icon">
                    <div
                      className={`icon-label ${
                        item.incluyerecursos ? '' : 'disabled'
                      }`}
                      style={{ backgroundColor: background }}
                    >
                      <span>
                        <Image
                          src="/images/incluyerecursos.png"
                          alt="portada-entrelazar"
                          height="30px"
                          width="30px"
                        />
                      </span>
                      <div className="span">Requiere Recursos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 sm-12">
            <div className="taller-items-card-icon-botom">
              <div className="row">
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon ">
                    <div
                      className="icon-label icon-level"
                      style={{ backgroundColor: background }}
                    >
                      <div className="span-label">Dificultad</div>
                      <div className="space" />
                      <span>
                        <Image
                          src={`/images/ICONONIVEL${item.dificultad}.png`}
                          alt={`ICONONIVEL${item.dificultad}`}
                          height="10px"
                          width="60px"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon">
                    <div
                      className={`icon-label ${
                        item.incluyerecursos ? '' : 'disabled'
                      }`}
                      style={{ backgroundColor: background }}
                    >
                      <span>
                        <Image
                          src="/images/ICONODOCUMENTO.png"
                          alt="portada-entrelazar"
                          height="30px"
                          width="30px"
                        />
                      </span>
                      <div className="span">Requiere Recursos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="taller-items-card-icon-top">
              <div className="row">
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon">
                    <div
                      className={`icon-label ${
                        item.incluyereunion ? '' : 'disabled'
                      }`}
                      style={{ backgroundColor: background }}
                    >
                      <span>
                        <Image
                          src="/images/ICONOREUNION.png"
                          alt="portada-entrelazar"
                          height="30px"
                          width="30px"
                        />
                      </span>
                      <div className="span">Incluye Reunion</div>
                    </div>
                  </div>
                </div>
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon">
                    <div
                      className="icon-label"
                      style={{ backgroundColor: background }}
                    >
                      <span>
                        <Image
                          src="/images/ICONORELOJ.png"
                          alt="portada-entrelazar"
                          height="30px"
                          width="30px"
                        />
                      </span>
                      <div className="span">
                        {item.duracion} <small>min</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon">
                    <div
                      className={`icon-label ${
                        item.sincronico ? '' : 'disabled'
                      }`}
                      style={{ backgroundColor: background }}
                    >
                      <span>
                        <Image
                          src="/images/sincronico.png"
                          alt="portada-entrelazar"
                          height="30px"
                          width="30px"
                        />
                      </span>
                      <div className="span">Sincronico</div>
                    </div>
                  </div>
                </div>
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon">
                    <div
                      className={`icon-label ${
                        item.requierepantalla ? '' : 'disabled'
                      }`}
                      style={{ backgroundColor: background }}
                    >
                      <span>
                        <Image
                          src="/images/requierepantalla.png"
                          alt="portada-entrelazar"
                          height="30px"
                          width="30px"
                        />
                      </span>
                      <div className="span">Requiere Pantalla</div>
                    </div>
                  </div>
                </div>
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon">
                    <div
                      className="icon-label"
                      style={{ backgroundColor: background }}
                    >
                      <span>
                        <Image
                          src="/images/modulos.png"
                          alt="portada-entrelazar"
                          height="30px"
                          width="30px"
                        />
                      </span>
                      <div className="span">{` ${moduloslength} Modulos${
                        moduloslength > 1 ? 's' : ''
                      }`}</div>
                    </div>
                  </div>
                </div>
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon">
                    <div
                      className={`icon-label ${
                        item.asincronico ? '' : 'disabled'
                      }`}
                      style={{ backgroundColor: background }}
                    >
                      <span>
                        <Image
                          src="/images/asincronico.png"
                          alt="portada-entrelazar"
                          height="30px"
                          width="30px"
                        />
                      </span>
                      <div className="span">Asincronico</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="taller-items-card-action">
              <button
                type="button"
                onClick={() => handleContinue(item)}
                className="btn-continuar"
              >
                continuar
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .ul {
          background: white;
          margin: auto;
        }
        .taller-items-card {
          position: relative;
          margin: 2.7rem auto 3.7rem;
          border: 0.4rem solid black;
          background-color: ${item.color};
          padding-left: 0.7rem;
          padding-top: 0.7rem;
          max-width: ${breakpoint.sm};
          -webkit-box-shadow: 0.7rem 0.7rem 0px -4px ${item.color};
          box-shadow: 0.85rem 0.85rem 0px -4px ${item.color};
          background-clip: content-box;
        }
        .row {
          position: relative;
        }
        .taller-items-card-title {
          display: none;
        }
        .taller-items-card-title-container {
          display: flex;
          max-width: 100%;
          margin: auto calc(1rem + 10px);
        }
        .taller-items-card-title .title {
          display: flex;
          font-size: 3.3vw;
          font-weight: 970;
          padding: 15px 1rem;
          text-transform: uppercase;
          margin: auto;
          border-radius: 5px;
          overflow: hidden;
        }
        .taller-items-card-text {
          padding: 14px 0.5rem 0;
          font-size: 18px;
          font-weight: 370;
          overflow: hidden;
        }
        .taller-items-card-text .title {
          display: flex;
          font-size: 22px;
          font-weight: 970;
          padding: 5px 1rem;
          text-transform: uppercase;
          margin: 0 5px 10px;
          border-radius: 5px;
          overflow: hidden;
        }
        .taller-items-card-text .text {
          font-size: 18px;
          padding: 5px 1rem;
          margin: 0 5px 5px;
          border-radius: 5px;
          height: 70px;
          max-height: 70px;
          overflow: hidden;
        }
        .taller-items-card-image {
          margin-left: -0.7rem;
          margin-top: -0.7rem;
          min-height: 100%;
        }
        .taller-items-card-level {
          display: block;
          margin: 0 0.5rem;
        }

        .span-label {
          display: inline-flex;
          height: 32px;
          line-height: 32px;
          margin-right: 5px;
          font-size: 15px;
        }

        .taller-items-card-icon-top {
          padding: 0 0.5rem;
          margin-top: -50px;
          height: auto;
        }
        .taller-items-card-icon-botom {
          display: none;
          padding: 0 0.5rem;
          width: 100%;
        }
        @media screen and (max-width: ${breakpoint.sm}) {
          .taller-items-card-level {
            display: none;
          }
          .taller-items-card-icon-top {
            margin-top: 0;
          }
          .taller-items-card-text .title {
            font-size: 18px;
          }
          .taller-items-card-text .text {
            font-size: 16px;
            height: 80px;
            max-height: 80px;
          }
          .taller-items-card-icon-botom {
            display: flex;
          }
        }
        .taller-items-card-icon-left {
          padding: 3px 0;
        }
        .taller-items-card-icon-left .icon-label {
          margin: 0 0 30px 15px;
        }

        .taller-item-icon {
          display: flex;
          height: 42px;
          margin: 5px 0;
          max-width: auto;
          cursor: pointer;
        }

        .disabled {
          background: transparent !important;
          opacity: 0.6;
          transition: 0.8s;
        }

        .disabled:hover {
          background: rgb(${item.bg}, ${item.bg}, ${item.bg}, 0.08) !important;
          opacity: 1;
        }

        .taller-item-icon .span {
          margin: auto 12px;
          width: 93px;
          font-size: 13.4px;
        }

        .icon-label {
          display: flex;
          padding: 4px 15px;
          border-radius: 5px;
          height: 40px;
          width: 100%;
          margin: 0 5px;
        }

        @media screen and (max-width: ${breakpoint.xs}) {
          .taller-item-icon .span {
            width: 90px;
            margin: auto 8px;
          }
          .taller-items-card-title {
            display: flex;
          }
          .taller-items-card-text .title {
            display: none;
          }
          .taller-items-card-text .text {
            height: auto;
            max-height: 100%;
          }
          .icon-level {
            padding-left: 5px;
            padding-right: 5px;
            min-width: 136px;
          }
          .icon-level .span-label {
            display: block;
            width: 50%;
            text-align: center;
            font-size: 13.4px;
          }
          .icon-level span {
            display: block;
            width: 50%;
            text-align: center;
          }
        }
        @media screen and (max-width: ${breakpoint.xxs}) {
          .taller-items-card-title {
            display: none;
          }
          .taller-items-card-text .title {
            display: flex;
          }
          .taller-item-icon .span {
            max-width: 100%;
          }
        }
        .icon-label span {
          display: inline-flex;
          height: 30px;
          margin: auto 0;
          vertical-align: center;
        }

        .taller-items-card-action {
          text-align: end;
          padding: 10px 10px 20px;
        }
        .btn-continuar {
          border: 3px solid black;
          background-color: ${colors.primary_darken};
          padding: 10px 28px;
          margin: 2rem 0.7rem 0.2rem;
          font-size: 16px;
          line-height: 20px;
          font-weight: bold;
          cursor: pointer;
          display: inline-block;
          transition: 0.3s;
          text-transform: uppercase;
          color: black;
        }
      `}</style>
    </>
  );
}

function RenderTallerItems({ items, squeleton, handleAddMistalleres }) {
  const handleContinue = (item) => {
    const key = item._id;
    handleAddMistalleres(key);
  };
  return (
    <div className="">
      {squeleton && (
        <>
          <ItemSqueleton /> <ItemSqueleton />
        </>
      )}
      <div className="">
        {items.map((item) => (
          <div key={item._id}>
            <Card item={item} handleContinue={handleContinue} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RenderTallerItems;
