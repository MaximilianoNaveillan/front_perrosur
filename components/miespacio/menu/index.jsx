import { useState, useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { colors, breakpoint, fonts } from '../../../styles/theme';

export default function Menu({
  setToggleLeft,
  toggleleft,
  categorias,
  mistalleres,
  misrecursos,
}) {
  const [poriniciar, setPoriniciar] = useState(0);
  const [encurso, setEncurso] = useState(0);
  const [terminado, setTerminado] = useState(0);
  const [video, setVideo] = useState(0);
  const [actividad, setActividad] = useState(0);
  const [test, setTest] = useState(0);
  const [reunion, setReunion] = useState(0);
  const [documento, setDocumento] = useState(0);

  useEffect(() => {
    setPoriniciar(mistalleres.filter((ele) => ele.status === false).length);
    setEncurso(mistalleres.filter((ele) => ele.status === true).length);
    setTerminado(mistalleres.filter((ele) => ele.status === null).length);
  }, [mistalleres]);

  useEffect(() => {
    setVideo(
      misrecursos.filter(
        (ele) => !ele.status && ele.recursoitem.type === 'video'
      ).length
    );
    setActividad(
      misrecursos.filter(
        (ele) => !ele.status && ele.recursoitem.type === 'actividad'
      ).length
    );
    setTest(
      misrecursos.filter(
        (ele) => !ele.status && ele.recursoitem.type === 'test'
      ).length
    );
    setReunion(
      misrecursos.filter(
        (ele) => !ele.status && ele.recursoitem.type === 'reunion'
      ).length
    );
    setDocumento(
      misrecursos.filter(
        (ele) => !ele.status && ele.recursoitem.type === 'documento'
      ).length
    );
  }, [misrecursos]);
  return (
    <>
      <div className={`menu-right ${toggleleft ? 'force-menu-right' : ''}`}>
        <div
          className={`togle ${toggleleft ? 'force-togle' : 'force-no-togle'}`}
        >
          <div className="control">
            <div>
              <button type="button" onClick={() => setToggleLeft(!toggleleft)}>
                <i>
                  <FaAngleRight />
                </i>
              </button>
            </div>
          </div>
        </div>
        <div className="content-nav-right">
          <div>
            <h2 className="mt-0">TALLERES</h2>
            <p className="subtitle">Por Categoría</p>
            <ul>
              {categorias.map((item) => (
                <li key={item._id}>
                  <Link href={`miespacio/#c-${item._id}`} passHref>
                    <a>{item.nombre}</a>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="subtitle">Por Dificultad</p>
            <ul>
              <Link href="miespacio/#dif-1" passHref>
                <li>
                  <a>introductorio</a>
                  <span className="level">
                    <Image
                      src="/images/ICONONIVEL1.png"
                      alt="portada-entrelazar"
                      height="25px"
                      width="80px"
                    />
                  </span>
                </li>
              </Link>
              <Link href="miespacio/#dif-2" passHref>
                <li>
                  <a>intermedio</a>
                  <span className="level">
                    <Image
                      src="/images/ICONONIVEL2.png"
                      alt="portada-entrelazar"
                      height="25px"
                      width="80px"
                    />
                  </span>
                </li>
              </Link>
              <Link href="miespacio/#dif-3" passHref>
                <li>
                  <a>avanzado</a>
                  <span className="level">
                    <Image
                      src="/images/ICONONIVEL3.png"
                      alt="portada-entrelazar"
                      height="25px"
                      width="80px"
                    />
                  </span>
                </li>
              </Link>
            </ul>
            <p className="subtitle">Por Duración</p>
            <ul>
              <li>
                <Link href="miespacio/#dur-20-30" passHref>
                  <a>
                    <span className="clock">
                      <Image
                        src="/images/ICONORELOJ.png"
                        alt="portada-entrelazar"
                        height="23px"
                        width="23px"
                      />
                    </span>
                    20-30min
                  </a>
                </Link>
              </li>
              <li>
                <Link href="miespacio/#dur-31-60" passHref>
                  <a>
                    <span className="clock">
                      <Image
                        src="/images/ICONORELOJ.png"
                        alt="portada-entrelazar"
                        height="23px"
                        width="23px"
                      />
                    </span>
                    31-60min
                  </a>
                </Link>
              </li>
              <li>
                <Link href="miespacio/#dur-61-90" passHref>
                  <a>
                    <span className="clock">
                      <Image
                        src="/images/ICONORELOJ.png"
                        alt="portada-entrelazar"
                        height="23px"
                        width="23px"
                      />
                    </span>
                    61-90min
                  </a>
                </Link>
              </li>
              <li>
                <Link href="miespacio/#dur-91-120" passHref>
                  <a>
                    <span className="clock">
                      <Image
                        src="/images/ICONORELOJ.png"
                        alt="portada-entrelazar"
                        height="23px"
                        width="23px"
                      />
                    </span>
                    91-120min
                  </a>
                </Link>
              </li>
            </ul>
            <p className="subtitle">Por Recursos</p>
            <ul>
              <li>
                <a>video</a>
                <span className="rec">
                  <Image
                    src="/images/ICONOGRUPAL.png"
                    alt="portada-entrelazar"
                    height="23px"
                    width="23px"
                  />
                </span>
              </li>
              <li>
                <a>actividades</a>
                <span className="rec">
                  <Image
                    src="/images/ICONOACTIVIDADES.png"
                    alt="portada-entrelazar"
                    height="23px"
                    width="23px"
                  />
                </span>
              </li>
              <li>
                <a>test</a>
                <span className="rec">
                  <Image
                    src="/images/ICONOTEST.png"
                    alt="portada-entrelazar"
                    height="23px"
                    width="23px"
                  />
                </span>
              </li>

              <li>
                <a>reunión tallerista</a>
                <span className="rec">
                  <Image
                    src="/images/ICONOREUNION.png"
                    alt="portada-entrelazar"
                    height="23px"
                    width="23px"
                  />
                </span>
              </li>
              <li>
                <a>documento</a>
                <span className="rec">
                  <Image
                    src="/images/ICONODOCUMENTO.png"
                    alt="portada-entrelazar"
                    height="23px"
                    width="23px"
                  />
                </span>
              </li>
            </ul>
            <h2>RECURSOS</h2>
            <p>
              Videos
              <i>{video}</i>
            </p>
            <p>
              Actividades
              <i>{actividad}</i>
            </p>
            <p>
              Aplicación de test
              <i>{test}</i>
            </p>
            <p>
              Reunion
              <i>{reunion}</i>
            </p>
            <p>
              Documentos
              <i>{documento}</i>
            </p>
            <h2>MIS ENTRELAZAR</h2>
            <p>
              Por iniciar
              <i>{poriniciar}</i>
            </p>
            <p>
              En Curso
              <i>{encurso}</i>
            </p>
            <p>
              Finalizados
              <i>{terminado}</i>
            </p>
            <h2>PERFIL ENTRELAZAR</h2>
            <p>Ver Perfil</p>
            <p>Mensajes</p>
            <p>Foro</p>
            <p>Configuración de cuenta</p>
            <p>Notificaciones</p>
            <p>Ayuda</p>
            <p>Salir</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .togle {
          position: absolute;
          top: 0;
          right: -22px;
          width: 86px;
          height: 3.7rem;
          transition: 0.3s;
        }
        .force-togle {
          margin-right: -4.2rem;
          transition: 0.3s;
        }

        .control {
          width: 100%;
          height: 100%;
        }
        .control div {
          display: flex;
          align-items: start;
          height: 100%;
        }
        .mt-0 {
          margin-top: 0 !important;
        }

        button {
          display: flex;
          position: relative;
          justify-content: space-around;
          align-items: center;
          color: #e8e8e8;
          height: 2.7rem;
          width: 2.7rem;
          border-radius: 50%;
          border: none;
          margin-right: -0.4rem;
          margin-top: 65px;
          background: ${colors.green};
          font-size: 30px;
          font-weight: 400;
          line-height: 0.777143;
          text-align: center;
          white-space: nowrap;
          vertical-align: middle;
          cursor: pointer;
          decoration: none;
          transition: 0.4s;
          z-index: 3;
        }
        button:hover {
          background-color: rgb(0, 0, 0, 0.3);
        }
        @media screen and (min-width: ${breakpoint.media}) {
          .force-no-togle button {
            transform: rotate(180deg);
          }

          .force-togle button {
            transform: none;
            background: ${colors.green};
          }
        }
        @media screen and (max-width: ${breakpoint.media}) {
          .togle {
            margin-right: -4.2rem;
          }

          .force-togle {
            margin-right: 0.1rem;
            transition: 0.3s;
          }
          .force-togle button {
            transform: rotate(180deg);
          }

          .force-no-togle button {
            transform: none;
            background: ${colors.green};
          }
        }

        .content-nav-right {
          max-width: 100%;
          width: calc(100% -1rem);
          height: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0;
        }
        .content-nav-right div {
          height: 100%;
          overflow-x: hidden;
          overflow-y: scroll;
          padding: 1.7rem 0.4rem 1.7rem 1.7rem;
        }
        h2 {
          font-size: 20px;
          font-weight: 1000;
          margin: 2rem 0 1rem;
        }
        p {
          color: ${colors.primary};
          font-size: 18px;
          font-weight: 370;
          opacity: 0.9;
          margin: 0.3rem 0;
        }
        p i {
          float: right;
          margin-right: 12px;
          background: white;
          width: 30px;
          color: black;
          text-align: center;
          font-size: 14.4px;
          font-style: normal;
          font-family: ${fonts.base};
          font-weight: 500;
          line-height: 18px;
          border-radius: 3px;
          opacity: 0.5;
        }
        .subtitle {
          margin: 0 0 2rem;
        }
        ul {
          margin-bottom: 2.7rem;
          list-style: none;
        }
        li {
          height: 25px;
          width: 100%;
          margin: 1px;
          padding: 0;
          cursor: pointer;
          transition: 0.5s;
        }
        li:hover {
          color: white;
        }
        a {
          display: flex;
          height: 25px;
          line-height: 25px;
          width: 100%;
          font-size: 1rem;
          font-weight: 440;
          cursor: pointer;
          text-decoration: none;
          text-transform: capitalize;
          color: black;
        }
        .level {
          display: flex;
          margin-left: 115px;
          margin-top: -25px;
        }
        .clock {
          display: inline-flex;
          padding: 3px 6px 0 0;
        }
        .rec {
          display: flex;
          margin-left: 150px;
          margin-top: -25px;
        }
      `}</style>
    </>
  );
}
