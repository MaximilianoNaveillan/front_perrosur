import { signIn, signOut, getProviders } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { FaRegUserCircle, FaEyeSlash } from 'react-icons/fa';
// FaRegUserCircle
import Link from 'next/link';
import { colors } from '../../styles/theme';

export default function Login({ handleCloseModalLogin, usersession, _class }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    (async () => {
      const prov = await getProviders();
      setProviders(prov);
    })();
  }, []);

  return (
    <>
      <div id="login-modal" className={_class}>
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
                <div className="omrs-input-group">
                  <label htmlFor="email" className="omrs-input-filled">
                    <input id="email" type="email" required />
                    <span className="omrs-input-label">Correo</span>
                    <span className="omrs-input-helper" />
                    <FaRegUserCircle />{' '}
                  </label>
                </div>
                <div className="omrs-input-group">
                  <label htmlFor="password" className="omrs-input-filled">
                    <input id="password" type="password" required />
                    <span className="omrs-input-label">Password</span>
                    <span className="omrs-input-helper" />
                    <FaEyeSlash />{' '}
                  </label>
                </div>
              </div>
              {providers &&
                Object.values(providers).map((provider) => (
                  <a
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="link"
                    href="#!"
                  >
                    Ingresar con {provider.name}
                  </a>
                ))}
              <p>
                <small>
                  AL ingresar tus datos y unirte estás aceptando las póliticas
                  de privacidad y condiciones de uso
                </small>
              </p>
              <p>
                <Link href="/terminosycondiciones">Terminos y condiciones</Link>
              </p>
              <p>
                <Link href="/politicadeprivacidad">
                  Póliticas de privacidad
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        label {
          bacground-color: red;
        }
        h1 {
          padding-top: 1rem;
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
