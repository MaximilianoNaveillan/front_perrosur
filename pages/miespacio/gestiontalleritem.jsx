import { useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { FaPlusCircle } from 'react-icons/fa';
import axios from 'axios';
import dbConnect from '../../lib/dbConnect';
import Usuario from '../../models/usuario';
import { colors, breakpoint } from '../../styles/theme';
import Spiner from '../../components/Spiner';
import ItemAdd from '../../components/dashboard/talleritem/itemeadd';
import Alert from '../../components/utils/alert';
import { dataURLtoFile } from '../../components/utils/dataURLtoFile';
import Items from '../../components/dashboard/talleritem/items';
import ItemsRecursos from '../../components/dashboard/talleritem/itemrecurso';

const S_URL = process.env.SERVER_URL;
const defaulterror = {
  statusCode: 500,
  timestamp: new Date().toISOString(),
  class: 'server-error',
  message: '¡ Error del servidor, no se puede obtener taller !',
};
const defaulterrorcat = {
  statusCode: 500,
  timestamp: new Date().toISOString(),
  class: 'server-error',
  message: '¡ Error del servidor, no se puede obtener categorías !',
};
const defaulterrortaller = {
  statusCode: 500,
  timestamp: new Date().toISOString(),
  class: 'server-error',
  message: '¡ Error del servidor, no se puede obtener talleres !',
};

const _form = {
  titulo: '',
  detalle: '',
  resumen: '',
  color: '#ffffff',
  bg: 0,
  tallerista: '',
  categoria: '',
  duracion: '',
  dificultad: 1,
  imagen: '00',
};

function TallerItem({ tallerista, talleristas }) {
  const [load, setload] = useState(false);
  const [add, setAdd] = useState(false);
  const [recurso, setRecurso] = useState(null);
  const [alert, setAlert] = useState(undefined);
  const [cat, setCat] = useState([]);
  const [keyrender, SetKeyrender] = useState(0);
  const [items, setItems] = useState([]);
  const [squeleton, setSqueleton] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [form, setForm] = useState(_form);

  const handleCacheRecurso = (data) => {
    const itemrebuild = data.find((element) => element._id === recurso._id);
    setRecurso(itemrebuild);
  };

  const hadleMountTaller = () => {
    const body = tallerista.nivel !== 1 ? { tallerista: tallerista._id } : {};
    axios
      .patch(`/api/talleritem`, body)
      .then((res) => {
        if (recurso) handleCacheRecurso(res.data.talleres);
        setItems(res.data.talleres);
        // console.log(res.data.talleres);
        setSqueleton(false);
        SetKeyrender(keyrender + 1);
        setload(false);
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

  const hadleMountCat = () => {
    axios
      .get(`/api/categoria`)
      .then((res) => {
        const _cat = Array.from(res.data.categoria).map((obj) => ({
          value: `${obj._id}`,
          label: `${obj.nombre.charAt(0).toUpperCase() + obj.nombre.slice(1)}`,
        }));
        setCat(_cat);
        hadleMountTaller();
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.class
        ) {
          setAlert(error.response.data);
        } else {
          setAlert(defaulterrorcat);
        }
      });
  };

  const handleImageData = async (imageData, data) => {
    if (form._id) {
      const inc = Number(data.taller.imagen) - 1;
      const name = `${data.taller._id}-0${inc.toString()}.png`;
      const fileName = `taller-item-${name}`;
      axios.delete(`${S_URL}/uploadimg/${fileName}`);
    }
    const body = new FormData();
    const imgFile = dataURLtoFile(
      imageData,
      `taller-item-${data.taller._id}-${data.taller.imagen}.png`
    );
    body.append('file', imgFile);
    axios
      .post(`${S_URL}/uploadimg`, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        setAlert(data);
        hadleMountTaller();
        setload(false);
        setAdd(false);
      })
      .catch(() => {
        setAlert({
          statusCode: 500,
          timestamp: new Date().toISOString(),
          class: 'server-error',
          message: '¡ Error del servidor, no se puede cargar la imagen !',
        });
      });
  };

  const handleCreate = (imageData) => {
    setload(true);
    axios
      .post(`${S_URL}/talleritem`, form, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        handleImageData(imageData, res.data);
      })
      .catch((error) => {
        setload(false);
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

  const handlePut = (imageData) => {
    const id = form._id;
    setload(true);
    axios
      .put(`${S_URL}/talleritem/${id}`, form, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        if (imageData) {
          handleImageData(imageData, res.data);
        } else {
          setAlert(res.data);
          hadleMountTaller();
          setload(false);
          setAdd(false);
        }
      })
      .catch((error) => {
        setload(false);
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

  const handleHidden = (id, hidden) => {
    setload(true);
    axios
      .put(`${S_URL}/talleritem/${id}`, hidden, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setAlert(res.data);
        hadleMountTaller();
        setload(false);
        setAdd(false);
      })
      .catch((error) => {
        setload(false);
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

  const handlePost = (imageData) => {
    if (!form.tallerista) return;
    if (form._id) {
      handlePut(imageData);
    } else {
      handleCreate(imageData);
    }
  };
  const handleEdit = (item) => {
    setForm(item);
    setAdd(true);
  };

  const handleChange = (itemform, id) => {
    setload(true);
    axios
      .put(`${S_URL}/talleritem/${id}`, itemform, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        hadleMountTaller();
      })
      .catch((error) => {
        setload(false);
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
  const handleDelete = (item) => {
    if (item.modulos.length > 0) {
      handleHidden(item._id, { type: 'hidden' });
      return;
    }
    const id = item._id;
    const fileName = `taller-item-${id}-${item.imagen}.png`;
    axios.delete(`${S_URL}/uploadimg/${fileName}`);

    axios
      .delete(`${S_URL}/talleritem/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setAlert(res.data);
        hadleMountTaller();
        setload(false);
      })
      .catch((error) => {
        setload(false);
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
    hadleMountCat();
  }, []);

  useEffect(() => {
    if (!add) setForm(_form);
  }, [add]);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  const imageurl = S_URL;
  return (
    <>
      {recurso && recurso._id && (
        <div key={`add-${keyrender}`} className="add">
          <ItemsRecursos
            setRecurso={setRecurso}
            recurso={recurso}
            handlePut={handlePut}
            hadleMountTaller={hadleMountTaller}
            setload={setload}
          />
        </div>
      )}
      {add && (
        <div className="add">
          <ItemAdd
            imageurl={imageurl}
            setAdd={setAdd}
            setAlert={setAlert}
            cat={cat}
            tallerista={tallerista}
            talleristas={talleristas}
            handlePost={handlePost}
            form={form}
            setForm={setForm}
          />
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

      <div className="container-nav-bar">
        <div className={!scrolling ? 'nav-bar' : 'nav-bar nav-bar-hidden'}>
          <div className="nav-bar-content">
            <div className="row">
              <div className="col-8 sm-12">
                <h1 className="title">Mis talleres</h1>
              </div>
              <div className="col-4 sm-12 align-right">
                <button
                  type="button"
                  className="btn-nav-bar"
                  onClick={() => setAdd(true)}
                >
                  <i>
                    <FaPlusCircle />
                  </i>
                  agregar taller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`container ${
          (recurso && recurso._id) || add ? 'container-hidde-hoverflow' : ''
        }`}
      >
        <div className="content" key={keyrender}>
          <Items
            readonly={false}
            items={items}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleChange={handleChange}
            squeleton={squeleton}
            setRecurso={setRecurso}
            handleHidden={handleHidden}
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

        .nav-bar {
          background: ${colors.magenta};
          padding: 1.7rem 1rem;
          align: center;
          position: fixed;
          top: 70px;
          height: 160px;
          width: 100%;
          z-index: 1;
          transition: top 0.8s;
        }
        .nav-bar-hidden {
          top: -200px;
        }
        .container {
          max-width: 100%;
          margin-top: 160px;
          overflow-x: hidden;
        }
        .container-hidde-hoverflow {
          overflow: hidden;
          max-height: calc(100vh - 230px);
        }
        .content {
          padding: 1rem;
        }
        .nav-bar-content {
          max-width: ${breakpoint.media};
          padding: 0 1rem;
          align: center;
          margin: auto;
        }
        .title {
          text-transform: uppercase;
          font-weight: 1000;
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

    const tallerista = {
      nombre: res.nombre,
      _id: `${res._id}`,
      nivel: res.nivel,
    };

    if (res.nivel > 2)
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    try {
      const _talleristas = await Usuario.find(
        {},
        { _id: 1, nombre: 1, nivel: 1 }
      );

      const talleristas =
        res.nivel === 1
          ? _talleristas.map((doc) => {
              const _tallerista = doc.toObject();
              // eslint-disable-next-line no-underscore-dangle
              return {
                value: `${_tallerista._id}`,
                label: `${_tallerista.nombre}`,
              };
            }, [])
          : [{ value: tallerista._id, label: `${tallerista.nombre}` }];
      return { props: { session, tallerista, talleristas } };
    } catch (error) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
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
