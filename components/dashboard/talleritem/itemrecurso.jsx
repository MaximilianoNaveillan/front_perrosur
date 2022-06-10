import { useEffect, useState } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import axios from 'axios';
import Image from 'next/image';
import { breakpoint, colors, fonts } from '../../../styles/theme';
import Alert from '../../utils/alert';

const S_URL = process.env.SERVER_URL;
const _URL = process.env.BASE_URL;

const _defaultModuleForm = {
  nombre: '',
  detalle: '',
};
const _defaulterrormodulo = {
  statusCode: 500,
  timestamp: new Date().toISOString(),
  class: 'server-error',
  message: '¡ Error del servidor, no se puede obtener módulo !',
};
const defaulterror = {
  statusCode: 500,
  timestamp: new Date().toISOString(),
  class: 'server-error',
  message: '¡ Error del servidor, no se puede obtener el taller !',
};
function Add({ taller, hadleRebuild }) {
  const [form, setForm] = useState(_defaultModuleForm);
  const [add, setAdd] = useState(false);
  const [alert, setAlert] = useState(undefined);

  const handleAddModule = (modulo) => {
    const { modulos } = taller;
    const tempArr = [...modulos];
    tempArr.push(modulo._id);
    const id = taller._id;
    axios
      .put(
        `${S_URL}/talleritem/${id}`,
        { id, modulos: tempArr },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        setAlert(res.data);
        hadleRebuild();
        setAdd(!add);
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.class
        ) {
          setAlert(error.response.data);
        } else {
          setAlert(defaulterror);
        }
      });
  };

  const HandlePost = () => {
    const { nombre, detalle } = form;

    if (!nombre)
      setAlert({
        statusCode: 400,
        timestamp: new Date().toISOString(),
        class: 'bad-request',
        message: '¡ Ingresa el nombre del módulo!',
      });
    if (!detalle)
      setAlert({
        statusCode: 400,
        timestamp: new Date().toISOString(),
        class: 'bad-request',
        message: '¡ Ingresa el detalle del módulo!',
      });

    axios
      .post(`${S_URL}/modulo`, form, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        // setAlert(res.data);
        handleAddModule(res.data.modulo);
      })
      .catch(() => {
        setAlert(_defaulterrormodulo);
      });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      {add && (
        <div
          className="add"
          onClick={() => {
            setAdd(!add);
          }}
          role="presentation"
        >
          <div key={form._id ? form._id : 'addItem'} className="add-card">
            <div
              className="add-card-text"
              onClick={(e) => e.stopPropagation()}
              role="presentation"
            >
              <h2 className="title">MÓDULO</h2>
              <div className="form">
                <div className="omrs-input-group">
                  <label htmlFor="nombre" className="omrs-input-filled">
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={form.nombre}
                      autoComplete="off"
                      placeholder="NOMBRE"
                      onChange={handleChange}
                      required
                      // eslint-disable-next-line jsx-a11y/no-autofocus
                      autoFocus
                    />
                  </label>
                </div>
                <div className="omrs-input-group">
                  <TextareaAutosize
                    id="detalle"
                    name="detalle"
                    value={form.detalle}
                    autoComplete="off"
                    placeholder="BEVE DETALLE DE MODULO"
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      minWidth: '100%',
                      maxWidth: '100%',
                      maxHeight: '88px',
                      minHeight: '88px',
                      fontSize: '18px',
                      boxSizing: 'border-box',
                      border: '1px solid rgb(0, 0, 0, 0.6)',
                      borderRadius: '3px',
                      padding: '14px ',
                      borderBottom: '1px solid #818181',
                      marginBottom: 'none',
                      fontFamily: fonts.base,
                      fontWeight: 400,
                      backgroundColor: 'transparent',
                      boxShadow: null,
                      outline: 0,
                    }}
                  />
                </div>
              </div>
              <div className="card-action">
                <div>
                  <button
                    type="button"
                    className="btn-dialog btn-cancel"
                    onClick={() => setAdd(!add)}
                  >
                    cancelar
                  </button>
                  <div className="space" />
                  <button
                    className="btn-dialog"
                    type="button"
                    onClick={HandlePost}
                  >
                    crear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container-add">
        <button
          className="btn-dialog"
          onClick={() => setAdd(!add)}
          type="button"
        >
          agregar modulo
        </button>
      </div>
      <Alert alert={alert} setAlert={setAlert} />
      <style jsx>{`
        .container-add {
          display: flex;
          width: 100%;
          justify-content: end;
          align-items: center;
          height: 80px;
          margin-bottom: 1rem;
        }
        .title {
          padding: 0 14px 1.7rem;
        }
        .container-add button {
          min-width: 300 !important;
        }
        .omrs-input-group {
          margin-bottom: 15px;
        }
        .omrs-input-group label input {
          border: none;
          height: 50px;
          padding: 25px 1rem 25px;
          font-size: 23px;
          font-weight: bold;
          text-transform: uppercase;
          background: transparent;
          border: 1px solid rgb(0, 0, 0, 0.6);
          margin-bottom: 0;
        }
        .form {
          background: white;
        }
        .card-action {
          display: flex;
          width: 100%;
          justify-content: end;
          align-items: center;
          height: 70px;
          border-top: 1px solid #ccc;
        }
      `}</style>
    </>
  );
}

function Modulos({ taller, hadleRebuild }) {
  const [modulos, setModulos] = useState([]);

  useEffect(() => {
    setModulos(taller.modulos);
  }, [taller]);
  return (
    <>
      <Add hadleRebuild={hadleRebuild} taller={taller} />

      {modulos && (
        <div className="row">
          {modulos.map((item) => (
            <div
              className="row content-modules"
              key={item._id}
              role="presentation"
            >
              <div className="col-6">
                <div className="detalle title">{item.nombre}</div>
                <div className="detalle subtitle">{item.detalle}</div>
              </div>
              <div className="col-6">
                <div className="action">
                  <button type="button" className="btn-dialog btn-action">
                    agregar recurso
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <style jsx>{`
        .action,
        .detallle {
          display: flex;
          justify-content: start;
        }

        .title {
          font-size: 26px;
        }
        .btn-action {
          background: ${colors.primary_darken};
        }
        .content-modules {
          min-height: 200px;
        }
      `}</style>
    </>
  );
}

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
  useEffect(() => {
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
                      <div className="subtitle">{tallerista}</div>
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
                <div className="content-modulo">
                  <Modulos taller={taller} hadleRebuild={hadleRebuild} />
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
