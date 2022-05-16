import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaTrashAlt, FaPenSquare } from 'react-icons/fa';
import Link from 'next/link';
import { colors } from '../../styles/theme';
import ActualidadForm from './actualidadform';
import axiosFetch from '../../config/axios';

const S_URL = process.env.SERVER_URL;

export default function Acualidad({ handleDelete, actualidads }) {
  const [classModal, setClassModal] = useState('modal-window');
  const [keyDelete, setKeyDelete] = useState(undefined);
  const [textDelete, setTextDelete] = useState('');
  const router = useRouter();
  const { pathname, asPath } = router;

  const handleConfirmRemove = async (id, name) => {
    setKeyDelete(id);
    setTextDelete(`¿ Confirmas eliminar de la actualidad a ${name} ?`);
  };
  const handleRemove = async () => {
    handleDelete();
    axiosFetch
      .delete(
        `/api/actualidad`,
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
      .catch((error) => {
        if (error) router.reload(window.location.pathname);
      });
  };

  useEffect(() => {
    if (asPath.includes('#actualidad-form')) {
      setClassModal('modal-window modal-on');
    } else {
      setClassModal('modal-window');
    }
  });
  const optionsdate = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
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
        <ActualidadForm _class={classModal} path={pathname} />
      )}
      <div id="actualidad" className="container">
        <div className="content">
          <div className="row">
            <div className="col-12">
              <h1 className=" title">ACTUALIDAD</h1>
            </div>
            {actualidads.map((item) => (
              <div key={item._id} className="col-3 md-6 xs-12">
                <div className="content-img">
                  <div className="card-img">
                    <div className="img-overlay">
                      <div className="img">
                        <Image
                          src={`${S_URL}/uploadimg/image/actualidad-blog-${item._id}.png`}
                          alt={item.name}
                          objectFit="cover"
                          layout="fill"
                          priority
                        />
                      </div>
                      <div className="overlay">
                        <div className="actions-date">
                          {new Date(item.date).toLocaleDateString(
                            'es-ES',
                            optionsdate
                          )}
                          .
                        </div>
                        <div className="actions">
                          <span>
                            <Link
                              href={`/miespacio/blog#actualidad-form?id:${item._id}`}
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
          background: white;
          background-color: ${colors.primary};
          min-height: 430px;
        }
        .content {
          padding: 1rem 1rem;
          border: 0.3rem solid transparent;
          background-color: ${colors.primary};
        }
        .title {
          color: ${colors.magenta};
          text-align: left;
          padding: 4rem 1.7rem;
          font-weight: 1000;
          text-shadow: 3px 6px 0px black;
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
          -webkit-box-shadow: 12px 12px 0px -2px ${colors.primary_darken};
          box-shadow: 12px 12px 0px -2px ${colors.primary_darken};
          margin: 0.7rem;
          overflow: hidden;
        }
        .text {
          font-size: 18px;
          max-height: 65%;
          max-width: 90%;
          overflow: hidden;
        }
        .actions-date {
          position: absolute;
          font-size: 18px;
          left: 10px;
          top: 10px;
          right: 6rem;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
