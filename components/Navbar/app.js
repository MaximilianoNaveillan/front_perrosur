/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Login from '../home/login';
import Icon from './Iconapp';
import styles from './styles';
import Spiner from '../Spiner';

const _routes = [
  {
    name: 'talleres',
    menu: false,
    items: [],
    route: '/miespacio',
    icon: 'FaUsers',
  },
  {
    name: 'recursos',
    menu: true,
    items: [
      { name: 'Descarga de documentos', route: '/#equipo' },
      { name: 'Aplicación detest', route: '/#taller' },
      { name: 'Actividades Lúdicas', route: '/#que_hacemos' },
      { name: 'Links de referencias', route: '/#dossier' },
      { name: 'Multimedias', route: '/#que_hacemos' },
    ],
    route: '/miespacio',
    icon: 'FaUsers',
  },
  {
    name: 'Mis entrelazar',
    menu: true,
    items: [
      { name: 'Iniciados', route: '/#equipo' },
      { name: 'Sin iniciar', route: '/#taller' },
      { name: 'Completados', route: '/#que_hacemos' },
    ],
    route: '/miespacio',
    icon: 'FaUsers',
  },
];
export default function Navbarapp({ pathname, data, status, usuario }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [classModal, setClassModal] = useState('modal-window');
  const [check, setCheck] = useState(-1);
  const [routes, setRoutes] = useState([]);

  const mobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    setCheck(-1);
  };

  const handleRoute = () => {
    setClassModal('modal-window modal-on');
  };
  const handleCloseModalLogin = () => {
    setClassModal('modal-window');
  };

  useEffect(() => {
    if (usuario.nivel < 3) {
      const defaultroutes = [
        { name: 'gestionar Talleres', route: '/miespacio/gestiontalleritem' },
      ];
      const nwroutes =
        usuario.nivel === 1
          ? [
              { name: 'Blog', route: '/miespacio/blog' },
              { name: 'Categorias', route: '/miespacio/categorias' },
            ].concat(defaultroutes)
          : defaultroutes;
      const nwitem = {
        name: 'mis parametros',
        menu: true,
        items: nwroutes,
        route: '/miespacio',
        icon: 'FaUsers',
      };
      setRoutes([..._routes, nwitem]);
    } else {
      setRoutes([..._routes]);
    }
  }, [usuario]);
  return (
    <>
      <div className="navbar" />
      <div className="container-nav">
        <div className="wrapper">
          <IconContext.Provider value={{ style: { fontSize: '1.7rem' } }}>
            <Link href="/" passHref>
              <div className="logo-container">
                <Image
                  src="/images/logoappbar.png"
                  alt="portada-entrelazar"
                  height="60px"
                  width="85px"
                />
              </div>
            </Link>
            <div className="nav-user">
              <a href="#!" className="btn" onClick={() => handleRoute()}>
                {data ? (
                  <i>
                    <Image
                      src={data.user.image}
                      alt="portada-entrelazar"
                      objectFit="cover"
                      layout="fill"
                    />
                  </i>
                ) : (
                  ''
                )}
              </a>
            </div>
            <button
              type="button"
              onClick={() => mobileMenu()}
              className="movile-icon "
            >
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </button>
            <ul className={`ul${!showMobileMenu}`}>
              <div className="container-ul">
                <li>
                  <div className="omrs-input-group">
                    <label htmlFor="buscar" className="omrs-input-filled">
                      <input
                        type="text"
                        id="buscar"
                        name="buscar"
                        autoComplete="off"
                        placeholder="BUSCA TU TALLER"
                        required
                      />
                      <FaSearch />
                    </label>
                  </div>
                </li>
                {routes.map((item, i) =>
                  !item.menu ? (
                    <li
                      onClick={() => setShowMobileMenu(false)}
                      key={i}
                      role="presentation"
                    >
                      <Link href={`${item.route}`} passHref>
                        <a className={item.route === pathname ? 'ahover' : ''}>
                          <div>
                            <Icon _class="nav" index={i} />
                            {item.name.toUpperCase()}
                          </div>
                        </a>
                      </Link>
                    </li>
                  ) : (
                    <label htmlFor={`ulControl${i}`} key={i}>
                      <input
                        type="checkbox"
                        id={`ulControl${i}`}
                        onChange={() => {
                          setCheck(i === check ? -1 : i);
                        }}
                        checked={check === i}
                      />
                      <label htmlFor={`ulControl${i}`} className="btn">
                        <li>
                          <a>
                            <div>
                              <Icon _class="nav" index={i} />
                              {item.name.toUpperCase()}
                              <span>
                                <FaChevronDown />
                              </span>
                            </div>
                          </a>

                          <ul>
                            {item.items.map((_item, ii) => (
                              <li
                                onClick={() => setShowMobileMenu(false)}
                                key={`2${ii}`}
                                role="presentation"
                              >
                                <Link href={`${_item.route}`} passHref>
                                  <a
                                    className={
                                      item.route === pathname ? 'ahover' : ''
                                    }
                                  >
                                    <div> {_item.name.toUpperCase()}</div>
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </label>
                    </label>
                  )
                )}

                <li className="container-user">
                  <a href="#!" className="btn" onClick={() => handleRoute()}>
                    {status !== 'loading' ? (
                      <div className="container-user">
                        {data ? (
                          <i>
                            <Image
                              src={data.user.image}
                              alt="portada-entrelazar"
                              objectFit="cover"
                              layout="fill"
                            />
                          </i>
                        ) : (
                          'REGISTRARSE'
                        )}
                      </div>
                    ) : (
                      <div className="container-user">
                        <Spiner />
                      </div>
                    )}
                  </a>
                </li>
              </div>
            </ul>
          </IconContext.Provider>
        </div>
      </div>
      <Login
        handleCloseModalLogin={handleCloseModalLogin}
        usersession={data}
        _class={classModal}
      />
      <style jsx>{styles}</style>
    </>
  );
}
