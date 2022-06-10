import { useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import axios from 'axios';
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

function TallerItem({ categorias }) {
  const [alert, setAlert] = useState(undefined);
  const [keyrender, SetKeyrender] = useState(0);
  const [items, setItems] = useState([]);
  const [squeleton, setSqueleton] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const [toggleleft, setToggleLeft] = useState(false);

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

  useEffect(() => {
    hadleMountTaller();
  }, []);

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
      <div
        className={`container content-align-left ${
          toggleleft ? 'force-content-align-left' : ''
        }`}
      >
        <Menu
          setToggleLeft={setToggleLeft}
          toggleleft={toggleleft}
          categorias={categorias}
        />
        <div className="container-nav-bar">
          <div
            className={`${!scrolling ? 'nav-bar' : 'nav-bar nav-bar-hidden'} ${
              toggleleft ? 'nav-bar-left' : ''
            }`}
          >
            <div className="nav-bar-content">
              <div className="row">
                <div className="col-8 sm-12">
                  <h1 className="title">Mis talleres</h1>
                </div>
                <div className="col-4 sm-12 align-right">....</div>
              </div>
            </div>
          </div>
        </div>
        <div className="content" key={keyrender}>
          <Items readonly={false} items={items} squeleton={squeleton} />
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
          height: 180px;
          width: 100%;
          z-index: 1;
          transition: top 0.8s;
        }
        @media screen and (min-width: ${breakpoint.media}) {
          .nav-bar {
            max-width: calc(100% - 200px);
          }
        }

        .nav-bar-left {
          max-width: 100%;
        }

        .nav-bar-hidden {
          top: -200px;
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
        .nav-bar-content {
          max-width: ${breakpoint.media};
          padding: 0 1rem;
          align: center;
          margin: auto;
        }
        .title {
          text-transform: uppercase;
          font-weight: 1000;
          padding-left: 45px;
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
    return { props: { session, categorias } };
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
