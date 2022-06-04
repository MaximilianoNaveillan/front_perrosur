import { useState, useEffect } from 'react';
import Image from 'next/image';
import { breakpoint } from '../../styles/theme';

function Btn({ handleToggle, select, itemname }) {
  const src = `/images/ICONONIVEL${select + 1}.png`;
  return (
    <>
      <button type="button" onClick={handleToggle}>
        <div className="row">
          <div className="col-6">{itemname}</div>
          <div className="col-6 a-image">
            <Image
              src={src}
              alt="portada-entrelazar"
              height="25px"
              width="80px"
            />
          </div>
        </div>
      </button>
      <style jsx>{`
        button {
          border: none;
          background: transparent;
          padding: 9px 20px;
          margin: 0;
          font-size: 16px;
          line-height: 20px;
          font-weight: bold;
          cursor: pointer;
          display: inline-block;
          border-radius: 5px;
          text-transform: uppercase;
          height: 60px;
          width: 100%;
          text-align: left;
        }

        @media screen and (max-width: ${breakpoint.sm}) {
          button {
            padding: 9px 14px;
            font-size: 15px;
          }
        }
        .row {
          height: 30px;
          line-height: 30px;
        }
        .col-6 {
          height: 30px;
          line-height: 30px;
        }
        .a-image {
          text-align: end;
        }
        .a {
          text-align: left;
        }
      `}</style>
    </>
  );
}

function MenuToggle({ handleLevel }) {
  const [select, setSelect] = useState(0);
  const [toggle, setToggle] = useState(false);
  const options = [
    { key: 0, name: 'introductorio' },
    { key: 1, name: 'intermedio' },
    { key: 2, name: 'avanzado' },
  ];

  const styletoggle = toggle ? 'toggle' : 'no-toggle';

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleselect = (item) => {
    setSelect(item.key);
    setToggle(false);
  };

  useEffect(() => {
    handleLevel(select + 1);
  }, [select]);

  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        role="presentation"
        className="dropdown"
      >
        <Btn
          handleToggle={handleToggle}
          select={select}
          itemname={options[select].name}
        />
        <div className={`dropdown-content ${styletoggle}`}>
          {options.map((item) => (
            <div className="list" key={item.key}>
              <div
                className="row"
                onClick={() => handleselect(item)}
                role="presentation"
              >
                <div className="a col-6">{item.name}</div>
                <div className="a-image col-6">
                  <Image
                    src={`/images/ICONONIVEL${item.key + 1}.png`}
                    alt="portada-entrelazar"
                    height="25px"
                    width="80px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .dropdown {
          position: relative;
          display: inline-block;
          margin: auto;
          width: 100%;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: white;
          width: 100%;
          -webkit-box-shadow: 2px 5px 9px 1px rgba(0, 0, 0, 0.39);
          box-shadow: 2px 5px 9px 1px rgba(0, 0, 0, 0.39);
          z-index: 1;
          border-radius: 4px;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }

        @media only screen and (hover: none) and (pointer: coarse) {
          .no-toggle {
            display: none !important;
          }

          .toggle {
            display: block !important;
          }
        }

        .list {
          height: 40px;
          padding: 0 23px;
          line-height: 40px;
          font-size: 18px;
          text-transform: capitalize;
        }
        @media screen and (max-width: ${breakpoint.sm}) {
          .list {
            font-size: 16px;
            padding: 0 16px;
          }
        }
        @media screen and (max-width: ${breakpoint.xxs}) {
          .dropdown-content {
            width: 240px;
          }
        }
        .list:hover {
          background-color: rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }
        .a-image {
          text-align: end;
          margin-top: 5px;
        }
        .a {
          text-align: left;
        }
      `}</style>
    </>
  );
}

export default MenuToggle;
