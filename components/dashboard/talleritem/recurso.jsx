import Image from 'next/image';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { breakpoint } from '../../../styles/theme';

const hw = '56px';

function IconVideo() {
  return (
    <Image
      src="/images/ICONOGRUPAL.png"
      alt="icon-entrelazar-video"
      height={hw}
      width={hw}
    />
  );
}

function IconActividad() {
  return (
    <Image
      src="/images/ICONOACTIVIDADES.png"
      alt="icon-entrelazar-actividad"
      height={hw}
      width={hw}
    />
  );
}
function IconTest() {
  return (
    <Image
      src="/images/ICONOTEST.png"
      alt="icon-entrelazar-test"
      height={hw}
      width={hw}
    />
  );
}
function IconReunion() {
  return (
    <Image
      src="/images/ICONOREUNION.png"
      alt="icon-entrelazar-video"
      height={hw}
      width={hw}
    />
  );
}
function IconDocumento() {
  return (
    <Image
      src="/images/ICONODOCUMENTO.png"
      alt="icon-entrelazar-documento"
      height={hw}
      width={hw}
    />
  );
}

function Icon({ type }) {
  return (
    <>
      <span className="rec">{type === 'video' && <IconVideo />}</span>
      <span className="rec">{type === 'actividad' && <IconActividad />}</span>
      <span className="rec">{type === 'test' && <IconTest />}</span>
      <span className="rec">{type === 'reunión' && <IconReunion />}</span>
      <span className="rec">{type === 'documento' && <IconDocumento />}</span>
    </>
  );
}

function Recurso({ recursos, handleEditRecurso }) {
  return (
    <>
      <div className="container-recurso">
        {recursos.map((item) => (
          <div key={`recurso-${item._id}`} className="">
            <div className="row">
              <div className="col-2">
                <Icon type={item.type} />
              </div>
              <div className="col-7 xs-10">
                <div className="content-title">
                  <div className="title">{item.nombre}</div>
                </div>
              </div>
              <div className="col-3 xs-12">
                <div className="action">
                  <i
                    onClick={() => handleEditRecurso(item)}
                    role="presentation"
                  >
                    <FaPen />
                  </i>
                  <i role="presentation">
                    <FaTrashAlt />
                  </i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container-recurso {
          margin-top: 1.7rem;
        }
        .row {
          width: 100%;

          margin: 1rem 0;
        }
        .content-title {
          overflow: hidden;
          display: inline-flex;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
          height: 100%;
        }
        .title {
          margin: auto 0.7rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 20px;
          text-transform: uppercase;
          font-weight: 300;
        }
        .action {
          display: flex;
          justify-content: end;
          align-items: center;
        }

        .action i {
          margin: auto 20px auto 0;
          font-size: 19.8px;
          padding: 11.2px;
          height: 43px;
          width: 43px;
          border-radius: 50%;
          color: rgb(0, 0, 0, 0.4);
          background: white;
          cursor: pointer;
          transition: 0.6s;
        }
        .action i:hover {
          color: black;
          background: rgb(0, 0, 0, 0.2);
        }
        @media screen and (max-width: ${breakpoint.xs}) {
          .action i {
            margin-right: 15px;
            font-size: 14.8px;
            padding: 8.2px;
            height: 32px;
            width: 32px;
          }
        }
      `}</style>
    </>
  );
}

export default Recurso;
