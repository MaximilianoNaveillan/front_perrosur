/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useSession } from 'next-auth/react';
import Login from '../home/login';
import styles from './styles';
import Spiner from '../Spiner';

export default function Navbarapp({ router, pathname, asPath }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [classModal, setClassModal] = useState('modal-window');

  const { data, status } = useSession();

  useEffect(() => {
    if (asPath.includes('/#login-modal')) {
      setClassModal('modal-window modal-on');
    } else {
      setClassModal('modal-window');
    }
  });

  const mobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
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
            <div
              onClick={() => mobileMenu()}
              className="movile-icon"
              role="presentation"
            >
              {showMobileMenu ? (
                <FaTimes
                  style={{
                    marginRight: '0.5rem',
                  }}
                />
              ) : (
                <FaBars
                  style={{
                    marginRight: '0.5rem',
                  }}
                />
              )}
            </div>
            <ul className={`ul${!showMobileMenu}`}>
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
