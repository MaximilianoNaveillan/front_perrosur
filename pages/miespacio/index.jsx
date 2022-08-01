import { useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import dbConnect from '../../lib/dbConnect';
import Categoria from '../../models/categoria';
import { colors, breakpoint } from '../../styles/theme';
import Alert from '../../components/utils/alert';
import Items from '../../components/mistalleres';
import Menu from '../../components/miespacio/menu/index';

const defaulterrortaller = {
  statusCode: 500,
  timestamp: new Date().toISOString(),
  class: 'server-error',
  message: '¡ Error del servidor, no se puede obtener talleres !',
};
const _URL = process.env.BASE_URL;

const _form = {
  nombre: '',
  fono: '',
  direccion: '',
  nivel: 3,
  email: '',
};

function NwUser({ form, setForm }) {
  const [namevalid, setNamevalid] = useState(undefined);

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
  return (
    <>
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
                placeholder="Nombre de usuario"
                onChange={handleChange}
                required
                className={`valid-${namevalid}`}
              />
            </label>
          </div>
          <div className="omrs-input-group">
            <label htmlFor="fono" className="omrs-input-filled">
              <input
                type="text"
                id="fono"
                value={form.fono}
                name="fono"
                autoComplete="off"
                placeholder="Fono de usuario"
                onChange={handleChange}
                required
                className={`valid-${namevalid}`}
              />
            </label>
          </div>
          <div className="omrs-input-group">
            <label htmlFor="direccion" className="omrs-input-filled">
              <input
                type="text"
                id="direccion"
                value={form.direccion}
                name="direccion"
                autoComplete="off"
                placeholder="Direccion de usuario"
                onChange={handleChange}
                required
                className={`valid-${namevalid}`}
              />
            </label>
          </div>
        </div>
      </div>
      <style jsx>{`
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
          border: 1px solid #ddd;
        }

        .valid-false {
          animation-name: invalid;
          animation-duration: 2s;
          border: 1px solid red !important;
        }

        .valid-true {
          animation-name: valid;
          animation-duration: 2s;
          border: 1px solid #ddd;
        }
      `}</style>
    </>
  );
}

function TallerItem({ categorias, usuario, session }) {
  const [alert, setAlert] = useState(undefined);
  const [keyrender, SetKeyrender] = useState(0);
  const [items, setItems] = useState([]);
  const [add, setAdd] = useState(false);
  const [squeleton, setSqueleton] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [toggleleft, setToggleLeft] = useState(false);
  const [misrecursos, setMisrecursos] = useState([]);
  const [mistalleres, setMistalleres] = useState([]);
  const [form, setForm] = useState(_form);

  const router = useRouter();

  const hadleMountTaller = () => {
    axios
      .get(`/api/talleritem`)
      .then((res) => {
        setItems(res.data.talleres);
        setSqueleton(false);
        SetKeyrender(keyrender + 1);
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.class
        ) {
          setAlert(error.response.data);
        } else {
          setAlert(defaulterrortaller);
        }
      });
  };

  const createUser = () => {
    if (!form.fono || !form.direccion) return;
    axios
      .post(`/api/usuario`, form, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        setAdd(false);
      })
      .catch(() => {
        setAlert(defaulterrortaller);
      });
  };

  const addMistalleres = (key) => {
    const tempArr = [...mistalleres];
    tempArr.push({ status: false, talleritem: key });
    const body = {
      email: session.user.email,
      mistalleres: tempArr,
    };
    axios
      .patch(`/api/subscripcion`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        if (res.data.usuario) {
          setMistalleres(res.data.usuario.mistalleres);
          router.push(`/miespacio/mientrelazar/${key}`);
        } else {
          setAdd(true);
          setForm({
            ...form,
            [`nombre`]: session.user.name,
            [`email`]: session.user.email,
          });
        }
      })
      .catch(() => {
        setAlert(defaulterrortaller);
      });
  };

  const handleAddMistalleres = (key) => {
    const index = mistalleres.findIndex((obj) => obj.talleritem._id === key);
    if (index === -1) {
      addMistalleres(key);
    } else {
      router.push(`/miespacio/mientrelazar/${key}`);
    }
  };

  const userHandler = () => {
    axios
      .patch(
        `${_URL}/api/usuario`,
        { email: session.user.email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        setMisrecursos(res.data.usuario.misrecursos);
        setMistalleres(res.data.usuario.mistalleres);
        hadleMountTaller();
      })
      .catch(() => {
        setMisrecursos([]);
        setMistalleres([]);
        hadleMountTaller();
      });
  };

  useEffect(() => {
    if (usuario && usuario._id) {
      setMisrecursos(usuario.misrecursos);
      setMistalleres(usuario.mistalleres);
      hadleMountTaller();
    } else {
      userHandler();
    }
  }, [usuario]);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <>
      <datalist id="ietmslist">
        {items.map((item) => (
          <option key={item._id}>{item.titulo}</option>
        ))}
      </datalist>
      {add && (
        <div className="add" onClick={() => setAdd(false)} role="presentation">
          <div className="add-card">
            <div
              className="add-card-text"
              onClick={(e) => e.stopPropagation()}
              role="presentation"
            >
              <h4>AGREGANDO USUARIO</h4>
              <NwUser form={form} setForm={setForm} />
              <div className="card-action">
                <button
                  type="button"
                  onClick={createUser}
                  className="btn-nav-bar"
                >
                  guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={`${!scrolling ? 'container-nav-bar' : ' nav-bar-hidden'}`}
      />
      <div
        className={`container content-align-left ${
          toggleleft ? 'force-content-align-left' : ''
        }`}
      >
        <Menu
          setToggleLeft={setToggleLeft}
          toggleleft={toggleleft}
          categorias={categorias}
          misrecursos={misrecursos}
          mistalleres={mistalleres}
        />
        <div>
          <div
            className={`${!scrolling ? 'nav-bar' : 'nav-bar nav-bar-hidden'} ${
              toggleleft ? 'nav-bar-left' : ''
            }`}
          >
            <div className="nav-bar-content">
              <div className="row">
                <div className="col-8 sm-12">
                  <h1 className={`${!scrolling ? 'title' : ' title-hidden'} `}>
                    Talleres disponibles
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content" key={keyrender}>
          <Items
            readonly={false}
            items={items}
            squeleton={squeleton}
            misrecursos={misrecursos}
            mistalleres={mistalleres}
            handleAddMistalleres={handleAddMistalleres}
          />
        </div>
        <Alert alert={alert} setAlert={setAlert} />
      </div>

      <style jsx>{`
        .load {
          position: fixed;
          top: 0;
          right: 0;
          background-color: transparent;
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
        .add {
          position: fixed;
          top: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.45);
          height: 100%;
          width: 100%;
          z-index: 3;
        }
        .container-nav-bar {
          background: ${colors.magenta};
          position: absolute;
          min-height: 180px;
          width: 100vw;
          top: 70px;
          transition: top 0.2s;
        }

        .nav-bar {
          background: ${colors.magenta};
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

        @media screen and (min-width: ${breakpoint.media}) {
          .nav-bar {
            max-width: calc(100% - 200px);
          }
        }

        .nav-bar-left {
          max-width: 100%;
        }

        .container {
          max-width: 100%;
          margin-top: 160px;
          overflow-x: hidden;
          background: white;
        }
        .content {
          padding: 1rem;
          max-width: 100%;
        }
        .nav-bar-content {
          max-width: ${breakpoint.media};
          padding: 0 1rem;
          align: center;
          margin: auto;
        }

        @media screen and (max-width: ${breakpoint.md}) {
          .nav-bar {
            height: 190px;
          }
          .title {
            font-size: 25px;
            margin-top: -20px;
            padding-left: 0;
            animation-duration: 3s;
          }
        }
        .align-right {
          text-align: center;
        }
        .btn-nav-bar {
          border: none;
          background-color: rgba(140, 140, 140, 0.5);
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
          background: rgba(104, 104, 104, 0.5);
        }
        .card {
          background: red;
          margin: 2rem 0;
        }
        @media screen and (max-width: ${breakpoint.xs}) {
          .btn-nav-bar {
            font-size: 13px;
            padding: 7px 14px;
          }
        }
        @media screen and (max-width: ${breakpoint.xxs}) {
          .btn-nav-bar {
            margin-top: 10px;
            font-size: 11px;
          }
        }
        .add-card-text {
          padding: 1.7rem 1.7rem 0 !important;
        }

        h4 {
          margin: 0 0 1rem 0;
        }
        .add-card-text .title {
          padding: 30px 30px 15px 15px;
        }

        .card-action {
          text-align: right;
        }
        .card-action .btn-nav-bar {
          margin: 0 0 0.7rem;
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
    const cate = await Categoria.find({}, { _id: 1, nombre: 1 }).lean();
    const categorias = cate.map((doc) => {
      const categoria = doc;
      categoria._id = `${categoria._id}`;
      return categoria;
    });
    return { props: { session, categorias, usersection: true } };
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default TallerItem;
