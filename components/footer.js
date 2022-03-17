import { useState } from "react";
import { colors, breakpoint, fonts } from "../styles/theme.js";
import Image from "next/image";
import Icon from "../components/Navbar/Icon";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaVimeoV,
  FaInstagram,
  FaFacebookF,
  FaAlignRight,
  FaMailBulk,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function Footer() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();
  const path = router.pathname;
  const routes = [
    { name: "inicio", route: "/", icon: "FaHome" },
    { name: "quienes somos", route: "/nosotros", icon: "FaUsers" },
    { name: "tienda", route: "/tienda", icon: "FaStore" },
    { name: "actualidad", route: "/actualidad", icon: "FaNewspaper" },
    { name: "recursos", route: "/recursos", icon: "FaCogs" },
    { name: "contacto", route: "/contacto", icon: "FaAddressCard" },
  ];

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-12">
              <div className="logo-container">
                <Image
                  src={`/images/logoappbar.png`}
                  alt="portada-entrelazar"
                  height="60px"
                  width="85px"
                />
              </div>
            </div>
            <div className="col-4">
              <ul className={`ul${!showMobileMenu}`}>
                {routes.map((item, i) => (
                  <li onClick={() => setShowMobileMenu(false)} key={i}>
                    <Link href={`${item.route}`}>
                      <a className={item.route === path ? "ahover" : ""}>
                        <div>
                          <Icon _class="footer" index={i} />
                          {item.name}
                        </div>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-4">...</div>
            <div className="col-4">...</div>
            <div className="row detail">
              <div className="col-5 sm-12">
                <p>Idioma/ Español</p>
                <p>Configuración de Usuario</p>
                <p>@ENTRELAZAR 2022</p>
                <p>@TALLERPERROSUR 2022</p>
              </div>
              <div className="col-7 sm-12">
                <div className="social">
                  <div className="card">
                    <div className="social-links">
                      <a>
                        <i>
                          <FaFacebookF />
                        </i>
                      </a>
                      <a>
                        <i>
                          <FaInstagram />
                        </i>
                      </a>
                      <a>
                        <i>
                          <FaVimeoV />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="write-use">
                  <label>Escrivenos</label>
                  <i>
                    <FaAlignRight />
                  </i>
                  <i>
                    <FaMailBulk />
                  </i>

                  <span>contacto@tallerperrosur.cl</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding-top: 3rem;
          padding-bottom: 4rem;
          background-color: ${colors.green};
        }
        .content {
          padding: 0 1.7rem;
        }
        ul {
          margin-top: 3rem;
          display: flex;
          list-style: none;
          width: 100%;
          flex-direction: column;
          transition: 0.5 s all ease;
        }
        li {
          height: 2.2rem;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          color: ${colors.primary};
          font-family: ${fonts.base};
          font-size: 1.5rem;
          font-weight: 300;
          cursor: pointer;
          transition: 0.5s all ease;
          text-decoration: none;
        }
        a div {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: left;
          align-items: center;
          text-transform: capitalize;
        }
        a:hover {
          color: ${colors.primary_darken};
          transition: 0.5s all ease;
        }
        .ahover {
          color: ${colors.primary_darken};
          transition: 0.5s all ease;
        }
        .movile-icon {
          display: none;
          margin-right: 1rem;
        }
        .col-5 {
          margin-top: 2rem;
        }
        .detail {
          color: ${colors.primary};
          font-family: ${fonts.base};
          font-size: 1.5rem;
          font-weight: 500;
        }
        .social {
          margin-top: 2rem;
        }
        .card {
          color: rgba(19, 19, 21, 0.6);
          font-size: 3.5rem;
          margin: 0 1.3rem 0 0.7rem;
          border: 0.3rem solid black;
          background-color: ${colors.primary_darken};

          padding-left: 0.7rem;
          padding-top: 0.7rem;
          -webkit-box-shadow: 0.7rem 0.7rem 0px -4px ${colors.primary_darken};
          box-shadow: 0.7rem 0.7em -4px -4px ${colors.primary_darken};
          background-clip: content-box;
          height: 146px;
          width: 393px;
          margin: auto;
          text-align: center;
        }
        .social-links {
          height: 90px;
          padding: 20px;
          text-align: center;
        }
        .social-links a {
          text-align: center;
          float: left;
          width: 86px;
          height: 86px;
          padding-top: 7px;
          border: 6px solid rgba(19, 19, 21, 0.6);
          border-radius: 100%;
          margin-right: 12px; /*space between*/
          margin-left: 12px;
          display: flex;
          align-items: flex-start;
          transition: all 0.4s;
          -webkit-transition: all 0.4s;
        }
        .social-links a i {
          font-size: 43px;
          align-self: center;
          color: rgba(19, 19, 21, 0.6);
          transition: all 0.4s;
          -webkit-transition: all 0.4s;
          margin: 0 auto;
        }
        .social-links a i::before {
          display: inline-block;
          text-decoration: none;
        }
        .social-links a:hover {
          background: ${colors.primary};
          border-color: ${colors.primary_darken};
        }
        .social-links a:hover i {
          color: ${colors.primary_darken};
        }
        .write-use {
          background: black;
          color: white;
          vertical-align: middle;
          padding: 1rem 1rem;
          margin-top: 4rem;
          margin-bottom: 2rem;
          font-weight: 300;
        }
        .write-use label {
          font-size: 30px;
          margin-right: 1.5rem;
        }
        .write-use span {
          margin-left: 1.5rem;
        }
      `}</style>
    </>
  );
}
