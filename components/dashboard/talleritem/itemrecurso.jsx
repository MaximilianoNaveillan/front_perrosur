import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { breakpoint, colors } from '../../../styles/theme';
import Modulos from './modulo';

const S_URL = process.env.SERVER_URL;
const _URL = process.env.BASE_URL;

function ItemsRecursos({ setRecurso, recurso, hadleMountTaller, setload }) {
  const [tallerista, setTallerista] = useState('...');
  const [taller, setTaller] = useState({});

  const userHandler = () => {
    axios
      .patch(
        `${_URL}/api/usuario`,
        { _id: recurso.tallerista },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        setTallerista(res.data.usuario.nombre);
      })
      .catch((error) => {
        throw error;
      });
  };

  const hadleRebuild = () => {
    hadleMountTaller();
    setload(true);
  };
  useEffect(async () => {
    userHandler();
    setTaller(recurso);
  }, []);
  return (
    <>
      <div className="add-card">
        <div className="add-card-text" role="presentation">
          <div className="conten-card">
            <div className="content">
              <div className="contnet-card-text">
                <div className="row">
                  <div className="col-6 sm-10 xs-12 ">
                    <div className="content-head">
                      <div className="title">{taller.titulo}</div>
                      <div className="subtitle">
                        <small>con </small>
                        {tallerista}
                      </div>
                    </div>
                    <div className="content-image image-left">
                      <div>
                        <Image
                          src={`${S_URL}/uploadimg/image/taller-item-${taller._id}-${taller.imagen}.png`}
                          height="300"
                          width="400"
                          alt={`taller-item-${taller._id}-${taller.imagen}`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6 sm-2 xs-0">
                    <div className="content-image image-right">
                      <Image
                        alt="portada-entrelazar2"
                        src="/images/acuarela.png"
                        height="300"
                        width="400"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="content-modulo">
                    <Modulos taller={taller} hadleRebuild={hadleRebuild} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card-action">
                <div>
                  <button
                    type="button"
                    className="btn-dialog btn-cancel"
                    onClick={() => setRecurso(null)}
                  >
                    cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .add-card {
          display: flex;
          height: 100%;
          max-height: 100vh;
          overflow: hidden;
          width: 100%;
        }

        .add-card-text {
          overflow-y: auto;
          overflow-x: hidden;
          height: auto;
          min-width: 100%;
          width: 100%;
          max-width: 100%;
          height: 100%;
          padding: 0;
          background: ${colors.secondary_lighten};
          overflow: hidden;
        }
        .conten-card {
          height: calc(100% - 70px);
          min-height: calc(100% - 70px);
          max-height: calc(100% - 70px);
          overflow-y: auto;
        }
        .contnet-card-text {
          width: 100%;
          min-width: 100%;
          max-width: 100%;
          padding: 1.7rem;
        }
        .content-image {
          display: flex;
          width: 100%;
        }
        .image-right {
          justify-content: space-around;
          align-items: center;
          height: 100%;
          padding: 0 1.7rem;
        }
        .image-left {
          justify-content: start;
        }
        @media screen and (max-width: ${breakpoint.xs}) {
          .image-left {
            justify-content: center;
          }
        }

        .card-action {
          height: 70px;
          min-height: 70px;
          max-height: 70px;
          padding: 01.7rem;
          display: inline-flex;
          text-align: end;
          width: 100%;
          align-items: center;
          justify-content: end;
          background: white;
        }
        .title {
          font-size: 32px;
          text-transform: uppercase;
          font-weight: 1000;
          line-height: 42px;
        }
        .subtitle {
          font-size: 26px;
          line-height: 46px;
          text-transform: capitalize;
        }
        .content-modulo {
          padding: 2rem;
          width: 100%;
        }
      `}</style>
    </>
  );
}

export default ItemsRecursos;
