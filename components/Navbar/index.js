import { useState } from "react";
import styles from "./styles";
import Icon from "./Icon";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function Navbar({ routes }) {
  const router = useRouter();
  const path = router.pathname;
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <div className="navbar"></div>
      <div key={`nav${showMobileMenu}`} className="container-nav">
        <div className="wrapper">
          <IconContext.Provider value={{ style: { fontSize: "1.6em" } }}>
            <div className="logo-container">
              <Image
                src={`/images/logoappbar.png`}
                alt="portada-entrelazar"
                height="60px"
                width="85px"
              />
            </div>
            <div
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="movile-icon"
            >
              {showMobileMenu ? (
                <FaTimes
                  style={{
                    marginRight: "0.5rem",
                  }}
                />
              ) : (
                <FaBars
                  style={{
                    marginRight: "0.5rem",
                  }}
                />
              )}
            </div>
            <ul className={`ul${!showMobileMenu}`}>
              {routes.map((item, i) =>
                !item.menu ? (
                  <li onClick={() => setShowMobileMenu(false)} key={i}>
                    <Link href={`${item.route}`}>
                      <a className={item.route === path ? "ahover" : ""}>
                        <div>
                          <Icon _class="nav" index={i} />
                          {item.name.toUpperCase()}
                        </div>
                      </a>
                    </Link>
                  </li>
                ) : (
                  <label key={i}>
                    <input
                      onFocus={() => console.log("ppp")}
                      type="checkbox"
                      id={`ulControl${i}`}
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
                          {item.items.map((item, ii) => (
                            <li
                              onClick={() => setShowMobileMenu(false)}
                              key={`2` + ii}
                            >
                              <Link href={`${item.route}`}>
                                <a
                                  className={
                                    item.route === path ? "ahover" : ""
                                  }
                                >
                                  <div> {item.name.toUpperCase()}</div>
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
            </ul>
          </IconContext.Provider>
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  );
}
