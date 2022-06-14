import { useState, useEffect } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { colors, breakpoint, fonts } from '../../../styles/theme';
import CropImg from '../cropimg';
import Select from './selectcolor';
import Eselect from './Eselect';
import MenuToggle from './menutogglelevel';

function TallerItemAdd({
  imageurl,
  setAdd,
  cat,
  tallerista,
  talleristas,
  setAlert,
  handlePost,
  form,
  setForm,
}) {
  const [imageData, setImageData] = useState(null);

  const handelSetAlert = (msg) => {
    setAlert({
      statusCode: 400,
      timestamp: new Date().toISOString(),
      class: 'bad-request',
      message: `¡ ${msg} !`,
    });
  };

  const handleCropImg = (e) => {
    if (!imageData && form._id) {
      const inc = Number(form.imagen) + 1;
      const imagen = `0${inc.toString()}`;
      setForm({
        ...form,
        imagen,
      });
    }
    setImageData(e);
  };

  const handleColor = (e) => {
    setForm({
      ...form,
      color: e.target.value,
    });
  };

  const handleChangeColorSelect = (e) => {
    setForm({
      ...form,
      color: e,
    });
  };

  const handleLevel = (l) => {
    setForm({
      ...form,
      dificultad: l,
    });
  };

  const handlesetBg = (bg) => {
    setForm({
      ...form,
      bg,
    });
  };

  useEffect(() => {
    if (!tallerista._id) {
      setForm({
        ...form,
        [`tallerista`]: tallerista._id,
      });
    }
  }, [tallerista]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleChangeSelect = (e) => {
    const { value, name } = e;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSave = () => {
    if (!form.titulo) {
      handelSetAlert('Debes agregar un título');
      return;
    }
    if (!form.resumen) {
      handelSetAlert('Debes agregar el resumen');
      return;
    }
    if (!form.detalle) {
      handelSetAlert('Debes agregar un detalle');
      return;
    }

    if (!imageurl && !imageData) {
      handelSetAlert('Debes agregar una imagen');
      return;
    }
    if (!form.categoria) {
      handelSetAlert('Debes agregar una categoría');
      return;
    }

    handlePost(imageData);
  };

  const colseDialog = () => {
    setAdd(false);
  };

  // console.log(form);

  const { color, bg } = form;
  const background = `rgb(${bg},${bg},${bg},0.2)`;
  const phresumen = `Resumen ( breve descripción de taller )  Ej: ${'\n\n'} Un taller para aprender y practicar el ofifio de la impreción en serigrafia.`;
  const phdetalle = `Detalle ( descripción detallada del taller )  Ej: ${'\n\n'}Pamela es miembro del Taller PerroSur y su experiencia en el arte de la pintura le permite transmitir en sus talleres el valor de la técnica y la comunicación a través de las obras.${'\n'}En este taller, podrás comprender cómo abordar ...`;

  return (
    <>
      <div key={form._id ? form._id : 'addItem'} className="add-card">
        <div
          className="add-card-text"
          onClick={(e) => e.stopPropagation()}
          role="presentation"
          style={{ backgroundColor: color }}
        >
          <div className="contnet-card-text">
            <div className="row">
              <div className="col-4 md-12 text-center">
                <div className="content-crop">
                  <div>
                    <CropImg
                      handleCropImg={handleCropImg}
                      handleDelete={handleCropImg}
                      aspect={Number(4 / 3)}
                      _key="1"
                      key="img-upload-1"
                      contentheight="400px"
                      url={
                        form._id
                          ? `${imageurl}/uploadimg/image/taller-item-${form._id}-${form.imagen}.png`
                          : undefined
                      }
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
                        value={form.titulo}
                        autoComplete="off"
                        placeholder="TÍTULO"
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>
                  <div className="omrs-input-group">
                    <TextareaAutosize
                      id="resumen"
                      name="resumen"
                      value={form.resumen}
                      autoComplete="off"
                      placeholder={`${phresumen}`}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        minWidth: '100%',
                        maxWidth: '100%',
                        maxHeight: '88px',
                        minHeight: '88px',
                        fontSize: '18px',
                        boxSizing: 'border-box',
                        border: 'none',
                        borderRadius: '3px',
                        padding: '0 1.7rem ',
                        borderBottom: '1px solid #818181',
                        marginBottom: '9px',
                        fontFamily: fonts.base,
                        fontWeight: 400,
                        backgroundColor: 'transparent',
                        boxShadow: null,
                        outline: 0,
                      }}
                    />
                    <TextareaAutosize
                      id="detalle"
                      name="detalle"
                      value={form.detalle}
                      autoComplete="off"
                      placeholder={`${phdetalle}`}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        minWidth: '100%',
                        maxWidth: '100%',
                        maxHeight: '148px',
                        minHeight: '148px',
                        fontSize: '18px',
                        boxSizing: 'border-box',
                        border: 'none',
                        borderRadius: '3px',
                        padding: '0 1.7rem',
                        marginTop: '9px',
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
                    <div className="content-select-cat">
                      <Eselect
                        defaultValue={form.categoria}
                        arr={cat}
                        name="categoria"
                        placeholder="CATEGORÍA ..."
                        handleChange={handleChangeSelect}
                      />
                    </div>
                    <div className="col-12" role="presentation">
                      <div
                        key={`select-${form.tallerista}`}
                        className="content-select-cat"
                      >
                        <Eselect
                          defaultValue={form.tallerista}
                          arr={talleristas}
                          name="tallerista"
                          placeholder="TALLERISTA ..."
                          handleChange={handleChangeSelect}
                        />
                      </div>
                    </div>
                    <div className="level">
                      <MenuToggle
                        defaultvalue={form.dificultad}
                        handleLevel={handleLevel}
                      />
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
                        onClick={() => handlesetBg(0)}
                        role="presentation"
                      >
                        <div className="bg-0">contraste alto</div>
                      </div>
                      <div
                        className="col-6"
                        onClick={() => handlesetBg(240)}
                        role="presentation"
                      >
                        <div className="bg-255">contraste bajo</div>
                      </div>
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
                  <button
                    type="button"
                    className="btn-dialog btn-cancel"
                    onClick={() => colseDialog()}
                  >
                    cancelar
                  </button>
                  <div className="space" />
                  <button
                    className="btn-dialog"
                    type="button"
                    onClick={handleSave}
                  >
                    agregar taller
                  </button>
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
          padding: 0 !important;
        }
        .add-card-text .title {
          padding: 30px 30px 15px 15px;
        }
        .content-crop {
          padding: 30px 15px 15px 30px;
          width: auto;
          margin: auto;
        }
        .content-crop div:first-child {
          background: rgb(250, 250, 250, 0.57);
        }

        .omrs-input-group {
          margin-bottom: 15px;
        }
        .omrs-input-group label input {
          border: none;
          height: 50px;
          padding: 25px 1rem 0;
          font-size: 23px;
          font-weight: bold;
          text-transform: uppercase;
          background: transparent;
          border: 2px solid transparent;
          margin-bottom: 0;
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
          margin: 14px 0;
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
          margin: 0 8px 11px 0;
          padding: 0;
          height: 60px;
          border-radius: 3px;
          text-align: left;
          background: ${background};
        }
        .content-select-cat {
          padding: 0 8px 14px 0;
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
          .add-card-text {
            margin: 0 !important;
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
          .content-select-cat {
            padding: 5px 0 14px;
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
