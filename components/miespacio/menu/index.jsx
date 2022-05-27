import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';
import { colors, breakpoint } from '../../../styles/theme';

export default function Menu({ setToggleLeft, toggleleft }) {
  const categorias = [
    'pintura',
    'Ilustración',
    'Dibujo',
    'Encuadernación',
    'impreción',
    'Diseño',
    'fotogrfia',
    'audiovisual',
    'arteterapia',
  ];
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
                <li key={item}>
                  <a>{item}</a>
                </li>
              ))}
            </ul>

            <p className="subtitle">Por Dificultad</p>
            <ul>
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
            </ul>
            <p className="subtitle">Por Duración</p>
            <ul>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
            </ul>
            <p className="subtitle">Por Recursos</p>
            <ul>
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
                <a>grupal</a>
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
                <a>docuento</a>
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
            <p>Descarga de documentos</p>
            <p>Aplicación de test</p>
            <p>Actividades lúdicas</p>
            <p>Links de referencia</p>
            <p>Multimedia</p>
            <h2>MIS ENTRELAZAR</h2>
            <p>Mi lista de favoritos</p>
            <p>En Curso</p>
            <h2>PERFIL ENTRELAZAR</h2>
            <p>Ver Perfil</p>
            <p>Mensajes</p>
            <p>Mis Talleres</p>
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
          right: 4px;
          width: 54px;
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
          margin-top: 0.4rem;
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
