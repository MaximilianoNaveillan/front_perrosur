import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import Navbar from './Navbar';
import Navbarapp from './Navbar/app';

const S_URL = process.env.SERVER_URL;
export default function Layout({ children, isapp, pathname, asPath, router }) {
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
      .get(`${S_URL}/usuario/email/${data.user.email}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (status === 'loading' && !isapp) router.push('/');
    if (status === 'authenticated') userHandler();
  }, [status]);

  return (
    <>
      {isapp ? (
        <Navbarapp
          routes={routes}
          router={router}
          pathname={pathname}
          asPath={asPath}
          data={data}
          status={status}
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
      <main>{children}</main>
    </>
  );
}
