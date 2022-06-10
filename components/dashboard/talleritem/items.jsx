import { useState } from 'react';
import Image from 'next/image';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { breakpoint, colors } from '../../../styles/theme';

const S_URL = process.env.SERVER_URL;

function Card({
  item,
  handleEdit,
  setRemove,
  handleSetTime,
  handleChange,
  setRecurso,
}) {
  const background = `rgb(${item.bg},${item.bg},${item.bg},0.2)`;
  return (
    <>
      <div className="taller-items-card">
        <div className="row">
          <div className="col-4 sm-3 xs-5 xxs-12">
            <div className="taller-items-card-image ">
              <Image
                src={`${S_URL}/uploadimg/image/taller-item-${item._id}-${item.imagen}.png`}
                height="300"
                width="400"
                alt={`taller-item-${item._id}-${item.imagen}`}
              />
            </div>
          </div>
          <div className="col-7 taller-items-card-title">
            <div className="taller-items-card-title-container">
              <div className="title" style={{ backgroundColor: background }}>
                {item.titulo}
              </div>
            </div>
          </div>
          <div className="col-8 sm-9 xs-12">
            <div className="taller-items-card-text">
              <div className="title" style={{ backgroundColor: background }}>
                {item.titulo}
              </div>
              <div className="text" style={{ backgroundColor: background }}>
                {item.resumen}
              </div>
            </div>
            <div className="taller-items-card-level">
              <div className="row">
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon">
                    <div
                      className="icon-label"
                      style={{ backgroundColor: background }}
                    >
                      <div className="span-label">Dificultad</div>
                      <div className="space" />
                      <span>
                        <Image
                          src={`/images/ICONONIVEL${item.dificultad}.png`}
                          alt={`ICONONIVEL${item.dificultad}`}
                          height="25px"
                          width="80px"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 sm-0">
            <div className="taller-items-card-icon-left">
              <div className="row">
                <div className="col-5 sm-0" />
                <div className="col-7 sm-12">
                  <div className="taller-item-icon">
                    <div
                      className={`icon-label ${
                        item.incluyerecursos ? '' : 'disabled'
                      }`}
                      style={{ backgroundColor: background }}
                      onClick={() =>
                        handleChange(
                          {
                            incluyerecursos: !item.incluyerecursos,
                          },
                          item._id
                        )
                      }
                      role="presentation"
                    >
                      <span>
                        <Image
                          src="/images/incluyerecursos.png"
                          alt="portada-entrelazar"
                          height="30px"
                          width="30px"
                        />
                      </span>
                      <div className="span">Requiere Recursos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 sm-12">
            <div className="taller-items-card-icon-botom">
              <div className="row">
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon ">
                    <div
                      className="icon-label icon-level"
                      style={{ backgroundColor: background }}
                    >
                      <div className="span-label">Dificultad</div>
                      <div className="space" />
                      <span>
                        <Image
                          src={`/images/ICONONIVEL${item.dificultad}.png`}
                          alt={`ICONONIVEL${item.dificultad}`}
                          height="10px"
                          width="60px"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon">
                    <div
                      className={`icon-label ${
                        item.incluyerecursos ? '' : 'disabled'
                      }`}
                      style={{ backgroundColor: background }}
                      onClick={() =>
                        handleChange(
                          {
                            incluyerecursos: !item.incluyerecursos,
                          },
                          item._id
                        )
                      }
                      role="presentation"
                    >
                      <span>
                        <Image
                          src="/images/ICONODOCUMENTO.png"
                          alt="portada-entrelazar"
                          height="30px"
                          width="30px"
                        />
                      </span>
                      <div className="span">Requiere Recursos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="taller-items-card-icon-top">
              <div className="row">
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon">
                    <div
                      className={`icon-label ${
                        item.incluyereunion ? '' : 'disabled'
                      }`}
                      style={{ backgroundColor: background }}
                      onClick={() =>
                        handleChange(
                          {
                            incluyereunion: !item.incluyereunion,
                          },
                          item._id
                        )
                      }
                      role="presentation"
                    >
                      <span>
                        <Image
                          src="/images/ICONOREUNION.png"
                          alt="portada-entrelazar"
                          height="30px"
                          width="30px"
                        />
                      </span>
                      <div className="span">Incluye Reunion</div>
                    </div>
                  </div>
                </div>
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon">
                    <div
                      className="icon-label"
                      style={{ backgroundColor: background }}
                      onClick={() => {
                        handleSetTime(item._id);
                      }}
                      role="presentation"
                    >
                      <span>
                        <Image
                          src="/images/ICONORELOJ.png"
                          alt="portada-entrelazar"
                          height="30px"
                          width="30px"
                        />
                      </span>
                      <div className="span">
                        {item.duracion} <small>min</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon">
                    <div
                      className={`icon-label ${
                        item.sincronico ? '' : 'disabled'
                      }`}
                      style={{ backgroundColor: background }}
                      onClick={() =>
                        handleChange(
                          {
                            sincronico: !item.sincronico,
                          },
                          item._id
                        )
                      }
                      role="presentation"
                    >
                      <span>
                        <Image
                          src="/images/sincronico.png"
                          alt="portada-entrelazar"
                          height="30px"
                          width="30px"
                        />
                      </span>
                      <div className="span">Sincronico</div>
                    </div>
                  </div>
                </div>
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon">
                    <div
                      className={`icon-label ${
                        item.requierepantalla ? '' : 'disabled'
                      }`}
                      style={{ backgroundColor: background }}
                      onClick={() =>
                        handleChange(
                          {
                            requierepantalla: !item.requierepantalla,
                          },
                          item._id
                        )
                      }
                      role="presentation"
                    >
                      <span>
                        <Image
                          src="/images/requierepantalla.png"
                          alt="portada-entrelazar"
                          height="30px"
                          width="30px"
                        />
                      </span>
                      <div className="span">Requiere Pantalla</div>
                    </div>
                  </div>
                </div>
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon">
                    <div
                      className="icon-label"
                      style={{ backgroundColor: background }}
                    >
                      <span>
                        <Image
                          src="/images/modulos.png"
                          alt="portada-entrelazar"
                          height="30px"
                          width="30px"
                        />
                      </span>
                      <div className="span">Cursos</div>
                    </div>
                  </div>
                </div>
                <div className="col-4 xs-6 xxs-12">
                  <div className="taller-item-icon">
                    <div
                      className={`icon-label ${
                        item.asincronico ? '' : 'disabled'
                      }`}
                      style={{ backgroundColor: background }}
                      onClick={() =>
                        handleChange(
                          {
                            asincronico: !item.asincronico,
                          },
                          item._id
                        )
                      }
                      role="presentation"
                    >
                      <span>
                        <Image
                          src="/images/asincronico.png"
                          alt="portada-entrelazar"
                          height="30px"
                          width="30px"
                        />
                      </span>
                      <div className="span">Asincronico</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="taller-items-card-action">
              <div className="content-btn">
                <button
                  onClick={() => setRecurso(item)}
                  className="btn-continuar"
                  type="button"
                >
                  Modulos
                </button>
              </div>
              <div className="content-icons">
                <i onClick={() => handleEdit(item)} role="presentation">
                  <FaPen />
                </i>
                <i onClick={() => setRemove(item)} role="presentation">
                  <FaTrashAlt />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .ul {
          background: white;
          margin: auto;
        }
        .taller-items-card {
          position: relative;
          margin: 1.7rem auto;
          border: 0.4rem solid black;
          background-color: ${item.color};
          padding-left: 0.7rem;
          padding-top: 0.7rem;
          max-width: ${breakpoint.sm};
          -webkit-box-shadow: 0.7rem 0.7rem 0px -4px ${item.color};
          box-shadow: 0.85rem 0.85rem 0px -4px ${item.color};
          background-clip: content-box;
        }
        .row {
          position: relative;
        }
        .taller-items-card-title {
          display: none;
        }
        .taller-items-card-title-container {
          display: flex;
          max-width: 100%;
          margin: auto calc(1rem + 10px);
        }
        .taller-items-card-title .title {
          display: flex;
          font-size: 3.3vw;
          font-weight: 970;
          padding: 15px 1rem;
          text-transform: uppercase;
          margin: auto;
          border-radius: 5px;
          overflow: hidden;
        }
        .taller-items-card-text {
          padding: 14px 0.5rem 0;
          font-size: 18px;
          font-weight: 370;
          overflow: hidden;
        }
        .taller-items-card-text .title {
          display: flex;
          font-size: 22px;
          font-weight: 970;
          padding: 5px 1rem;
          text-transform: uppercase;
          margin: 0 5px 10px;
          border-radius: 5px;
          overflow: hidden;
        }
        .taller-items-card-text .text {
          font-size: 18px;
          padding: 5px 1rem;
          margin: 0 5px 5px;
          border-radius: 5px;
          height: 70px;
          max-height: 70px;
          overflow: hidden;
        }
        .taller-items-card-image {
          margin-left: -0.7rem;
          margin-top: -0.7rem;
        }
        .taller-items-card-level {
          display: block;
          margin: 0 0.5rem;
        }

        .span-label {
          display: inline-flex;
          height: 32px;
          line-height: 32px;
          margin-right: 5px;
          font-size: 15px;
        }

        .taller-items-card-icon-top {
          padding: 0 0.5rem;
          margin-top: -50px;
          height: auto;
        }
        .taller-items-card-icon-botom {
          display: none;
          padding: 0 0.5rem;
          width: 100%;
        }
        @media screen and (max-width: ${breakpoint.sm}) {
          .taller-items-card-level {
            display: none;
          }
          .taller-items-card-icon-top {
            margin-top: 0;
          }
          .taller-items-card-text .title {
            font-size: 18px;
          }
          .taller-items-card-text .text {
            font-size: 16px;
            height: 80px;
            max-height: 80px;
          }
          .taller-items-card-icon-botom {
            display: flex;
          }
        }
        .taller-items-card-icon-left {
          padding: 3px 0;
        }
        .taller-items-card-icon-left .icon-label {
          margin: 0 0 30px 15px;
        }

        .taller-item-icon {
          display: flex;
          height: 42px;
          margin: 5px 0;
          max-width: auto;
          cursor: pointer;
        }

        .disabled {
          background: transparent !important;
          opacity: 0.6;
          transition: 0.8s;
        }

        .disabled:hover {
          background: rgb(${item.bg}, ${item.bg}, ${item.bg}, 0.08) !important;
          opacity: 1;
        }

        .taller-item-icon .span {
          margin: auto 12px;
          width: 93px;
          font-size: 13.4px;
        }

        .icon-label {
          display: flex;
          padding: 4px 15px;
          border-radius: 5px;
          height: 40px;
          width: 100%;
          margin: 0 5px;
        }

        @media screen and (max-width: ${breakpoint.xs}) {
          .taller-item-icon .span {
            width: 90px;
            margin: auto 8px;
          }
          .taller-items-card-title {
            display: flex;
          }
          .taller-items-card-text .title {
            display: none;
          }
          .taller-items-card-text .text {
            height: auto;
            max-height: 100%;
          }
          .icon-level {
            padding-left: 5px;
            padding-right: 5px;
            min-width: 136px;
          }
          .icon-level .span-label {
            display: block;
            width: 50%;
            text-align: center;
            font-size: 13.4px;
          }
          .icon-level span {
            display: block;
            width: 50%;
            text-align: center;
          }
        }
        @media screen and (max-width: ${breakpoint.xxs}) {
          .taller-items-card-title {
            display: none;
          }
          .taller-items-card-text .title {
            display: flex;
          }
          .taller-item-icon .span {
            max-width: 100%;
          }
        }
        .icon-label span {
          display: inline-flex;
          height: 30px;
          margin: auto 0;
          vertical-align: center;
        }

        .taller-items-card-action {
          display: inline-flex;
          text-align: end;
          padding: 0 20px;
          width: 100%;
          align-items: center;
          justify-content: end;
          overflow-x: hidden;
        }
        .content-btn,
        .content-icons {
          display: inline-flex;
          text-align: end;
          padding: 0.7rem;
          align-items: center;
          justify-content: end;
        }

        i {
          display: inline-flex;
          color: #818181;
          background: #fff;
          height: 38px;
          width: 38px;
          font-size: 19px;
          margin: auto 5px;
          border-radius: 50%;
          padding: 0.656rem;
          cursor: pointer;
          transition: 0.6s;
        }
        i:hover {
          color: black;
          background: #ddd;
        }
        .btn-continuar {
          border: 3px solid black;
          background-color: ${colors.primary_darken};
          padding: 10px 28px;
          margin: auto 0.7rem auto 0;
          font-size: 16px;
          line-height: 20px;
          font-weight: bold;
          cursor: pointer;
          display: inline-block;
          transition: 0.3s;
          text-transform: uppercase;
          color: black;
        }
        @media screen and (max-width: ${breakpoint.xs}) {
          .btn-continuar {
            font-size: 13px;
            padding: 7px 20px;
          }
        }
        @media screen and (max-width: ${breakpoint.xxs}) {
          .taller-items-card-action {
            display: block;
            padding: 0;
          }
          .btn-continuar {
            width: 100%;
            margin: 0 auto;
          }
          .content-btn,
          .content-icons {
            min-width: 100%;
          }
        }
      `}</style>
    </>
  );
}

function RenderTallerItems({
  handleDelete,
  handleEdit,
  items,
  handleChange,
  squeleton,
  setRecurso,
}) {
  const [remove, setRemove] = useState(null);
  const [time, setTime] = useState(null);
  const [popuptime, setPopuptime] = useState(false);

  const handleSetTime = (id) => {
    setPopuptime(true);
    setTime(id);
  };

  const timeoptions = ['20-30', '31-60', '61-90', '91-120'];

  return (
    <>
      <div className="">
        <div
          className={`select-pop-up ${
            popuptime ? 'select-pop-up-on' : 'select-pop-up-off'
          }`}
          onClick={() => setPopuptime(false)}
          role="presentation"
        >
          <div
            className="popup"
            onClick={(e) => e.stopPropagation()}
            role="presentation"
          >
            <div className="ul">
              {timeoptions.map((item) => (
                <div
                  key={item}
                  className="li"
                  onClick={() =>
                    handleChange(
                      {
                        duracion: item,
                      },
                      time
                    )
                  }
                  role="presentation"
                >
                  <div className="row">
                    <div className="col-1 xxs-2">
                      <i>
                        <Image
                          src="/images/ICONORELOJ.png"
                          alt="portada-entrelazar"
                          height="30px"
                          width="30px"
                        />
                      </i>
                    </div>
                    <div className="col-11 xxs-10">
                      <span>
                        {item}
                        <small> min</small>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {squeleton && (
          <div className="col-12">
            <div className="row content-squeleton">
              <div className="col-4 sm-4 xs-6 xxs-12 content-squeleton-image">
                <div className="squeleton-image squeleton" />
                <div className="row">
                  <div className="col-12 squeleton squeleton-btn" />
                </div>
              </div>
              <div className="col-8 sm-12">
                <div className="squeleton-content-btn">
                  <div className="row">
                    <div className="col-12">
                      <div className="squeleton-text" />
                    </div>
                    <div className="col-4 sm-4 xs-6 xxs-12">
                      <div className="squeleton squeleton-btn" />
                    </div>
                    <div className="col-4 sm-4 xs-6 xxs-12">
                      <div className="squeleton squeleton-btn" />
                    </div>
                    <div className="col-4 sm-4 xs-6 xxs-12">
                      <div className="squeleton squeleton-btn" />
                    </div>
                    <div className="col-4 sm-4 xs-6 xxs-12">
                      <div className="squeleton squeleton-btn" />
                    </div>
                    <div className="col-4 sm-4 xs-6 xxs-12">
                      <div className="squeleton squeleton-btn" />
                    </div>
                    <div className="col-4 sm-4 xs-6 xxs-12">
                      <div className="squeleton squeleton-btn" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="">
          {items.map((item) => (
            <div key={item._id}>
              <Card
                item={item}
                handleEdit={handleEdit}
                setRemove={setRemove}
                handleSetTime={handleSetTime}
                handleChange={handleChange}
                setRecurso={setRecurso}
              />
            </div>
          ))}
          {remove && (
            <div
              className="add"
              onClick={() => setRemove(null)}
              role="presentation"
            >
              <div className="add-card">
                <div
                  className="add-card-text"
                  onClick={(e) => e.stopPropagation()}
                  role="presentation"
                >
                  <div className="confirm">
                    ¿ Confirmaseliminar {remove.nombre} ?
                  </div>
                  <div className="confirm-action">
                    <button
                      type="button"
                      className="btn-nav-bar cancel"
                      onClick={() => setRemove(null)}
                    >
                      CANCELAR
                    </button>
                    <button
                      type="button"
                      className="btn-nav-bar"
                      onClick={() => handleDelete(remove)}
                    >
                      ELIMINAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .content-squeleton {
          border: 8px solid #ddd;
          max-width: ${breakpoint.sm};
          margin: 15px auto;
          padding: 5px;
          border-radius: 5px;
        }
        .squeleton-text {
          min-width: 100%;
          min-height: 180px;
        }
        .squeleton {
          border-radius: 5px;
          cursor: progress;
          background: linear-gradient(0.25turn, transparent, #fff, transparent),
            linear-gradient(#ddd, #ddd), linear-gradient(#ddd, #ddd);
          background-repeat: no-repeat;
          background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
          animation: loading 1.5s infinite;
        }
        .content-squeleton-image {
          padding-left: 15px;
        }
        .content-squeleton-image .squeleton-btn {
          margin: 10px 0 0 !important;
        }
        .squeleton-image {
          min-height: 50%;
          max-width: 400px;
          height: 250px;
        }
        .squeleton-content-btn {
          padding: 10px;
        }
        .squeleton-btn {
          min-height: 40px;
          margin: 10px 5px;
        }
        @keyframes loading {
          to {
            background-position: 315px 0, 0 0, 0 190px, 50px 195px;
          }
        }
        .confirm {
          margin-top: 14px;
          text-transform: uppercase;
          text-align: center;
          font-size: 20px;
        }
        .confirm-action {
          display: block;
          text-align: end;
        }
        .btn-nav-bar {
          border: none;
          background-color: rgba(7, 166, 224, 1);
          padding: 14px 28px;
          margin: 2rem 0 14px;
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
        .cancel {
          background: #818181;
          margin-right: 10px;
        }
        @media screen and (max-width: ${breakpoint.sm}) {
          .squeleton-text {
            display: none;
          }
          .squeleton-image {
            max-height: 130px;
          }
        }
        @media screen and (max-width: ${breakpoint.xs}) {
          .btn-nav-bar {
            font-size: 13px;
            padding: 7px 14px;
          }
          .confirm {
            font-size: 16px;
          }
        }
        @media screen and (max-width: ${breakpoint.xxs}) {
          .btn-nav-bar {
            font-size: 11px;
          }
          .content-squeleton-image {
            margin: 15px 15px 0;
            padding: 0;
          }
        }
      `}</style>
    </>
  );
}

export default RenderTallerItems;
