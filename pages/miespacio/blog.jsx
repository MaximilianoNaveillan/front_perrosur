import Head from 'next/head';
import { useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import EquipoBlog from '../../components/dashboard/equipoblog';
import TallerBlog from '../../components/dashboard/tallerblog';
import TiendaBlog from '../../components/dashboard/tiendablog';
import ActualidadBlog from '../../components/dashboard/actualidadblog';
import Menu from '../../components/miespacio/menu/index';
import MenuModal from '../../components/dashboard/menumodal';
import dbConnect from '../../lib/dbConnect';
import Equipo from '../../models/equipo';
import Taller from '../../models/taller';
import Tienda from '../../models/tienda';
import Actualidad from '../../models/actualidad';

import Spiner from '../../components/Spiner';
import { colors, breakpoint } from '../../styles/theme';

function Blog({ equipos, tallers, tiendas, actualidads }) {
  const [classModal, setClassModal] = useState('');
  const router = useRouter();
  const { pathname, asPath } = router;
  const [load, setLoad] = useState({
    state: false,
    status: undefined,
    msg: 'Cargando.',
  });

  const handleModal = () => {
    router.push(pathname, '/miespacio/blog#equipo-form');
  };
  const handleModalTaller = () => {
    router.push(pathname, '/miespacio/blog#taller-form');
  };
  const handleModalTienda = () => {
    router.push(pathname, '/miespacio/blog#tienda-form');
  };
  const handleModalActualidad = () => {
    router.push(pathname, '/miespacio/blog#actualidad-form');
  };
  const handleDelete = () => {
    setLoad({
      state: true,
      status: undefined,
      msg: 'Cargando.',
    });
  };
  useEffect(() => {
    if (
      asPath.includes('#equipo-form') ||
      asPath.includes('#taller-form') ||
      asPath.includes('#tienda-form') ||
      asPath.includes('#actualidad-form')
    ) {
      router.push(pathname, '/miespacio/blog');
      setClassModal('');
    }
  }, []);
  useEffect(() => {
    if (
      asPath.includes('#equipo-form') ||
      asPath.includes('#taller-form') ||
      asPath.includes('#tienda-form') ||
      asPath.includes('#actualidad-form')
    ) {
      setClassModal('overflow-hidden');
    } else {
      setClassModal('');
    }
  });

  return (
    <>
      <Head>
        <title>blog | perrosur</title>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <Menu />
      <div className={`content ${classModal}`}>
        {load.state && (
          <div className="load">
            <div className="card-text">
              <div className="spiner">
                <Spiner />
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-12">
            <div className="container-iems">
              <MenuModal handleModal={() => handleModal()} />
              <section>
                <EquipoBlog handleDelete={handleDelete} equipos={equipos} />
              </section>
            </div>
          </div>
          <div className="col-12">
            <div className="container-iems">
              <MenuModal handleModal={() => handleModalTaller()} />
              <section>
                <TallerBlog handleDelete={handleDelete} tallers={tallers} />
              </section>
            </div>
          </div>
          <div className="col-12">
            <div className="container-iems">
              <MenuModal handleModal={() => handleModalTienda()} />
              <section>
                <TiendaBlog
                  handleDelete={handleDelete}
                  tiendas={tiendas}
                  equipos={equipos}
                />
              </section>
            </div>
          </div>
          <div className="col-12">
            <div className="container-iems">
              <MenuModal handleModal={() => handleModalActualidad()} />
              <section>
                <ActualidadBlog
                  handleDelete={handleDelete}
                  actualidads={actualidads}
                />
              </section>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .load {
          position: fixed;
          top: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.45);
          height: 100%;
          width: 100%;
          z-index: 3;
        }
        .card-text {
          height: 100%;
        }
        .spiner {
          display: flex;
          height: 100%;
          overflow: hidden;
          width: 100%;
          justify-content: space-around;
          align-items: center;
        }
        .spiner h4 {
          position: absolute;
          padding-top: 80px;
          width: 100%;
          text-align: center;
        }
        .overflow-hidden {
          display: block;
          max-height: calc(100vh - 70px - 0.1rem);
          overflow: hidden;
        }
        .content {
          padding: 1rem;
          max-width: 100%;
        }
        .container-iems {
          position: relative;
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          min-height: 430px;
          padding: 1rem 0;
        }
        section {
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: #f4f2f4;
          height: 100%;
          width: 100%;
          text-decoration: none;
          color: #444444;
          border: 0.1rem solid #ddd;
          font-weight: bold;
          border-radius: 8px;
          transition: 0.5s all ease;
        }
        .modal {
          position: fixed;
          top: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.45);
          height: 100%;
          width: 100%;
          z-index: 3;
          display: flex;
          align: center;
          align-items: center;
          padding: 1rem;
        }
        .card-modal {
          width: ${breakpoint.xs};
          background-color: white;
          align-items: center;
          margin: auto;
          border: 1px solid black;
          border-radius: 6px;
        }
        .card-modal-text {
          padding: 1.7rem 0.7rem;
          text-align: center;
          font-size: 20px;
        }
        .card-modal-action {
          text-align: right;
          padding: 0 1rem 1rem;
        }
        .modal a {
          background-color: ${colors.primary};
          color: #2f2f30;
          line-height: 2rem;
          padding: 0.7rem 1rem;
          font-size: 1rem;
          font-weight: 400;
          border-radius: 3px;
          text-align: center;
          text-decoration: none;
          transition: 0.5s all ease;
          cursor: pointer;
        }
        .modal a:hover {
          background-color: ${colors.primary_darken};
        }

        .content-img {
          width: 100%;
          padding-top: 100%; /* 1:1 Aspect Ratio */
          position: relative; /* If you want text inside of it */
        }

        .text {
          color: black;
          font-weight: 1000;
          position: absolute;
          bottom: 1.3rem;
          left: 1.3rem;
          text-align: left;
          white-space: pre-line;
          text-transform: uppercase;
        }
        @media screen and (max-width: ${breakpoint.xs}) {
          .text {
            left: 1rem;
          }
        }
        .actions {
          text-align: right;
          background: white;
          padding: 1rem 0;
        }
        .actions a {
          color: black;
          margin: 0 0.7rem;
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
    const res = await Actualidad.find({}, { _id: 1, nombre: 1, date: 1 })
      .sort({ $natural: 1 })
      .limit(8);

    const actualidads = res.map((doc) => {
      const actualidad = doc.toObject();
      // eslint-disable-next-line no-underscore-dangle
      actualidad._id = `${actualidad._id}`;
      actualidad.date = `${actualidad.date}`;
      return actualidad;
    });
    try {
      await dbConnect();
      const res0 = await Equipo.find({}, { _id: 1, nombre: 1 });
      const equipos = res0.map((doc) => {
        const equipo = doc.toObject();
        // eslint-disable-next-line no-underscore-dangle
        equipo._id = `${equipo._id}`;
        return equipo;
      });
      try {
        await dbConnect();
        const res1 = await Taller.find({}, { _id: 1, nombre: 1 });
        const tallers = res1.map((doc) => {
          const taller = doc.toObject();
          // eslint-disable-next-line no-underscore-dangle
          taller._id = `${taller._id}`;
          return taller;
        });
        try {
          await dbConnect();
          const res2 = await Tienda.find({}, { _id: 1, nombre: 1 });
          const tiendas = res2.map((doc) => {
            const tienda = doc.toObject();
            // eslint-disable-next-line no-underscore-dangle
            tienda._id = `${tienda._id}`;
            return tienda;
          });

          return { props: { equipos, tallers, tiendas, actualidads } };
        } catch (error) {
          return { props: { success: false, error: 'Error al cargar datos.' } };
        }
      } catch (error) {
        return { props: { success: false, error: 'Error al cargar datos.' } };
      }
    } catch (error) {
      return { props: { success: false, error: 'Error al cargar datos.' } };
    }
  } catch (error) {
    return { props: { success: false, error: 'Error al cargar datos.' } };
  }
};

export default Blog;
