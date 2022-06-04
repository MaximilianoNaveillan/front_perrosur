import { useState } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { colors, breakpoint, fonts } from '../../../styles/theme';
import CropImg from '../cropimg';
import Select from './selectcolor';
import MenuToggle from '../../utils/menutogglelevel';

const form = {
  titulo: '',
  detalle: '',
  resumen: '',
  color: '#ffffff',
  bg: 0,
  imagen: '',
  tallerista: '',
  categoria: '',
  duracion: '',
  dificultad: 1,
};

function TallerItemAdd() {
  const [imageData, setImageData] = useState(null);
  const [color, setColor] = useState('#ffffff');
  const [bg, setBg] = useState(0);

  const background = `rgb(${bg},${bg},${bg},0.2)`;
  const handleCropImg = (e) => {
    setImageData(e);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleChangeColorSelect = (e) => {
    setColor(e);
  };

  const handleLevel = (l) => {
    console.log(l);
  };

  return (
    <>
      <div className="add-card">
        <div
          className="add-card-text"
          onClick={(e) => e.stopPropagation()}
          role="presentation"
          style={{ backgroundColor: color }}
        >
          <div className="row">
            <div className="col-4 md-12 text-center">
              <div className="content-crop">
                <div>
                  <CropImg
                    handleCropImg={handleCropImg}
                    aspect={Number(1)}
                    _key="1"
                    key="img-upload-1"
                    contentheight="400px"
                    url={undefined}
                  />
                </div>
              </div>
            </div>
            <div className="col-8 md-12 title">
              <div
                className="content-text"
                style={{ backgroundColor: background }}
              >
                <div className="omrs-input-group">
                  <label htmlFor="titulo" className="omrs-input-filled">
                    <input
                      type="text"
                      id="titulo"
                      name="titulo"
                      autoComplete="off"
                      placeholder="TÍTULO"
                      required
                    />
                  </label>
                </div>
                <div className="omrs-input-group">
                  <TextareaAutosize
                    id="detalle"
                    name="detalle"
                    autoComplete="off"
                    placeholder="detalle"
                    style={{
                      width: '100%',
                      minWidth: '100%',
                      maxWidth: '100%',
                      maxHeight: '226px',
                      minHeight: '226px',
                      fontSize: '18px',
                      boxSizing: 'border-box',
                      border: 'none',
                      borderRadius: '3px',
                      padding: '0 1.7rem 0.7rem 1.7rem',
                      fontFamily: fonts.base,
                      fontWeight: 400,
                      backgroundColor: 'transparent',
                      boxShadow: null,
                      outline: 0,
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6 sm-12">
                  <div className="level">
                    <MenuToggle handleLevel={handleLevel} />
                  </div>
                </div>
                <div className="col-6 sm-12">
                  <div className="select-color ">
                    <div className="row">
                      <div className="col-9 sm-8">
                        <div className="content-select">
                          <Select
                            colors={colors}
                            handleChangeColorSelect={handleChangeColorSelect}
                          />
                        </div>
                      </div>
                      <div className="col-3 sm-4">
                        <input
                          type="color"
                          id="color"
                          name="color"
                          value={color}
                          onChange={(e) => handleColor(e)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="content-bg-select row">
                    <div
                      className="col-6"
                      onClick={() => setBg(0)}
                      role="presentation"
                    >
                      <div className="bg-0">contraste alto</div>
                    </div>
                    <div
                      className="col-6"
                      onClick={() => setBg(180)}
                      role="presentation"
                    >
                      <div className="bg-255">contraste bajo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card-action">
                <div>
                  <button type="button">agregar taller</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .add-card {
          display: flex;
          height: 100%;
          max-height: 100vh;
          overflow: hidden;
          width: 100%;
          justify-content: space-around;
          align-items: center;
        }
        .add-card-text {
          height: auto;
          max-height: 100vh;
          overflow-y: auto;
          overflow-x: hidden;
          width: ${breakpoint.media};
          max-width: ${breakpoint.md};
          border: 1px solid #818181;
          border-radius: 3px;
        }
        .add-card-text .title {
          padding: 30px 30px 15px 15px;
        }
        .content-crop {
          height: 500px;
          padding: 30px 15px 15px 30px;
          width: auto;
          margin: auto;
        }
        .content-crop div:first-child {
          background: rgb(250, 250, 250, 0.57);
        }

        .omrs-input-group {
          margin-bottom: 15px;
          padding-top: 15px;
        }
        .omrs-input-group label input {
          border: none;
          height: 60px;
          padding: 0 1rem;
          font-size: 23px;
          font-weight: bold;
          text-transform: uppercase;
          background: transparent;
          border: 2px solid transparent;
        }

        .select-color {
          display: flex;
          background: ${background};
          margin: 0 8px 1.27rem 0 1.27rem;
          height: 60px;
          border-radius: 3px;
          padding: 7px;
          text-align: center;
        }
        input[type='color'] {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          margin: 0 0 0 8px;
          width: calc(100% - 8px);
          height: 100%;
          border: 0;
          padding: 0;
          /*input[type=color] double the scale and clip the offset*/
          -webkit-transform: scale(2);
          transform: scale(2);
          -webkit-clip-path: inset(25%);
          clip-path: inset(25%);
        }

        input[type='color']:before {
          content: attr(value);
          text-shadow: 0.1em 0.1em #fff;
          font-size: 0.65em;
          width: 50%;
          height: 50%;
          left: 25%;
          top: 25%;
          padding-top: 7px;
          text-align: center;
          position: absolute;
        }
        .content-select {
          padding: 5px 0;
        }

        .content-bg-select {
          margin-top: 14px;
          height: 30px;
          font-size: 13px;
        }
        .content-bg-select div {
          border-radius: 3px;
        }
        .bg-0 {
          width: auto;
          height: 100%;
          background: rgb(0, 0, 0, 0.2);
          margin-right: 7px;
          text-align: center;
          padding-top: 6px;
          border: 0.12rem solid#ccc;
          text-transform: uppercase;
          cursor: pointer;
        }
        .bg-255 {
          width: 95%;
          height: 100%;
          background: rgb(180, 180, 180, 0.2);
          margin-left: 7px;
          text-align: center;
          padding-top: 6px;
          border: 0.12rem solid#ccc;
          text-transform: uppercase;
          cursor: pointer;
        }
        .level {
          display: flex;
          margin: 0 8px 30px 0;
          padding: 0;
          height: 60px;
          border-radius: 3px;
          text-align: left;
          background: ${background};
        }

        .card-action {
          margin-top: 30px;

          text-align: right;
          background: rgb(255, 255, 255, 0.4);
        }

        .card-action div:first-child {
          padding: 15px 30px 15px;
          background: rgb(255, 255, 255, 0.4);
        }

        .card-action button {
          border: none;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 14px 28px;
          margin: 0;
          font-size: 16px;
          line-height: 20px;
          font-weight: bold;
          cursor: pointer;
          display: inline-block;
          border-radius: 5px;
          text-transform: uppercase;
          color: white;
        }

        @media screen and (max-width: ${breakpoint.md}) {
          .add-card-text {
            height: 100%;
            max-height: 100%;
            min-height: 100%;
            width: 100%;
            max-width: 100%;
            border: none;
          }
          .add-card-text .title {
            padding: 10px 20px 20px;
          }
          .content-crop {
            padding: 20px 20px 10px;
          }
        }

        @media screen and (max-width: ${breakpoint.sm}) {
          .small {
            font-size: 14px;
            margin: -34px auto;
          }
          .level {
            margin-right: 0;
          }
        }
        @media screen and (max-width: ${breakpoint.xxs}) {
          .level {
            max-width: 280px;
          }
          .small {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}

export default TallerItemAdd;
