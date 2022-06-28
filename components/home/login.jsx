import { signIn, signOut, getProviders } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
// FaRegUserCircle
import Link from 'next/link';
import { colors } from '../../styles/theme';
import Spiner from '../Spiner';

export default function Login({ handleCloseModalLogin, usersession, _class }) {
  const [providers, setProviders] = useState([]);
  const [email, setEmail] = useState('');
  const [load, setLoad] = useState(false);

  // const handleOAuthSignIn = (provider) => () => signIn(provider);

  // eslint-disable-next-line consistent-return
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return false;
    setLoad(true);
    signIn('email', { email, redirect: true });
  };

  useEffect(() => {
    (async () => {
      const prov = await getProviders();
      setProviders(prov);
    })();
  }, []);

  return (
    <>
      <div id="login-modal" className={_class}>
        {load && (
          <div className="load">
            <div className="card-text-load">
              <div className="spiner">
                <Spiner />
              </div>
            </div>
          </div>
        )}
        <div>
          <button
            type="button"
            id="modal-close"
            onClick={(e) => handleCloseModalLogin(e)}
          >
            CERRAR
          </button>
          <h1>TALLER PERRO SUR</h1>
          <div>
            Plataforma que te permite acceder a un mundo de artes y oficios de
            formas simple y humana
          </div>
          {usersession ? (
            <div className="actions">
              <a
                onClick={() => signOut()}
                title="CERRAR SESIÓN"
                className="link"
                href="#!"
              >
                CERRAR SESIÓN
              </a>
            </div>
          ) : (
            <div className="actions">
              <div className="col-12 content-login-correo">
                <form onSubmit={handleSubmit}>
                  <div className="omrs-input-group">
                    <label htmlFor="email" className="omrs-input-filled">
                      <input
                        id="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <span className="omrs-input-label">Correo</span>
                      <span className="omrs-input-helper" />
                      <FaRegUserCircle />{' '}
                    </label>
                  </div>
                  <button className="btn-dialog" type="submit">
                    Login
                  </button>
                </form>
              </div>
              {providers &&
                Object.values(providers).map((provider) => (
                  <div key={provider.name}>
                    {provider.name !== 'Email' && (
                      <a
                        onClick={() => signIn(provider.id)}
                        className="link"
                        href="#!"
                      >
                        Ingresar con {provider.name}
                      </a>
                    )}
                  </div>
                ))}
              <p>
                <small>
                  AL ingresar tus datos y unirte estás aceptando las políticas
                  de privacidad y condiciones de uso
                </small>
              </p>
              <p>
                <Link href="/terminosycondiciones">Términos y condiciones</Link>
              </p>
              <p>
                <Link href="/politicadeprivacidad">
                  Políticas de privacidad
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        h1 {
          padding-top: 1rem;
        }
        .load {
          position: fixed;
          top: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.45) !important;
          border: none !important;
          height: 100vh !important;
          width: 100vw !important;
          z-index: 9;
        }
        .card-text-load {
          height: 100%;
          z-index: 9;
        }
        .load .spiner {
          display: flex;
          height: 100%;
          overflow: hidden;
          width: 100%;
          justify-content: space-around;
          align-items: center;
          z-index: 9;
        }
        .modal-window {
          position: fixed;
          background-color: rgba(255, 255, 255, 0.45);

          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 999;
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s;
        }
        .modal-on {
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
        }
        .modal-window > div {
          width: 400px;
          max-width: 98%;
          max-height: 98%;
          overflow-y: auto;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 2em;
          background: ${colors.primary_darken};
          border: 0.3rem solid black;
        }
        .modal-window header {
          font-weight: bold;
        }
        .modal-window h1 {
          font-size: 150%;
          margin: 0 0 15px;
        }
        #modal-close {
          background-color: ${colors.primary};
          color: black;
          line-height: 2rem;
          margin: 0.5rem 0.5rem 0 0;
          font-size: 0.95rem;
          font-weight: 500;
          position: absolute;
          right: 0;
          top: 0;
          width: 78px;
          transition: 0.5s all ease;
          text-align: center;
          white-space: nowrap;
          vertical-align: middle;
          -ms-touch-action: manipulation;
          touch-action: manipulation;
          cursor: pointer;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          border: none;
          cursor: pointer;
        }
        #modal-close:hover {
          background-color: ${colors.magenta};
          color: white;
        }
        .actions {
          width: 100%;
          text-align: center;
        }
        .content-login-correo {
          margin-top: 2rem;
          margin-bottom: 2rem;
          background: ${colors.secondary_lighten};
          text-align: left;
          padding: 0.7rem 0;
        }
        .content-login-correo button {
          margin: 0 8px;
          width: calc(100% - 16px);
        }
        .omrs-input-group label input {
          font-size: 14px;
          margin-bottom: 0;
        }
        .link {
          display: block;
          text-decoration: none;
          background: ${colors.secondary_lighten};
          color: black;
          margin: auto;
          text-align: center;
          margin-top: 1.5rem;
          margin-bottom: 0.7rem;
          padding: 0.7rem;
          font-size: 1.1rem;
          transition: 0.5s all ease;
          cursor: pointer;
        }
        .link:hover {
          background: ${colors.secondary};
        }
        p {
          margin: 0.7rem 0;
        }
      `}</style>
    </>
  );
}
