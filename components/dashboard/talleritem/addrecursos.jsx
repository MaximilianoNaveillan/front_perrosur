import { useState, useEffect } from 'react';
import axios from 'axios';
import Eselect from './Eselect';
import LayoutVimeo from './vimeo';
import Layoutyoutube from './youtube';
import GoogleForm from './googleform';
import GooglePresentation from './googlepresentation';
import GoogleFile from './googlefile';
import Alert from '../../utils/alert';

const optionstype = [
  { label: 'video', value: 'video' },
  { label: 'actividad', value: 'actividad' },
  { label: 'test', value: 'test' },
  { label: 'reunión', value: 'reunión' },
  { label: 'documento', value: 'documento' },
  { label: 'link', value: 'link' },
];

const _form = {
  nombre: '',
  type: 'video',
  url: '',
  key: null,
  modulo: '',
};

const defaulterror = {
  statusCode: 500,
  timestamp: new Date().toISOString(),
  class: 'server-error',
  message: '¡ Error del servidor, no se puede obtener el recurso !',
};

const S_URL = process.env.SERVER_URL;

function AddRecurso({ setAddRecurso, addrecurso, hadleRebuild, editrecurso }) {
  const [form, setForm] = useState(_form);
  const [alert, setAlert] = useState(undefined);
  const handlePut = () => {
    const id = form._id;
    axios
      .put(`${S_URL}/recurso/${id}`, form, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        hadleRebuild();
      })
      .catch(() => {
        setAlert(defaulterror);
      });
  };

  const handlePost = () => {
    if (!form.nombre || !form.url) {
      setAlert({
        statusCode: 400,
        timestamp: new Date().toISOString(),
        class: 'bad-request',
        message: '¡ Se requiere URL y Nombre !',
      });
    }

    if (form._id) {
      handlePut();
      return;
    }

    axios
      .post(`${S_URL}/recurso`, form, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        const { recursos } = addrecurso;
        const tempArr = [...recursos];
        tempArr.push(res.data._id);
        const id = addrecurso._id;
        axios
          .put(
            `${S_URL}/modulo/${id}`,
            { recursos: tempArr },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          .then(() => {
            hadleRebuild();
          })
          .catch(() => {
            setAlert(defaulterror);
          });
      })
      .catch(() => {
        setAlert(defaulterror);
      });
  };

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

  useEffect(() => {
    setForm({
      ...form,
      [`modulo`]: addrecurso._id,
    });
  }, []);

  useEffect(() => {
    if (editrecurso) setForm(editrecurso);
  }, [editrecurso]);

  return (
    <>
      <div className="add" role="presentation">
        <div className="add-card">
          <div
            className="add-card-text"
            onClick={(e) => e.stopPropagation()}
            role="presentation"
          >
            <h2 className="title">Agrgando recurso</h2>
            <h2 className="title">a {addrecurso.titulo}</h2>
            <div className="form">
              <div className="omrs-input-group">
                <div className="content-select">
                  <Eselect
                    defaultValue={form.type}
                    arr={optionstype}
                    name="type"
                    placeholder="típo de recurso ..."
                    handleChange={handleChangeSelect}
                    bottom
                  />
                </div>
              </div>
              <div className="omrs-input-group">
                <label htmlFor="nombre" className="omrs-input-filled">
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    autoComplete="off"
                    placeholder="NOMBRE"
                    onChange={handleChange}
                    required
                    // eslint-disable-next-line jsx-a11y/no-autofocus
                    autoFocus
                  />
                </label>

                <label htmlFor="url" className="omrs-input-filled">
                  <input
                    type="text"
                    id="url"
                    name="url"
                    value={form.url}
                    autoComplete="off"
                    placeholder="URL"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              {form.type !== 'link' &&
                form.type !== 'reunión' &&
                form.type !== 'actividad' && (
                  <div className="content-view">
                    {form.type === 'video' && (
                      <>
                        {/* @ts-ignore */}
                        {form.url.includes('https://vimeo.com/') ? (
                          <LayoutVimeo
                            handleChangeSelect={handleChangeSelect}
                            url={form.url}
                          />
                        ) : (
                          <Layoutyoutube
                            handleChangeSelect={handleChangeSelect}
                            url={form.url}
                          />
                        )}
                      </>
                    )}
                    {form.type === 'test' &&
                      form.url.includes('https://docs.google.com/forms') && (
                        <div className="content-view">
                          {/* @ts-ignore */}
                          <GoogleForm url={form.url} />
                        </div>
                      )}
                    {form.type === 'documento' &&
                      form.url.includes(
                        'https://docs.google.com/presentation'
                      ) && (
                        <div className="content-view">
                          {/* @ts-ignore */}
                          <GooglePresentation url={form.url} />
                        </div>
                      )}
                    {form.type === 'documento' &&
                      form.url.includes('https://drive.google.com/file') && (
                        <div className="content-view">
                          {/* @ts-ignore */}
                          <GoogleFile url={form.url} />
                        </div>
                      )}
                  </div>
                )}
            </div>
            <div className="card-action">
              <div>
                <button
                  onClick={() => setAddRecurso(null)}
                  type="button"
                  className="btn-dialog btn-cancel"
                >
                  cancelar
                </button>
                <div className="space" />
                <button
                  onClick={() => handlePost()}
                  className="btn-dialog"
                  type="button"
                >
                  CREAR
                </button>
              </div>
            </div>
          </div>
        </div>
        <Alert alert={alert} setAlert={setAlert} />
      </div>
      <style jsx>{`
        .content-view {
          display: flex;
          background: rgb(0, 0, 0, 0.3);
          height: 400px;
          width: 100%;
          max-width: 100%;
          overflow: none;
        }
        .card-action {
          display: flex;
          width: 100%;
          justify-content: end;
          align-items: center;
          height: 70px;
          border-top: 1px solid #ccc;
        }
        .form {
          margin-top: 1.7rem;
        }
        .title {
          margin: 0 1rem;
        }
        .omrs-input-group {
          margin-bottom: 15px;
        }
        .omrs-input-group label input {
          border: none;
          height: 50px;
          padding: 25px 1rem 25px;
          font-size: 18px;
          background: transparent;
          border: 1px solid rgb(0, 0, 0, 0.6);
          margin: 1.7rem 0;
        }
        .content-select {
          font-size: 18px;
        }
      `}</style>
    </>
  );
}

export default AddRecurso;
