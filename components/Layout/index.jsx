import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import Navbar from '../Navbar';
import Navbarapp from '../Navbar/app';
import styles from './Layout.module.css';

const _URL = process.env.BASE_URL;
export default function Layout({ children, isapp, pathname, asPath, router }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeOut');
  const [usuario, setUsuario] = useState({});
  const { data, status } = useSession();
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
        { name: 'Artistas Libres', route: '/#que_hacemos' },
      ],
      route: '/',
      icon: 'FaUsers',
    },
    {
      name: 'tienda',
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
    if (!isapp) router.push('/miespacio');
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
        setUsuario({});
      });
  };

  useEffect(() => {
    if (status === 'loading' && !isapp) router.push('/');
    if (status === 'authenticated') userHandler();
  }, [status]);

  useEffect(() => {
    setTransitionStage('fadeIn');
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('fadeOut');
  }, [pathname]);

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
            status={status}
            usuario={usuario}
          />
        ) : (
          <Navbar
            routes={routes}
            router={router}
            pathname={pathname}
            asPath={asPath}
            data={data}
            status={status}
          />
        )}
      </div>

      <main>
        {' '}
        <div
          onTransitionEnd={() => {
            if (transitionStage === 'fadeOut') {
              setDisplayChildren(children);
              setTransitionStage('fadeIn');
            }
          }}
          className={`${styles.contentt} ${styles[transitionStage]}`}
        >
          {displayChildren}
        </div>
      </main>
    </>
  );
}
