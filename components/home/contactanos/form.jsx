import { useState } from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa';

export default function Form() {
  const [name, setName] = useState('');
  const [namevalid, setNamevalid] = useState(true);
  const [email, setEmail] = useState('');
  const [emailvalid, setEmailvalid] = useState(true);
  const [fono, setFono] = useState('+56 ');
  const [fonovalid, setFonovalid] = useState(true);
  const [direccion, setDireccion] = useState('');
  const [compania, setCompania] = useState('');

  const nameChange = (e) => {
    const val = e.target.value;
    const valid = !!val;
    setNamevalid(valid);
    setName(val);
  };
  const emailChange = (e) => {
    const val = e.target.value;
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(val)) {
      setEmailvalid(true);
    } else if (!regEx.test(val) && val !== '') {
      setEmailvalid(false);
    } else {
      setEmailvalid(false);
    }
    setEmail(val);
  };
  const putFono = (val) => {
    if (val[0] !== '+' || /^\+\d{2,3}\s\d{10}$/.test(val)) {
      setFono('+56 ');
      return;
    }
    // eslint-disable-next-line no-unused-expressions
    val.includes('+56 ') ? setFono(val) : setFono('+56 ');
  };
  const fonoChange = (e) => {
    const val = e.target.value;
    setFonovalid(val.length > 4);
    putFono(val);
  };
  const direccionChange = (e) => {
    const val = e.target.value;
    setDireccion(val);
  };
  const companiaChange = (e) => {
    const val = e.target.value;
    setCompania(val);
  };

  const nameValid = namevalid
    ? 'omrs-input-filled'
    : `omrs-input-filled omrs-input-danger`;

  const emailValid = namevalid
    ? 'omrs-input-filled'
    : `omrs-input-filled omrs-input-danger`;

  const fonoValid = fonovalid
    ? 'omrs-input-filled'
    : `omrs-input-filled omrs-input-danger`;

  return (
    <>
      <div className="container-form">
        <div className="content-form">
          <div className="row">
            <div className="col-12">
              <p className="title">CUÉNTANOS MÁS SOBRE TI</p>
            </div>
            <div className="col-6 xs-12">
              <div className="omrs-input-group">
                <label htmlFor="c_name" className={nameValid}>
                  <input
                    id="c_name"
                    required
                    value={name}
                    onChange={nameChange}
                  />
                  <span className="omrs-input-label">NOMBRE</span>
                  <span className="omrs-input-helper">
                    {namevalid ? <>&nbsp;</> : 'nombre requerido'}
                  </span>
                  <FaUser />
                </label>
              </div>
            </div>
            <div className="col-6 xs-12">
              <div className="omrs-input-group">
                <label htmlFor="c_email" className={emailValid}>
                  <input
                    id="c_email"
                    type="email"
                    required
                    value={email}
                    onChange={emailChange}
                  />
                  <span className="omrs-input-label">EMAIL</span>
                  <span className="omrs-input-helper">
                    {emailvalid ? <>&nbsp;</> : 'email inválido'}
                  </span>
                  <FaEnvelope />
                </label>
              </div>
            </div>
            <div className="col-6 xs-12">
              <div className="omrs-input-group">
                <label htmlFor="c_fono" className={fonoValid}>
                  <input
                    id="c_fono"
                    type="tel"
                    required
                    value={fono}
                    onChange={fonoChange}
                  />
                  <span className="omrs-input-label">TELEFONO</span>
                  <span className="omrs-input-helper">
                    {fonovalid ? <>&nbsp;</> : 'fono requerido'}
                  </span>
                  <FaUser />
                </label>
              </div>
            </div>
            <div className="col-6 xs-12">
              <div className="omrs-input-group">
                <label htmlFor="c_direccion" className="omrs-input-filled">
                  <input
                    id="c_direccion"
                    value={direccion}
                    onChange={direccionChange}
                  />
                  <span className="omrs-input-label">DIRECCION</span>
                  <FaUser />
                </label>
              </div>
            </div>
            <div className="col-12">
              <div className="omrs-input-group">
                <label htmlFor="compania" className="omrs-input-filled">
                  <input
                    value={compania}
                    onChange={companiaChange}
                    id="compania"
                  />
                  <span className="omrs-input-label">COMPAÑIA</span>
                  <FaUser />
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="button">Enviar</button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container-form {
          position: relative;
          height: 100%;
          width: 100%;
          padding: 6rem 0 0;
        }
        .title {
          font-size: 1.5rem;
          font-weight: 1000;
          padding-bottom: 3.8rem;
        }
        .content-form {
          margin: auto;
        }

        button {
          background-color: transparent; /* Green */
          border: none;
          color: black;
          padding-left: 32px;
          padding-right: 32px;
          height: 46px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          float: right;
          cursor: pointer;
          font-size: 1.96rem;
          font-weight: 900;
          z-index: 1;
          position: relative;
          border-radius: 4px;
        }
        button:hover {
          background: rgba(73, 133, 224, 0.12);
        }
      `}</style>
    </>
  );
}
