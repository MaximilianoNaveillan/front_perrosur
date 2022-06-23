import { useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import { FaCaretRight } from 'react-icons/fa';
import Vimeo from '@u-wave/react-vimeo';
import YouTube from 'react-youtube';
import { colors, breakpoint, fonts } from '../../../styles/theme';

const _URL = process.env.BASE_URL;
const S_URL = process.env.SERVER_URL;

const hw = '56px';

function IconVideo() {
  return (
    <Image
      src="/images/ICONOGRUPAL.png"
      alt="icon-entrelazar-video"
      height={hw}
      width={hw}
    />
  );
}

function IconActividad() {
  return (
    <Image
      src="/images/ICONOACTIVIDADES.png"
      alt="icon-entrelazar-actividad"
      height={hw}
      width={hw}
    />
  );
}
function IconTest() {
  return (
    <Image
      src="/images/ICONOTEST.png"
      alt="icon-entrelazar-test"
      height={hw}
      width={hw}
    />
  );
}
function IconReunion() {
  return (
    <Image
      src="/images/ICONOREUNION.png"
      alt="icon-entrelazar-video"
      height={hw}
      width={hw}
    />
  );
}
function IconDocumento() {
  return (
    <Image
      src="/images/ICONODOCUMENTO.png"
      alt="icon-entrelazar-documento"
      height={hw}
      width={hw}
    />
  );
}
function IconLink() {
  return (
    <Image
      src="/images/sincronico.png"
      alt="icon-entrelazar-documento"
      height={hw}
      width={hw}
    />
  );
}

function Icon({ type }) {
  return (
    <>
      <span className="rec">{type === 'video' && <IconVideo />}</span>
      <span className="rec">{type === 'actividad' && <IconActividad />}</span>
      <span className="rec">{type === 'test' && <IconTest />}</span>
      <span className="rec">{type === 'reunión' && <IconReunion />}</span>
      <span className="rec">{type === 'documento' && <IconDocumento />}</span>
      <span className="rec">{type === 'link' && <IconLink />}</span>
    </>
  );
}
function RenderYoutube({ url }) {
  const [innerwidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
    });
  }, []);

  const width =
    innerwidth < parseInt(breakpoint.xs, 10) ? 224 : window.innerWidth;

  const opts = {
    height: width * 0.45,
    width,
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <div className="layout-vimeo">
        <div className="placeholder">
          <YouTube videoId={url} opts={opts} />
        </div>
      </div>
      <style jsx>{`
        .layout-vimeo {
          margin: auto;
        }
        .placeholder {
          margin: 0 auto;
          background-color: #eee;
        }

        @keyframes placeHolderShimmer {
          0% {
            background-position: -468px 0;
          }
          100% {
            background-position: 468px 0;
          }
        }

        .animated-background {
          animation-duration: 1.25s;
          animation-fill-mode: forwards;
          animation-iteration-count: infinite;
          animation-name: placeHolderShimmer;
          animation-timing-function: linear;
          background: darkgray;
          background: linear-gradient(
            to right,
            #eeeeee 10%,
            #dddddd 18%,
            #eeeeee 33%
          );
          background-size: 800px 104px;
          height: 100px;
          position: relative;
        }
      `}</style>
    </>
  );
}

function RenderVimeo({ url }) {
  const [innerwidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
    });
  }, []);

  const width =
    innerwidth < parseInt(breakpoint.xs, 10) ? 224 : window.innerWidth - 40;
  return (
    <>
      <div className="layout-vimeo">
        <div className="placeholder">
          <Vimeo video={url} width={width} height={width * 0.45} autoplay />
        </div>
      </div>
      <style jsx>{`
        .layout-vimeo {
          margin: auto;
        }
        .placeholder {
          margin: 0 auto;
          background-color: #eee;
        }

        @keyframes placeHolderShimmer {
          0% {
            background-position: -468px 0;
          }
          100% {
            background-position: 468px 0;
          }
        }
        .animated-background {
          animation-duration: 1.25s;
          animation-fill-mode: forwards;
          animation-iteration-count: infinite;
          animation-name: placeHolderShimmer;
          animation-timing-function: linear;
          background: darkgray;
          background: linear-gradient(
            to right,
            #eeeeee 10%,
            #dddddd 18%,
            #eeeeee 33%
          );
          background-size: 800px 104px;
          height: 100px;
          position: relative;
        }
      `}</style>
    </>
  );
}

