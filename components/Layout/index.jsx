import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaChevronDown } from 'react-icons/fa';
// import dbConnect from '../../lib/dbConnect';
// import Usuario from '../../models/usuario';
import Navbar from '../Navbar';
import Navbarapp from '../Navbar/app';
import styles from './Layout.module.css';
import { colors, fonts, breakpoint } from '../../styles/theme';

const _URL = process.env.BASE_URL;

function SectionUser({ usuario, usersection }) {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [total, setTotal] = useState(0);
  const [poriniciar, setPorIniciar] = useState(0);
  const [encurso, setEncurso] = useState(0);
  const [terminado, setTerminado] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  useEffect(() => {
    if (usuario && usuario.mistalleres) {
      const talleres = usuario.mistalleres;
      const piniciar = talleres.filter((ele) => ele.status === false).length;
      const ecurso = talleres.filter((ele) => ele.status === true).length;
      const term = talleres.filter((ele) => ele.status === null).length;
      setTerminado(term);
      setEncurso(ecurso);
      setPorIniciar(piniciar);
      setTotal(talleres.length);
    }
  }, [usuario]);
  return (
    <>
      <div
        className={`${
          !scrolling && usersection
            ? 'user-seciton'
            : 'user-seciton nav-bar-hidden'
        } `}
      >
        <div className="action" role="presentation">
          <span>MIS ENTRELAZAR</span>
          <i>
            <FaChevronDown />
          </i>
        </div>
        <div className="list">
          <div className="subtitle">
            <span>Todos mis Entrelazar</span> <i>{total}</i>
          </div>
          <div className="item">
            Por iniciar <i>{poriniciar}</i>
          </div>
          <div className="item">
            En curso <i>{encurso}</i>
          </div>
          <div className="item">
            Finalizados <i>{terminado}</i>
          </div>
        </div>
      </div>
      <style jsx>{`
        .user-seciton {
          position: fixed;
          top: 78px;
          right: 110px;
          background: ${colors.primary};
          height: 163px;
          min.height: 163px;
          width: 280px;
          min-width: 280px;
          z-index: 2;
          transition: top 0.8s;
          border-radius: 3px;
          animation-name: user-on;
          animation-duration: 1.8s;
          transition: all 0.8s ease;
        }

        .nav-bar-hidden {
          top: -200px;
          transition: all 0.8s ease;
          animation-name: user-off;
          animation-duration: 0.8s;
        }
        @keyframes user-on {
          from {
            top: -200px;
          }
          to {
            top: 78px;
          }
        }
        @keyframes user-off {
          from {
            top: 78px;
          }
          to {
            top: -200px;
          }
        }
        .action {
          height: 34px;
          line-height: 34px;
          padding: 0 20px;
        }
        .action i {
          float: right;
          margin-right: 7.5px;
          font-size: 20px;
          line-height: 35px;
        }
        .action span {
          font-size: 18px;
          font-weight: 800;
        }
        .list {
          padding: 5px 0;
        }
        .list i {
          margin-top: 3px;
          float: right;
          font: ${fonts.base};
          font-size: 15.3px;
          line-height: 20px;
          background: black;
          width: 40px;
          height: 20px;
          text-align: center;
          color: white;
          text-decoration: none;
          border-radius: 4px;
        }
        .subtitle {
          font-size: 17px;
          font-weight: 600;
          margin-bottom: 9px;
          padding: 0 20px;
        }
        .subtitle span {
          opacity: 0.7;
        }
        .subtitle i {
          float: right;
          font: ${fonts.base};
          font-size: 15.3px;
          line-height: 20px;
          background: black;
          width: 40px;
          height: 20px;
          text-align: center;
          color: white;
          text-decoration: none;
          border-radius: 4px;
        }
        .item {
          height: 32px;
          line-height: 27px;
          cursor: pointer;
          font-weight: 380;
          font-size: 17px;
          padding: 0 20px;
        }
        .item i {
          margin-top: 7px;
          float: right;
          font: ${fonts.base};
          font-size: 15.3px;
          line-height: 20px;
          background: black;
          width: 40px;
          height: 20px;
          text-align: center;
          color: white;
          text-decoration: none;
          border-radius: 4px;
        }
        .item:hover {
          background: ${colors.primary_darken};
        }
        @media screen and (max-width: ${breakpoint.md}) {
          .user-seciton {
            width: 60%;
            min-width: 60%;
            right: 20%;
            background: transparent;
            padding-top: 28px;
          }
          .action {
            height: 30px;
          }
          .subtitle {
            height: 14px;
          }
          .item {
            height: 27px;
          }
        }
        @media screen and (max-width: ${breakpoint.sm}) {
          .user-seciton {
            width: 80%;
            min-width: 80%;
            right: 10%;
          }
        }
        @media screen and (max-width: ${breakpoint.xs}) {
          .action span {
            display: inline-block;
            font-size: 16px;
            width: 100%;
          }
          .action i {
            display: none;
          }
          .item {
            font-size: 16px;
          }
        }
        @media screen and (max-width: ${breakpoint.xxs}) {
          .user-seciton {
            width: 100%;
            left: 0;
            right: 0;
          }
          .action {
            padding: 0 15px 0 55px;
          }
          .subtitle {
            padding: 0 15px 0 55px;
          }
          .subtitle span {
            display: inline-flex;
            width: 60vw;
            max-height: 20px;
            overflow: hidden;
          }
          .item {
            padding: 0 15px 0 55px;
          }
        }
      `}</style>
    </>
  );
}

