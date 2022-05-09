/* eslint-disable jsx-a11y/label-has-associated-control */
import { FaChevronCircleLeft } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import { colors } from '../../styles/theme';

export default function menuequipo({ handleModal }) {
  const [check, setCheck] = useState(false);
  const [tmp, setTmP] = useState(undefined);
  const [over, setOver] = useState(false);
  const { current: FIEL_ID } = useRef(
    `${Math.random().toString(36)}00000000000000000`.slice(2, 7)
  );
  const hover = (e) => {
    setOver(e);
  };

  useEffect(() => {
    setTmP(FIEL_ID);
  }, []);

  return (
    <>
      <div>
        {tmp && (
          <div>
            <input
              type="checkbox"
              id={tmp}
              className="visually-hidden "
              onChange={() => {
                setCheck(!check);
              }}
              value={check}
              checked={over}
            />

            <div
              className="update-container"
              onMouseEnter={() => {
                hover(true);
              }}
              onMouseLeave={() => {
                hover(false);
              }}
            >
              <div className="update">
                <ul>
                  <li>
                    <button type="button" onClick={() => handleModal()}>
                      AGREGAR{' '}
                    </button>
                  </li>
                </ul>
              </div>

              <div className="control">
                <label htmlFor={tmp}>
                  <div>
                    <a className="btn-tab">
                      <FaChevronCircleLeft />
                    </a>
                  </div>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .update-container {
          position: absolute;
          display: flex;
          right: 0;
          bottom: 1rem;
          background: ${colors.primary_darken};
          border-radius: 8px;
          z-index: 2;
        }

        .visually-hidden {
          position: absolute;
          left: -100vw;
        }

        .update {
          display: flex;
          height: 100%;
          overflow: hidden;
          width: 0;
          justify-content: space-around;
          align-items: center;
          padding: 0;
          color: transparent;
          border: ${colors.primary_darken};
          transition: 0.3s all ease-in-out;
          margin: auto;
        }
        .control {
          background: ${colors.primary_darken};
          width: 1.9rem;
          height: 100%;
          border-radius: 5px;
        }
        .control div {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 100%;
        }

        .control:hover ~ .update-container .update ul {
          display: block;
        }

        .btn-tab {
          display: flex;
          position: relative;
          justify-content: space-around;
          align-items: center;
          color: #e8e8e8;
          height: 3rem;
          width: 3rem;
          padding: 0.5rem;
          border-radius: 50%;
          border: 1px solid transparent;
          margin-left: -1.34rem;
          background: ${colors.primary_darken};
          font-size: 1.7rem;
          cursor: pointer;
          transition: 0.3s all ease-in-out;
          decoration: none;
        }
        ul {
          display: none;
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          transition: 0.5s all ease-in-out;
          border-radius: 0.3rem;
        }
        li {
          max-height: 2rem;
        }

        li button {
          display: block;
          color: white;
          font-weight: bold;
          padding: 8px 16px;
          text-decoration: none;
          cursor: pointer;
          transition: 0.3s all ease-in-out;
          background: transparent;
          border: none;
        }

        input[type='checkbox']:checked ~ .update-container .update {
          width: 235px;
        }
        input[type='checkbox']:checked ~ .update-container .update ul {
          display: block;
        }
        input[type='checkbox']:checked ~ .update-container .control a {
          transform: rotate(180deg);
          border-right: 1px solid #ddd;
        }
      `}</style>
    </>
  );
}