function RenderGoogleForm({ url }) {
  const [src, setSrc] = useState(window.innerWidth);
  const [innerwidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (url.includes('?usp')) {
      setSrc(url.split('?usp')[0]);
    }
  }, [url]);
  return (
    <iframe
      title="titulo"
      src={`${src}?embedded=true`}
      width={`${innerwidth}`}
      height="100%"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
    >
      Cargando…
    </iframe>
  );
}
function RenderGooglePresentation({ url }) {
  const [src, setSrc] = useState(null);
  useEffect(() => {
    if (url.includes('/pub?')) {
      setSrc(url.split('/pub?')[0]);
    }
    if (url.includes('/edit?usp=sharing')) {
      setSrc(url.split('/edit?usp=sharing')[0]);
    }
  }, [url]);
  return (
    <iframe
      title="titulo"
      src={`${src}/embed?start=true&loop=true&delayms=3000`}
      width="100%"
      height="100%"
      frameBorder="0"
      allowFullScreen
      mozallowfullscreen
      webkitallowfullscreen
    >
      Cargando…
    </iframe>
  );
}

function RenderGoogleFile({ url }) {
  const [src, setSrc] = useState(window.innerWidth);
  useEffect(() => {
    if (url.includes('/view?')) {
      setSrc(`${url.split('/view?')[0]}/preview?${url.split('/view?')[1]}`);
    }
  }, [url]);
  return (
    <iframe
      title="titulo"
      src={`${src}`}
      width="100%"
      height="100%"
      allow="autoplay"
    >
      Cargando…
    </iframe>
  );
}

