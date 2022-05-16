import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import TextareaAutosize from 'react-autosize-textarea';
import { FaRegImages } from 'react-icons/fa';
import axios from 'axios';
import { colors, breakpoint, fonts } from '../../styles/theme';
import CropImg from './cropimg';
import Spiner from '../Spiner';
import { dataURLtoFile } from '../utils/dataURLtoFile';

const DATAFORM = {
  nombre: '',
  image: '',
  text: '',
};

const _URL = process.env.BASE_URL;
const S_URL = process.env.SERVER_URL;

export default function EquipoForm({ path, _class }) {
  const [form, setForm] = useState(DATAFORM);
  const [imageData, setImageData] = useState(null);
  const [namevalid, setNamevalid] = useState(true);
  const [load, setLoad] = useState({
    state: false,
    status: undefined,
    msg: 'Cargando.',
  });

  const router = useRouter();
  const { asPath } = router;
  const key = asPath.split('id:')[1];

  const handleCropImg = (e) => {
    setImageData(e);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === 'nombre') {
      const valid = !!value;
      setNamevalid(valid);
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleImageData = async (_imageData) => {
    if (_imageData) {
      const body = new FormData();
      const imgFile = dataURLtoFile(_imageData, `taller-blog-${key}.png`);
      body.append('file', imgFile);
      axios
        .post(`${S_URL}/uploadimg`, body, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          setLoad({
            state: true,
            status: res.status,
            msg: 'Cargando imagen de blog.',
          });

          router.reload(window.location.pathname);
        });
    } else {
      router.reload(window.location.pathname);
    }
  };

  const putData = async (_form, _imageData) => {
    setLoad({
      state: true,
      status: 200,
      msg: 'Cargando.',
    });
    axios
      .put(`${_URL}/api/taller`, _form, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setLoad({
          state: true,
          status: res.status,
          msg: 'Cargando imagen de índice.',
        });
        handleImageData(_imageData);
      })
      .catch((error) => {
        setLoad({
          state: true,
          status: 400,
          msg: `${error}`,
        });
      });
  };

  const postData = async (_form, _imageData) => {
    setLoad({
      state: true,
      status: 200,
      msg: 'Cargando imagen de índice.',
    });
    axios
      .post(`${_URL}/api/taller`, _form, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setLoad({
          state: true,
          status: res.status,
          msg: 'Cargando formulario.',
        });
        const data = res.data.taller;
        const body = new FormData();
        const imgFile = dataURLtoFile(
          _imageData,
          `taller-blog-${data._id}.png`
        );
        body.append('file', imgFile);
        axios
          .post(`${S_URL}/uploadimg`, body, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((resp) => {
            setLoad({
              state: true,
              status: resp.status,
              msg: 'Cargando imagen de índice.',
            });
            router.reload(window.location.pathname);
          });
      })
      .catch((error) => {
        setLoad({
          state: true,
          status: 400,
          msg: `${error}`,
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre) {
      setNamevalid(false);
      return;
    }
    if (!form.text) return;
    if (key) {
      putData(form, imageData);
    } else {
      if (!imageData) return;
      postData(form, imageData);
    }
  };

  const getForm = () => {
    axios
      .patch(
        `${_URL}/api/taller`,
        { id: key },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        setForm(res.data.taller);
      });
  };
  const nameValid = namevalid
    ? 'omrs-input-filled'
    : `omrs-input-filled omrs-input-danger`;

  useEffect(() => {
    if (key) {
      getForm();
    }
  }, []);

  return (
    <>
      <div id="equipo-form" className={_class}>
        <div>
          <div className="card-title">
            <div className="row">
              <div className="col-8">
                <h1 className=" title">
                  {key ? `EDITANDO EL TALLER` : 'AGREGANDO TALLER'}
                </h1>
              </div>
              <div className="col-4">
                <Link href={path} passHref>
                  <a id="modal-close">CERRAR</a>
                </Link>
              </div>
            </div>
          </div>
          {load.state ? (
            <div className="card-text">
              <div className="spiner">
                <Spiner />
                <h4>{load.msg}</h4>
              </div>
            </div>
          ) : (
            <div className="card-text">
              <div className="row">
                <div className="col-6 md-12">
                  <div className="row">
                    <div className="col-12 mb">
                      <h4>Imagen de índice</h4>
                      <CropImg
                        handleCropImg={handleCropImg}
                        aspect={Number(1)}
                        _key="1"
                        key="img-upload-1"
                        contentheight="50vh"
                        url={
                          key
                            ? `${S_URL}/uploadimg/image/taller-blog-${key}.png`
                            : undefined
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="col-6 md-12">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12">
                        <div className="omrs-input-group">
                          <label htmlFor="nombre" className={nameValid}>
                            <input
                              type="text"
                              value={form.nombre}
                              id="nombre"
                              name="nombre"
                              autoComplete="off"
                              onChange={handleChange}
                              required
                            />
                            <span className="omrs-input-label">NOMBRE</span>
                            <span className="omrs-input-helper">
                              {namevalid ? <>&nbsp;</> : 'nombre requerido'}
                            </span>
                            <FaRegImages />
                          </label>
                        </div>
                        <div className="content-textarea">
                          <TextareaAutosize
                            value={form.text}
                            onChange={handleChange}
                            placeholder="PÁRRAFO"
                            style={{
                              width: '100%',
                              minWidth: '100%',
                              fontSize: '18px',
                              boxSizing: 'border-box',
                              border: '1px solid transparent',
                              padding: '0.7rem 2.7rem 0.7rem 2.03rem',
                              fontFamily: fonts.base,
                              fontWeight: 400,
                              color: '#818181',
                            }}
                            rows={17}
                            data-min-rows={17}
                            name="text"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                style={{ display: 'none' }}
              >
                GUARDAR
              </button>
            </div>
          )}
          <div className="card-action">
            <button type="submit" onClick={handleSubmit}>
              GUARDAR
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .spiner {
          display: flex;
          height: 100%;
          overflow: hidden;
          width: 100%;
          justify-content: space-around;
          align-items: center;
        }
        .spiner h4 {
          position: absolute;
          padding-top: 80px;
          width: 100%;
          text-align: center;
        }
        h1 {
          margin: 0 0 0 2rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 2rem;
        }
        h4 {
          margin-bottom: 0.3rem;
        }
        .mb {
          margin-bottom: 2rem;
        }
        .content-crop {
          position: relative;
          height: 50vh;
          background-color: rgba(0, 0, 0, 0.49);
        }

        .modal-window {
          position: fixed;
          background-color: rgba(255, 255, 255, 0.45);
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1000;
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s;
          max-height: 100vh;
          overflow: hidden;
        }
        .modal-on {
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
        }
        .modal-window > div {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #e8e8e8;
          animation-name: shake;
          animation-duration: 0.5s;
          animation-timing-function: ease-in-out;
        }
        @keyframes shake {
          0% {
            top: 200%;
          }
          100% {
            top: 50%;
          }
        }
        .card-title {
          display: flex;
          position: relative;
          justify-content: space-around;
          align-items: center;
          height: 5rem;
          max-height: 5rem;
        }
        .card-text {
          height: calc(100vh - 10rem);
          overflow-y: scroll;
          border-top: 1px solid #b6b6b6;
          border-bottom: 1px solid #b6b6b6;
        }
        form {
          padding: 0.5rem;
          max-width: ${breakpoint.md};
          margin: auto;
        }
        .card-action {
          display: flex;
          position: relative;
          height: 5rem;
          justify-content: flex-end;
        }
        .card-action button {
          background-color: #e8e8e8;
          color: #2f2f30;
          line-height: 2rem;
          margin-top: auto;
          margin-bottom: auto;
          margin-right: 1rem;
          padding: 0.3rem 1rem;
          font-size: 1rem;
          font-weight: 400;
          border-radius: 3px;
          right: 0;
          text-align: center;
          top: 0;
          text-decoration: none;
          transition: 0.5s all ease;
          cursor: pointer;
          border: 1px solid #2f2f30;
        }
        .card-action button:hover {
          background-color: ${colors.primary_darken};
          color: white;
        }

        #modal-close {
          background-color: #e8e8e8;
          color: #2f2f30;
          line-height: 2rem;
          margin: 1rem 1rem 0 0;
          padding: 0.3rem 1rem;
          font-size: 1rem;
          font-weight: 400;
          border-radius: 3px;
          position: absolute;
          right: 0;
          text-align: center;
          top: 0;
          text-decoration: none;
          transition: 0.5s all ease;
        }
        #modal-close:hover {
          background-color: ${colors.primary_darken};
          color: white;
        }

        .modal-window header {
          font-weight: bold;
        }
        .actions {
          width: 100%;
          text-align: center;
          margin: auto;
        }
        .link {
          display: block;
          text-decoration: none;
          background: ${colors.secondary_lighten};
          color: black;
          margin: auto;
          text-align: center;
          margin-top: 1.5rem;
          margin-bottom: 0.7rem;
          padding: 0.7rem;
          font-size: 1.1rem;
          transition: 0.5s all ease;
          cursor: pointer;
        }
        .link:hover {
          background: ${colors.secondary};
        }
        .col-6 {
          padding: 1rem;
        }
        .content-textarea {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .action-textarea {
          display: flex;
          position: relative;
          justify-content: flex-end;
          background-color: white;
          border-bottom-right-radius: 6px;
          border-bottom-left-radius: 6px;
        }
        .action-textarea button {
          display: inline-block;
          background-color: transparent;
          color: #818181;
          font-size: 1.07rem;
          line-height: 1.94rem;
          padding: 0.3rem 1.34rem;
          border: none;
          text-align: center;
          margin: 0.5rem;
          border-radius: 3px;
          cursor: pointer;
          transition: 0.5s all ease;
        }
        .action-textarea button:hover {
          color: white;
          background-color: ${colors.primary_darken};
        }

        ul {
          margin-left: 1.6rem;
          margin-top: 20px;
        }
        ul li {
          width: 100%;
          font-family: ${fonts.base};
          font-size: 18px !important;
          font-weight: 400;
        }

        .list {
          background: transparent;
          display: flex;
          flex-wrap: wrap;
          padding: 0.5rem;
          border-radius: 0.3rem;
          word-wrap: break-word;
          -webkit-transition: background-color 0.3s linear;
          -ms-transition: background-color 0.3s linear;
          transition: background-color 0.3s linear;
        }
        .list-text {
          white-space: pre-line;
          width: calc(100% - 2.3rem);
          padding-bottom: 3rem;
        }
        .list-action {
          opacity: 0;
          width: 2rem;
        }

        .action {
          background: transparent;
          align-items: center;
          text-align: center;
          justify: center;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          padding-top: 0.45rem;
          margin-left: 0.25rem;
          margin-top: 0.25rem;
          cursor: pointer;
          transition: 0.3s all ease-in-out;
        }
        .list:hover {
          background: #d1d1d1;
        }
        .list:hover > .list-action {
          opacity: 1;
        }
        .action:hover {
          background: #e8e8e8;
        }

        .list-action i {
          color: #818181;
          font-size: 1.12rem;
          margin: auto;
        }
        .list-action-textarea {
          width: 2rem;
          margin-left: -2.5rem;
        }
        .content-section {
          position: relative;
          width: 100%;
          font-family: ${fonts.base};
          font-size: 18px;
          font-weight: 400;
          padding-top: 2rem;
        }
        .card-section {
          position: relative;
          border-radius: 3px;
          cursor: pointer;
          transition: 0.3s all ease-in-out;
        }
        .card-section p {
          padding: 1rem 2rem 0 2rem;
        }
        .card-section:hover {
          background: #d1d1d1;
        }
        .section-action {
          position: absolute;
          top: 10px;
          right: 0px;
          width: 2.5rem;
          opacity: 0;
        }
        .section-action i {
          color: #818181;
          font-size: 1.12rem;
          margin: auto;
        }
        .card-section:hover > .section-action {
          opacity: 1;
        }
        .content-section p {
          padding-bottom: 3rem;
          font-size: 18px;
          white-space: pre-line;
        }
      `}</style>
    </>
  );
}
