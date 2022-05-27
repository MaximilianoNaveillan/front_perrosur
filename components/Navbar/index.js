/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import Login from '../home/login';
import Icon from './Icon';
import styles from './styles';
import Spiner from '../Spiner';

export default function Navbar({
  routes,
  router,
  pathname,
  asPath,
  data,
  status,
}) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [classModal, setClassModal] = useState('modal-window');
  const [check, setCheck] = useState(-1);

  useEffect(() => {
    if (asPath.includes('/#login-modal')) {
      setClassModal('modal-window modal-on');
    } else {
      setClassModal('modal-window');
    }
  });

  const mobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    setCheck(-1);
  };

  const handleRoute = () => {
    router.push(pathname, '/#login-modal');
  };
  return (
    <>
      <div className="navbar" />
      <div className="container-nav">
        <div className="wrapper">
          <IconContext.Provider value={{ style: { fontSize: '1.7rem' } }}>
            <div className="logo-container">
              <Image
                src="/images/logoappbar.png"
                alt="portada-entrelazar"
                height="60px"
                width="85px"
              />
            </div>
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

                {asPath.includes('/miespacio') ? (
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
                ) : (
                  ''
                )}
              </div>
            </ul>
          </IconContext.Provider>
        </div>
      </div>
      {asPath && (
        <Login usersession={data} _class={classModal} path={pathname} />
      )}
      <style jsx>{styles}</style>
    </>
  );
}
