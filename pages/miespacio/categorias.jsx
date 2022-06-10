import { useState, useEffect } from 'react';
import { FaPlusCircle, FaTrashAlt, FaPen } from 'react-icons/fa';
import axios from 'axios';
import { getSession } from 'next-auth/react';
import dbConnect from '../../lib/dbConnect';
import Usuario from '../../models/usuario';
import Spiner from '../../components/Spiner';
import { colors, breakpoint } from '../../styles/theme';
import Alert from '../../components/utils/alert';

const S_URL = process.env.SERVER_URL;
const defaulterror = {
  statusCode: 500,
  timestamp: new Date().toISOString(),
  class: 'server-error',
  message: '¡ Error del servidor, no se puedeobtener categorías !',
};

function Render({ handleDelete, setAlert, handleEdit }) {
  const [render, setRender] = useState([]);
  const [squeleton, setsqueleton] = useState(true);
  const [remove, setRemove] = useState(null);

  const hadleMountData = () => {
    axios
      .get(`/api/categoria`)
      .then((res) => {
        setRender(res.data.categoria);
        setsqueleton(false);
      })
      .catch((error) => {
        setsqueleton(false);
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

  useEffect(() => {
    hadleMountData();
  }, []);

  return (
    <>
      <div className="content-cat-table">
        {squeleton ? (
          <>
            <div className="col-12 squeleton" />
            <div className="col-12 squeleton" />
            <div className="col-12 squeleton" />
            <div className="col-12 squeleton" />
            <div className="col-12 squeleton" />
          </>
        ) : (
          <div className="row cat-table">
            {render.map((item) => (
              <div key={item._id} className="col-12 cat-row">
                <div className="row cat-item">
                  <div className="col-8">{item.nombre}</div>

                  <div className="col-2 item-option">
                    <i onClick={() => handleEdit(item)} role="presentation">
                      <FaPen />
                    </i>
                  </div>
                  <div className="col-2 item-option">
                    <i onClick={() => setRemove(item)} role="presentation">
                      <FaTrashAlt />
                    </i>
                  </div>
                </div>
              </div>
            ))}
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
                      ¿ Confirmaseliminar {remove.nombre} ?
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
                        onClick={() => handleDelete(remove._id)}
                      >
                        ELIMINAR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <style jsx>{`
        .content-cat-table {
          margin: auto;
          margin-top: 30px;
        }
        .cat-table {
          border: 1px solid #ccc;
          border-bottom: none;
        }
        .cat-row {
          font-size: 18px;
          text-transform: capitalize;
          min-height: 45px;
          line-height: 45px;

          border-bottom: 1px solid #ccc;
        }
        .cat-item {
          display: flex;
          cursor: pointer;
          padding: 0 0.7rem 0 0.7rem;
          transition: 0.4s;
        }
        .cat-item:hover {
          background-color: #efefef;
        }
        .item-option {
          text-align: center !important;
        }
        i {
          display: inline-flex;
          color: #818181;
          background: #ccc;
          height: 34px;
          width: 34px;
          font-size: 17px;
          margin-top: 5px;
          border-radius: 50%;
          padding: 0.556rem;
          cursor: pointer;
          transition: 0.6s;
        }
        i:hover {
          color: black;
          background: #818181;
        }
        .squeleton {
          min-height: 40px;
          margin: 2.5px 0;
          border-radius: 5px;
          cursor: progress;
          background: linear-gradient(0.25turn, transparent, #fff, transparent),
            linear-gradient(#ddd, #ddd), linear-gradient(#ddd, #ddd);
          background-repeat: no-repeat;
          background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
          animation: loading 1.5s infinite;
        }
        @keyframes loading {
          to {
            background-position: 315px 0, 0 0, 0 190px, 50px 195px;
          }
        }
        .confirm {
          margin-top: 14px;
          text-transform: uppercase;
          text-align: center;
          font-size: 20px;
        }
        .confirm-action {
          display: block;
          text-align: end;
        }
        .btn-nav-bar {
          border: none;
          background-color: rgba(7, 166, 224, 1);
          padding: 14px 28px;
          margin: 2rem 0 14px;
          font-size: 16px;
          line-height: 20px;
          font-weight: bold;
          cursor: pointer;
          display: inline-block;
          border-radius: 5px;
          transition: 0.3s;
          text-transform: uppercase;
          color: white;
        }
        .cancel {
          background: #818181;
          margin-right: 10px;
        }
        @media screen and (max-width: ${breakpoint.xs}) {
          .btn-nav-bar {
            font-size: 13px;
            padding: 7px 14px;
          }
          .confirm {
            font-size: 16px;
          }
        }
        @media screen and (max-width: ${breakpoint.xxs}) {
          .btn-nav-bar {
            font-size: 11px;
          }
        }
      `}</style>
    </>
  );
}

const _form = {
  nombre: '',
};
function Categorias() {
  const [load, setload] = useState(false);
  const [add, setAdd] = useState(false);
  const [form, setForm] = useState(_form);
  const [namevalid, setNamevalid] = useState(undefined);
  const [alert, setAlert] = useState(undefined);
  const [keyrender, SetKeyrender] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const handleError = (error) => {
    if (error.response && error.response.data && error.response.data.class) {
      setAlert(error.response.data);
    } else {
      setAlert(defaulterror);
    }
  };

  const handlePost = () => {
    axios
      .post(`${S_URL}/parametros/categoria`, form, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setForm(_form);
        setAdd(false);
        setload(false);
        setAlert(res.data);
        SetKeyrender(keyrender + 1);
      })
      .catch((error) => {
        setload(false);
        handleError(error);
      });
  };
  const handlePut = () => {
    const id = form._id;
    axios
      .put(`${S_URL}/parametros/categoria/update/${id}`, form, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setForm(_form);
        setAdd(false);
        setload(false);
        setAlert(res.data);
        SetKeyrender(keyrender + 1);
      })
      .catch((error) => {
        setload(false);
        handleError(error);
      });
  };

  const handleSave = () => {
    if (!form.nombre) {
      setNamevalid(false);
      return;
    }
    setload(true);
    if (form._id) {
      handlePut();
    } else {
      handlePost();
    }
  };

  const handleDelete = (id) => {
    setload(true);
    axios
      .delete(`${S_URL}/parametros/categoria/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setload(false);
        setAlert(res.data);
        SetKeyrender(keyrender + 1);
      })
      .catch((error) => {
        setload(false);
        handleError(error);
      });
  };

  const handleEdit = (item) => {
    setForm(item);
    setAdd(true);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === 'nombre') {
      setNamevalid(!!value);
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > +100);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);
  return (
    <>
      {add && (
        <div className="add" onClick={() => setAdd(false)} role="presentation">
          <div className="add-card">
            <div
              className="add-card-text"
              onClick={(e) => e.stopPropagation()}
              role="presentation"
            >
              <h4>{form._id ? 'EDITANDO CATEGORIA' : 'AGREGANDO CATEGORIA'}</h4>
              <div className="row">
                <div className="col-12">
                  <div className="omrs-input-group">
                    <label htmlFor="nombre" className="omrs-input-filled">
                      <input
                        type="text"
                        id="nombre"
                        value={form.nombre}
                        name="nombre"
                        autoComplete="off"
                        placeholder="Nueva Categoría"
                        onChange={handleChange}
                        required
                        className={`valid-${namevalid}`}
                        // eslint-disable-next-line jsx-a11y/no-autofocus
                        autoFocus
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="card-action">
                <button
                  type="button"
                  className="btn-nav-bar"
                  onClick={() => handleSave()}
                >
                  {form._id ? 'editar' : 'agregar'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {load && (
        <div className="load">
          <div className="card-text">
            <div className="spiner">
              <Spiner />
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <div className="container-nav-bar">
          <div
            className={`${!scrolling ? 'nav-bar' : 'nav-bar nav-bar-hidden'} `}
          >
            <div className="nav-bar-content">
              <div className="row">
                <div className="col-8 sm-12">
                  <h1 className={`${!scrolling ? 'title' : ' title-hidden'} `}>
                    Categorías
                  </h1>
                </div>
                <div className="col-4 sm-12 align-right">
                  <button
                    type="button"
                    className="btn-nav-bar"
                    onClick={() => handleEdit(_form)}
                  >
                    <i>
                      <FaPlusCircle />
                    </i>
                    agregar categoría
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <Render
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            key={keyrender}
            setAlert={setAlert}
          />
        </div>
      </div>

      <Alert alert={alert} setAlert={setAlert} />

      <style jsx>{`
        .load {
          position: fixed;
          top: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.45);
          height: 100%;
          width: 100%;
          z-index: 3;
        }
        .load .card-text {
          height: 100%;
        }
        .load .spiner {
          display: flex;
          height: 100%;
          overflow: hidden;
          width: 100%;
          justify-content: space-around;
          align-items: center;
        }

        .container {
          max-width: 100%;
          margin-top: 160px;
          overflow-x: hidden;
          background: white;
        }
        .content {
          padding: 1rem;
        }

        .nav-bar {
          background: ${colors.secondary_darken};
          padding: 1.7rem 1rem;
          align: center;
          position: fixed;
          top: 70px;
          height: 180px;
          width: 100%;
          z-index: 1;
          transition: top 0.8s;
          transition: all 0.8s ease;
        }
        .title {
          position: fixed;
          top: 100px;
          text-transform: uppercase;
          font-weight: 1000;
          padding-left: 30px;
          font-size: 30px;
          max-width: 90vw;
          max-height: 30px;
          float: left;
          animation-name: title-on;
          animation-duration: 1.3s;
        }

        .nav-bar-hidden {
          top: -200px;
        }
        .title-hidden {
          opacity: 0;
        }
        @keyframes title-on {
          0% {
            top: -200px;
          }
          80% {
            top: 103px;
          }
          85% {
            top: 100px;
          }
          90% {
            top: 103px;
          }
          100% {
            top: 100px;
          }
        }

        .nav-bar-content {
          max-width: ${breakpoint.media};
          padding: 0 1rem;
          align: center;
          margin: auto;
        }

        .align-right {
          text-align: center;
        }
        .btn-nav-bar {
          border: none;
          background-color: rgba(7, 166, 224, 0.4);
          padding: 14px 28px;
          margin: 2rem 0;
          font-size: 16px;
          line-height: 20px;
          font-weight: bold;
          cursor: pointer;
          display: inline-block;
          border-radius: 5px;
          transition: 0.3s;
          text-transform: uppercase;
          color: white;
        }

        .btn-nav-bar i {
          float: left;
          display: inline-flex;
          padding-right: 10px;
          font-size: 20px;
        }

        /* On mouse-over */
        .btn-nav-bar:hover {
          background: rgba(7, 166, 224, 0.8);
        }
        .card {
          background: red;
          margin: 2rem 0;
        }
        .add-card-text {
          background-color: ${colors.secondary_darken};
        }

        h4 {
          margin: 0 0 1rem 0;
          color: white;
        }
        .add-card-text .title {
          padding: 30px 30px 15px 15px;
        }
        .omrs-input-group {
          background: white;
          padding: 0;
          border-radius: 3px;
        }
        .omrs-input-group label input {
          border: none;
          height: 60px;
          padding: 0 1rem;
          margin: 0;
          text-transform: capitalize;
          border: 2px solid transparent;
        }

        .valid-false {
          animation-name: invalid;
          animation-duration: 2s;
          border: 2px solid red !important;
        }

        .valid-true {
          animation-name: valid;
          animation-duration: 2s;
          border: 2px solid transparent !important;
        }
        .card-action {
          text-align: right;
        }
        .card-action .btn-nav-bar {
          margin: 0 0 0.7rem;
        }
        @media screen and (max-width: ${breakpoint.xs}) {
          .btn-nav-bar {
            font-size: 13px;
            padding: 7px 14px;
          }
        }
        @media screen and (max-width: ${breakpoint.xxs}) {
          .btn-nav-bar {
            font-size: 11px;
          }
        }
      `}</style>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session)
    return {
      redirect: {
        destination: '/#login-modal',
        permanent: false,
      },
    };
  try {
    await dbConnect();
    const res = await Usuario.findOne(
      { email: session.user.email },
      { _id: 1, nombre: 1, nivel: 1 }
    ).lean();

    if (res.nivel > 1)
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };

    return { props: { session, usersection: false } };
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default Categorias;