function Main({
  children,
  transitionStage,
  setDisplayChildren,
  setTransitionStage,
  displayChildren,
}) {
  return (
    <div
      onTransitionEnd={() => {
        if (transitionStage === 'fadeOut') {
          setDisplayChildren(children);
          setTransitionStage('fadeIn');
        }
      }}
      className={`main ${styles.contentt} ${styles[transitionStage]}`}
    >
      {displayChildren}
    </div>
  );
}

export default function Layout({
  children,
  isapp,
  pathname,
  asPath,
  router,
  data,
  usersection,
  setUsuario,
  usuario,
}) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeOut');

  const routes = [
    { name: 'inicio', menu: false, items: [], route: '/', icon: 'FaHome' },
    {
      name: 'quienes somos',
      menu: true,
      items: [
        { name: 'El Equipo', route: '/#equipo' },
        { name: 'El Taller', route: '/#taller' },
        { name: 'Que Hacemos', route: '/#que_hacemos' },
        { name: 'Dossier', route: '/#dossier' },
      ],
      route: '/',
      icon: 'FaUsers',
    },
    {
      name: 'portafolio',
      menu: false,
      items: [],
      route: '/tienda',
      icon: 'FaStore',
    },
    {
      name: 'actualidad',
      menu: false,
      items: [],
      route: '/#actualidad',
      icon: 'FaNewspaper',
    },
    {
      name: 'recursos',
      menu: false,
      items: [],
      route: '/#recursos',
      icon: 'FaCogs',
    },
    {
      name: 'contacto',
      menu: false,
      items: [],
      route: '/#contacto',
      icon: 'FaAddressCard',
    },
    {
      name: 'talleres',
      menu: false,
      items: [],
      route: '/miespacio',
      icon: 'FaAddressCard',
    },
  ];

  const userHandler = () => {
    //    if (!isapp) router.push('/miespacio');
    axios
      .patch(
        `${_URL}/api/usuario`,
        { email: data.user.email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        setUsuario(res.data.usuario);
      })
      .catch(() => {
        setUsuario({
          misrecursos: [],
          mistalleres: [],
        });
      });
  };

  useEffect(() => {
    setTransitionStage('fadeIn');
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('fadeOut');
  }, [pathname]);
  useEffect(() => {
    if (data) userHandler();
  }, [data]);

  return (
    <>
      <div className={styles.nav}>
        {isapp ? (
          <Navbarapp
            routes={routes}
            router={router}
            pathname={pathname}
            asPath={asPath}
            data={data}
            usuario={usuario}
            usersection={usersection}
          />
        ) : (
          <Navbar
            routes={routes}
            router={router}
            pathname={pathname}
            asPath={asPath}
            data={data}
          />
        )}
      </div>
      <SectionUser usersection={usersection} usuario={usuario} />

      <Main
        transitionStage={transitionStage}
        setDisplayChildren={setDisplayChildren}
        setTransitionStage={setTransitionStage}
        displayChildren={displayChildren}
        usuario={usuario}
      >
        {children}
      </Main>
    </>
  );
}
