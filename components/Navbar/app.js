/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaUser,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaSearch,
} from 'react-icons/fa';
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
];

export default function Navbarapp({ pathname, data, status, usuario }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [classModal, setClassModal] = useState('modal-window');
  const [searchinput, setSearchinput] = useState('');
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

  const changeSearch = (e) => {
    setSearchinput(e.target.value);
  };

  useEffect(() => {
    if (usuario) {
      if (usuario.nivel < 3) {
        const defaultroutes = [
          { name: 'gestionar Talleres', route: '/miespacio/gestiontalleritem' },
        ];
        const nwroutes =
          usuario.nivel === 1
            ? [
                { name: 'Blog', route: '/miespacio/blog' },
                { name: 'Categorias', route: '/miespacio/categorias' },
                { name: 'Gestionar usuarios', route: '/miespacio/usuarios' },
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
                    {data.user.image ? (
                      <Image
                        src={data.user.image}
                        alt="portada-entrelazar"
                        objectFit="cover"
                        layout="fill"
                      />
                    ) : (
                      <IconContext.Provider
                        value={{
                          style: {
                            height: '100%',
                            width: '100%',
                            padding: '20%',
                          },
                        }}
                      >
                        <FaUser />
                      </IconContext.Provider>
                    )}
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
                        value={searchinput}
                        id="buscar"
                        list="ietmslist"
                        name="searchinput"
                        autoComplete="off"
                        placeholder="BUSCA TU TALLER"
                        onChange={(e) => changeSearch(e)}
                        required
                      />
                      <IconContext.Provider
                        value={{
                          style: {
                            fontSize: '20px',
                            marginTop: '-3px',
                          },
                        }}
                      >
                        <FaSearch />
                      </IconContext.Provider>

                      <Link href={`miespacio/#t-${searchinput}`} passHref>
                        <button type="button">ir</button>
                      </Link>
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
                            {data.user.image ? (
                              <Image
                                src={data.user.image}
                                alt="portada-entrelazar"
                                objectFit="cover"
                                layout="fill"
                              />
                            ) : (
                              <IconContext.Provider
                                value={{
                                  style: {
                                    height: '100%',
                                    width: '100%',
                                    padding: '20%',
                                  },
                                }}
                              >
                                <FaUser />
                              </IconContext.Provider>
                            )}
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
