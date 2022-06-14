import { useEffect, useState } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import axios from 'axios';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { breakpoint, colors, fonts } from '../../../styles/theme';
import Alert from '../../utils/alert';
import AddRecurso from './addrecursos';
import Recurso from './recurso';

const S_URL = process.env.SERVER_URL;

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

function Add({ taller, hadleRebuild, moduloselect, setModuloselect }) {
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

  const handlePut = () => {
    const id = form._id;
    axios
      .put(`${S_URL}/modulo/${id}`, form, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setAlert(res.data);
        hadleRebuild();
        setAdd(!add);
      })
      .catch(() => {
        setAlert(_defaulterrormodulo);
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

    if (!form._id) {
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
    } else {
      handlePut(form);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    if (moduloselect) {
      setForm(moduloselect);
      setAdd(true);
    }
  }, [moduloselect]);

  useEffect(() => {
    if (!add) {
      setForm(_defaultModuleForm);
      setModuloselect(null);
    }
  }, [add]);

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
                    placeholder="BREVE DETALLE DE MODULO"
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
                    {form._id ? 'EDITAR' : 'CREAR'}
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
          justify-content: start;
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
  const [moduloselect, setModuloselect] = useState(null);
  const [remove, setRemove] = useState(null);
  const [alert, setAlert] = useState(undefined);
  const [addrecurso, setAddRecurso] = useState(null);
  const [editrecurso, setEditrecurso] = useState(null);

  const handleRemove = (item) => {
    setRemove(item);
  };
  const handleDelete = () => {
    const id = remove._id;
    axios
      .delete(`${S_URL}/modulo/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setAlert(res.data);
        hadleRebuild();
        setRemove(null);
      })
      .catch(() => {
        setAlert(_defaulterrormodulo);
      });
  };

  const handleEditRecurso = (recurso) => {
    setEditrecurso(recurso);
    setAddRecurso(taller);
  };

  useEffect(() => {
    setModulos(taller.modulos);
  }, [taller]);

  useEffect(() => {
    if (!addrecurso) setEditrecurso(null);
  }, [addrecurso]);
  return (
    <>
      {addrecurso && (
        <AddRecurso
          setAddRecurso={setAddRecurso}
          addrecurso={addrecurso}
          hadleRebuild={hadleRebuild}
          editrecurso={editrecurso}
        />
      )}
      <Add
        moduloselect={moduloselect}
        setModuloselect={setModuloselect}
        hadleRebuild={hadleRebuild}
        taller={taller}
      />

      {remove && (
        <div
          className="add"
          onClick={() => setRemove(null)}
          role="presentation"
        >
          <div className="add-card">
            <div
              className="add-card-text"
              onClick={(e) => e.stopPropagation()}
              role="presentation"
            >
              <div className="confirm">
                ¿ Confirmas eliminar {remove.nombre} ?
              </div>
              <div className="confirm-action">
                <button
                  type="button"
                  className="btn-nav-bar cancel"
                  onClick={() => setRemove(null)}
                >
                  CANCELAR
                </button>
                <button
                  type="button"
                  className="btn-nav-bar"
                  onClick={() => handleDelete(remove)}
                >
                  ELIMINAR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {modulos && (
        <div className="row">
          {modulos.map((item) => (
            <div
              className="row content-modules"
              key={`item-rodulo-${item._id}`}
              role="presentation"
            >
              <div className="col-6 sm-12">
                <div className="detalle">
                  <div className="detalle title">{item.nombre}</div>
                  <div className="detalle subtitle">{item.detalle}</div>
                </div>
              </div>
              <div className="col-6 sm-12">
                <div className="action">
                  <i
                    onClick={() => {
                      setModuloselect(item);
                    }}
                    role="presentation"
                  >
                    <FaPen />
                  </i>
                  {item.recursos.length === 0 && (
                    <i
                      onClick={() => {
                        handleRemove(item);
                      }}
                      role="presentation"
                    >
                      <FaTrashAlt />
                    </i>
                  )}
                  <button
                    onClick={() => {
                      setAddRecurso(item);
                    }}
                    type="button"
                    className="btn-dialog btn-action"
                  >
                    agregar recurso
                  </button>
                </div>
              </div>
              <div className="col-12">
                <Recurso
                  recursos={item.recursos}
                  handleEditRecurso={handleEditRecurso}
                />
              </div>
            </div>
          ))}
          <Alert alert={alert} setAlert={setAlert} />
        </div>
      )}
      <style jsx>{`
        .detalle {
          justify-content: start;
        }
        .action {
          display: flex;
          justify-content: end;
          align-items: center;
        }

        .title {
          font-size: 26px;
          text-transform: capitalize;
        }
        .btn-action {
          background: ${colors.primary_darken};
          margin-left: 20px;
        }
        .action i {
          margin-right: 20px;
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
        .content-modules {
          padding: 30px 0;
          min-height: 150px;
          border-bottom: 1px solid white;
        }
      `}</style>
    </>
  );
}

export default Modulos;
