import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaTrashAlt, FaPenSquare } from 'react-icons/fa';
import Link from 'next/link';
import { colors } from '../../styles/theme';
import EquipoForm from './equipoform';
import axiosFetch from '../../config/axios';

export default function Equipo({ equipos, handleDelete }) {
  const [classModal, setClassModal] = useState('modal-window');
  const [keyDelete, setKeyDelete] = useState(undefined);
  const [textDelete, setTextDelete] = useState('');
  const router = useRouter();
  const { pathname, asPath } = router;

  const handleConfirmRemove = async (id, name) => {
    setKeyDelete(id);
    setTextDelete(`¿ Confirmas eliminar del equipo a ${name} ?`);
  };

  const handleRemove = async () => {
    handleDelete();
    axiosFetch
      .delete(
        `/api/equipo`,
        { data: keyDelete },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(() => {
        router.reload(window.location.pathname);
      })
      .catch(() => {
        router.reload(window.location.pathname);
      });
  };

  useEffect(() => {
    if (asPath.includes('#equipo-form')) {
      setClassModal('modal-window modal-on');
    } else {
      setClassModal('modal-window');
    }
  });

  return (
    <>
      {keyDelete && (
        <div
          className="modal"
          onClick={() => setKeyDelete('')}
          role="presentation"
        >
          <div
            className="card-modal"
            onClick={(e) => {
              e.stopPropagation();
            }}
            role="presentation"
          >
            <div className="card-modal-text">
              <p>{textDelete}</p>
            </div>
            <div className="card-modal-action">
              <a href="#!" onClick={handleRemove}>
                CONFIRMAR
              </a>
            </div>
          </div>
        </div>
      )}
      {classModal !== 'modal-window' && (
        <EquipoForm _class={classModal} path={pathname} />
      )}
      <div id="equipo" className="container">
        <div className="content">
          <div className="row">
            <div className="col-12">
              <h1 className=" title">EL EQUIPO</h1>
            </div>
            {equipos.map((item) => (
              <div key={item._id} className="col-3 md-6 xs-12">
                <div className="content-img">
                  <div className="card-img">
                    <div className="img-overlay">
                      <div className="img">
                        <Image
                          src={`/images/team-index-${item._id}.png`}
                          alt={item.nombre}
                          objectFit="cover"
                          layout="fill"
                          priority
                        />
                      </div>
                      <div className="overlay">
                        <div className="actions">
                          <span>
                            <Link
                              href={`/miespacio/blog#equipo-form?id:${item._id}`}
                              title="Cerrar"
                              passHref
                            >
                              <a>
                                <i>
                                  <FaPenSquare />
                                </i>
                              </a>
                            </Link>
                            <a
                              onClick={() =>
                                handleConfirmRemove(item._id, item.nombre)
                              }
                              href="#!"
                            >
                              <i>
                                <FaTrashAlt />
                              </i>
                            </a>
                          </span>
                        </div>
                        <div className="text">
                          {item.nombre.replace(' ', '\n')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 0.5rem;
          background-color: ${colors.secondary};
          min-height: 430px;
        }
        .content {
          padding: 1rem 1rem;
          border: 0.3rem solid black;
          background-color: ${colors.secondary};
        }
        .title {
          margin: 0.7rem;
          font-weight: 1000;
          text-shadow: 6px 6px 0px ${colors.secondary_darken};
        }

        .card-img {
          position: absolute;
          font-size: 25px;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: white;
          display: flex;
          -webkit-box-shadow: 12px 12px 0px -2px ${colors.secondary_darken};
          box-shadow: 12px 12px 0px -2px ${colors.secondary_darken};
          margin: 0.7rem;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