function MiEntrelazar() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [taller, setTaller] = useState([]);
  const [tallerista, setTallerista] = useState('');
  const [modal, setModal] = useState(null);

  const router = useRouter();
  const { query } = router;
  const { id } = query;

  const handleTaller = () => {
    axios
      .patch(
        `${_URL}/api/talleritem`,
        { _id: id },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        setTaller(res.data.talleres[0]);
        axios
          .patch(
            `${_URL}/api/usuario`,
            { _id: res.data.talleres[0].tallerista },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          .then((response) => {
            setTallerista(response.data.usuario.nombre);
          })
          .catch((error) => {
            throw error;
          });
      })
      .catch((error) => {
        throw error;
      });
  };

  const handleRecurso = (recurso) => {
    if (recurso.type === 'link' || recurso.type === 'actividad') {
      document.location.href = `${recurso.url}`;
    }
    if (
      recurso.type === 'video' ||
      recurso.type === 'test' ||
      recurso.type === 'documento'
    ) {
      setModal(recurso);
    }
  };

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);
  useEffect(async () => {
    handleTaller();
  }, []);
  return (
    <>
      {modal && (
        <div className="add">
          <div className="modal-card">
            <div className="modal-card-text">
              <div className="content-layout">
                {modal.type === 'video' && (
                  <>
                    {/* @ts-ignore */}
                    {modal.url.includes('https://vimeo.com/') ? (
                      <RenderVimeo url={modal.url} />
                    ) : (
                      <RenderYoutube url={modal.url} />
                    )}
                  </>
                )}
                {modal.type === 'test' &&
                  modal.url.includes('https://docs.google.com/forms') && (
                    <div className="white-layout">
                      <RenderGoogleForm url={modal.url} />
                    </div>
                  )}
                {modal.type === 'documento' &&
                  modal.url.includes(
                    'https://docs.google.com/presentation'
                  ) && <RenderGooglePresentation url={modal.url} />}
                {modal.type === 'documento' &&
                  modal.url.includes('https://drive.google.com/file') && (
                    <RenderGoogleFile url={modal.url} />
                  )}
              </div>
            </div>
            <div className="modal-card-action">
              <button
                type="button"
                onClick={() => setModal(null)}
                className="btn-dialog-modal"
              >
                CERRAR
              </button>
              <div className="space" />
            </div>
          </div>
        </div>
      )}
      <div className="container-nav-bar">
        <div className={!scrolling ? 'nav-bar' : 'nav-bar nav-bar-hidden'}>
          <div className="nav-bar-content">
            <div className="row">
              <div className="col-8 sm-12">
                <h1 className="title">{taller.titulo}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container ${modal ? 'container-hidde-hoverflow' : ''}`}>
        {taller && (
          <div className="content">
            <div className="content-head">
              <div className="row">
                <div className="col-12">
                  <div className="title">{taller.titulo}</div>
                </div>
                <div className="col-6 sm-10 xs-12 ">
                  <div className="subtitle">
                    <small>con </small>
                    {tallerista}
                  </div>
                  <div className="content-image image-left">
                    <div>
                      {taller._id && (
                        <Image
                          src={`${S_URL}/uploadimg/image/taller-item-${taller._id}-${taller.imagen}.png`}
                          height="300"
                          width="400"
                          alt={`taller-item-${taller._id}-${taller.imagen}`}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-6 sm-2 xs-12">
                  <div className="content-image image-right">
                    <pre>{taller.detalle}</pre>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-modulo">
              <div className="row">
                {taller.modulos &&
                  taller.modulos.map((item) => (
                    <div
                      className="row"
                      key={`item-rodulo-${item._id}`}
                      role="presentation"
                    >
                      <div className="col-12">
                        <div className="detalle">
                          <div className="title">{item.nombre}</div>
                          <div className="subtitle">{item.detalle}</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="container-recurso">
                          {item.recursos.map((recurso) => (
                            <div key={`recurso-${recurso._id}`} className="">
                              <div className="row">
                                <div className="col-2">
                                  <Icon type={recurso.type} />
                                </div>
                                <div className="col-7 xs-10">
                                  <div className="content-title">
                                    <div className="title">
                                      {recurso.nombre}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-3 xs-12">
                                  <button
                                    onClick={() => handleRecurso(recurso)}
                                    type="button"
                                    className="btn-link"
                                  >
                                    {recurso.type !== 'link'
                                      ? 'Iniciar'
                                      : ' Ir'}{' '}
                                    <i>
                                      <FaCaretRight />
                                    </i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .content-layout {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 100%;
          width: 100%;
        }
        .white-layout {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 100%;
          width: 100%;
          background: white;
        }
        .layout {
          margin: auto;
        }
        .modal-card {
          height: 100vh;
          width: 100%;
          background: white;
        }
        .modal-card-text {
          background: rgb(0, 0, 0, 0.8);
          height: 100vh;
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
        }
        .modal-card-action {
          position: absolute;
          background: transparent;
          display: flex;
          height: 65px;
          width: 100%;
          justify-content: end;
          align-items: center;
          bottom: 0;
        }
        .btn-dialog-modal {
          border: none;
          background-color: ${colors.primary_darken};
          padding: 14px 28px;
          margin: 0;
          font-size: 16px;
          line-height: 20px;
          font-weight: bold;
          cursor: pointer;
          display: inline-block;
          border-radius: 5px;
          transition: 0.3s;
          text-transform: uppercase;
          color: white;
        }
        .load {
          position: fixed;
          top: 0;
          right: 0;
          background-color: transparent;
          height: 100%;
          width: 100%;
          z-index: 3;
        }
        .load .card-text {
          height: 100%;
        }
        .load .spiner {
          display: flex;
          height: 100%;
          overflow: hidden;
          width: 100%;
          justify-content: space-around;
          align-items: center;
        }
        .add {
          position: fixed;
          top: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.45);
          height: 100%;
          width: 100%;
          z-index: 3;
        }

        .nav-bar {
          background: ${colors.magenta};
          padding: 1.7rem 1rem;
          align: center;
          position: fixed;
          top: 70px;
          height: 160px;
          width: 100%;
          z-index: 1;
          transition: top 0.8s;
        }
        .nav-bar-hidden {
          top: -200px;
        }
        .container {
          max-width: 100%;
          overflow-x: hidden;
          min-height: calc(100vh - 70px);
          background: ${colors.secondary_lighten};
        }
        .container-hidde-hoverflow {
          overflow: hidden;
          max-height: calc(100vh - 230px);
        }
        .content {
          padding: 1rem;
          margin-top: 160px;
          text-align: center;
        }
        .nav-bar-content {
          max-width: ${breakpoint.media};
          padding: 0 1rem;
          align: center;
          margin: auto;
        }
        .nav-bar-content .title {
          text-transform: uppercase;
          font-size: 40px;
          font-weight: 1000;
        }
        .align-right {
          text-align: center;
        }
        .btn-nav-bar {
          border: none;
          background-color: rgba(140, 140, 140, 0.5);
          padding: 14px 28px;
          margin: 2rem 0;
          font-size: 16px;
          line-height: 20px;
          font-weight: bold;
          cursor: pointer;
          display: inline-block;
          border-radius: 5px;
          transition: 0.3s;
          text-transform: uppercase;
          color: white;
        }

        .btn-nav-bar i {
          float: left;
          display: inline-flex;
          padding-right: 10px;
          font-size: 20px;
        }

        /* On mouse-over */
        .btn-nav-bar:hover {
          background: rgba(104, 104, 104, 0.5);
        }
        .card {
          margin: 2rem 0;
        }
        @media screen and (max-width: ${breakpoint.xs}) {
          .btn-nav-bar {
            font-size: 13px;
            padding: 7px 14px;
          }
          .nav-bar-content .title {
            font-size: 24px;
          }
        }
        @media screen and (max-width: ${breakpoint.xxs}) {
          .btn-nav-bar {
            margin-top: 10px;
            font-size: 11px;
          }
        }
        .add-card {
          display: flex;
          height: 100%;
          max-height: 100vh;
          overflow: hidden;
          width: 100%;
        }

        .add-card-text {
          overflow-y: auto;
          overflow-x: hidden;
          height: auto;
          min-width: 100%;
          width: 100%;
          max-width: 100%;
          height: 100%;
          padding: 0;
          background: ${colors.secondary_lighten};
          overflow: hidden;
        }
        .conten-card {
          height: calc(100% - 70px);
          min-height: calc(100% - 70px);
          max-height: calc(100% - 70px);
          overflow-y: auto;
        }
        .contnet-card-text {
          width: 100%;
          min-width: 100%;
          max-width: 100%;
          padding: 1.7rem;
        }
        .content-image {
          display: flex;
          width: 100%;
        }
        .image-right {
          display: flex;
          justify-content: start;
          text-align: left;
          align-items: center;
          height: 100%;
          max-width: 100%;
          width: 100%;
          padding: 0 1.7rem;
          overflow: hidden;
        }
        pre {
          margin: auto;
          display: block;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
          unicode-bidi: embed;
          font-size: 1.2rem;
          font-family: ${fonts.base};
          white-space: pre-line;
        }
        .image-left {
          justify-content: start;
        }
        @media screen and (max-width: ${breakpoint.md}) {
          .image-left {
            justify-content: center;
          }
        }

        .card-action {
          height: 70px;
          min-height: 70px;
          max-height: 70px;
          padding: 01.7rem;
          display: inline-flex;
          text-align: end;
          width: 100%;
          align-items: center;
          justify-content: end;
          background: white;
        }
        .content-head {
          margin: 2.7rem 0 0;
          text-align: left;
        }
        .content-head .title {
          font-size: 32px;
          text-transform: uppercase;
          font-weight: 1000;
          line-height: 42px;
        }
        .content-head .subtitle {
          font-size: 26px;
          line-height: 46px;
          text-transform: capitalize;
        }
        .content-modulo {
          padding: 2rem 0;
          width: 100%;
        }

        .detalle {
          margin-top: 2rem;
          justify-content: start;
          text-align: left;
        }

        .detalle .title {
          font-size: 26px;
          text-transform: capitalize;
        }

        .container-recurso {
          margin-top: 1.7rem;
        }
        .container-recurso .row {
          width: 100%;

          margin: 1rem 0;
        }
        .container-recurso .content-title {
          overflow: hidden;
          display: inline-flex;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
          height: 100%;
        }
        .container-recurso .title {
          margin: auto 0.7rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 20px;
          text-transform: uppercase;
          font-weight: 300;
        }
        .container-recurso .action {
          display: flex;
          justify-content: end;
          align-items: center;
        }

        .container-recurso .action i {
          margin: auto 20px auto 0;
          font-size: 19.8px;
          padding: 11.2px;
          height: 43px;
          width: 43px;
          border-radius: 50%;
          color: rgb(0, 0, 0, 0.4);
          background: white;
          cursor: pointer;
          transition: 0.6s;
        }
        .container-recurso .action i:hover {
          color: black;
          background: rgb(0, 0, 0, 0.2);
        }
        @media screen and (max-width: ${breakpoint.xs}) {
          .container-recurso .action i {
            margin-right: 15px;
            font-size: 14.8px;
            padding: 8.2px;
            height: 32px;
            width: 32px;
          }
        }
        .btn-link {
          border: none;
          background-color: ${colors.magenta};
          padding: 14px 10px 4px 20px;
          margin: 0;
          font-size: 20px;
          line-height: 35px;
          width: 140px;
          font-weight: bold;
          cursor: pointer;
          display: inline-block;
          border-radius: 5px;
          transition: 0.3s;
          text-transform: uppercase;
          color: black;
        }
        .btn-link:hover {
          background-color: ${colors.pink};
        }
        .btn-link i {
          font-size: 35px;
          float: right;
        }
      `}</style>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  //  if (!session)
  //    return {
  //      redirect: {
  //        destination: '/#login-modal',
  //        permanent: false,
  //      },
  //    };
  return { props: { id: 123, session } };
};

export default MiEntrelazar;
