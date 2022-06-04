import { useState } from 'react';
import { getSession } from 'next-auth/react';
import { FaPlusCircle } from 'react-icons/fa';
import dbConnect from '../../lib/dbConnect';
import Usuario from '../../models/usuario';
import Talleritem from '../../models/talletitem';
import { colors, breakpoint } from '../../styles/theme';
import Spiner from '../../components/Spiner';
import ItemAdd from '../../components/dashboard/talleritem/itemeadd';

function TallerItem({ talleritem }) {
  const [load, setload] = useState(false);
  const [add, setAdd] = useState(false);
  // console.log(session);
  return (
    <>
      {add && (
        <div className="add" onClick={() => setAdd(false)} role="presentation">
          <ItemAdd />
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
      <div className="nav-bar">
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
      <div className="container">
        <div className="content">
          {talleritem && (
            <>
              {talleritem.map((item) => (
                <div className="card" key={item._id}>
                  <div className="row">
                    <div className="col-12">{item.titulo}</div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

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
        .add {
          position: fixed;
          top: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.45);
          height: 100%;
          width: 100%;
          z-index: 3;
        }
        .container {
          background: white;
        }
        .content {
          background: white;
          margin-top: 200px;
          min-height: calc(100vh - 70px);
          padding: 1rem;
        }
        .nav-bar {
          background: ${colors.magenta};
          padding: 1.7rem 1rem;
          align: center;
          position: fixed;
          height: 200px;
          width: 100%;
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
    const res = await Usuario.findOne({ email: session.user.email });

    if (res.nivel > 2)
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    try {
      await dbConnect();
      const _talleritem = await Talleritem.find({});
      const talleritem = _talleritem.map((doc) => {
        const taller = doc.toObject();
        // eslint-disable-next-line no-underscore-dangle
        taller._id = `${taller._id}`;
        taller.inicio = taller.inicio.toString();
        taller.termino = taller.termino.toString();
        return taller;
      });

      return { props: { session, talleritem } };
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
