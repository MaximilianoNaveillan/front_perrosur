import { colors } from "../../styles/theme.js";
import { signIn, signOut, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";
import { FaRegUserCircle, FaEyeSlash, FaEye } from "react-icons/fa";
//FaRegUserCircle
import Link from "next/link";

export default function Login({ usersession, path, _class }) {
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
          <Link href={path}>
            <a id="modal-close" href="#" title="Cerrar" as="/">
              CERRAR
            </a>
          </Link>
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
              >
                CERRAR SESIÓN
              </a>
            </div>
          ) : (
            <div className="actions">
              <div className="col-12 content-login-correo">
                <div className="omrs-input-group">
                  <label className="omrs-input-filled">
                    <input type="email" required />
                    <span className="omrs-input-label">Correo</span>
                    <span className="omrs-input-helper"></span>
                    <FaRegUserCircle />{" "}
                  </label>
                </div>
                <div className="omrs-input-group">
                  <label className="omrs-input-filled">
                    <input type="password" required />
                    <span className="omrs-input-label">Password</span>
                    <span className="omrs-input-helper"></span>
                    <FaEyeSlash />{" "}
                  </label>
                </div>
              </div>
              {providers &&
                Object.values(providers).map((provider) => (
                  <a
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="link"
                  >
                    Ingresar con {provider.name}
                  </a>
                ))}
              <small>
                AL ingresar tus datos y unirte estás aceptando las póliticas de
                privacidad y condiciones de uso
              </small>
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
          font-size: 1rem;
          font-weight: 500;
          position: absolute;
          right: 0;
          text-align: center;
          top: 0;
          width: 78px;
          text-decoration: none;
          transition: 0.5s all ease;
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
      `}</style>
    </>
  );
}
