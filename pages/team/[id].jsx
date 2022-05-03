import Head from "next/head";
import Link from "next/link";
import dbConnect from "../../lib/dbConnect";
import Equipo from "../../models/equipo";
import Tienda from "../../models/tienda";
import Img from "../../components/Img/revel";
import { colors, breakpoint, fonts } from "../../styles/theme.js";
import Image from "next/image";

function Team({ success, error, tiendas, equipo, equipos }) {
  const tiendaslength = tiendas.length;
  if (!success) {
    return (
      <div className="error-container">
        <div className="row">
          <div>
            <h4>{error}</h4>
          </div>
          <div>
            <Link href="/#equipo">
              <a>Volver</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>{`${equipo.nombre} | perrosur`}</title>
        <meta name="description" content={`Curriculum - ${equipo.nombre}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container container-1">
        <div className="content content-1">
          <div className="row">
            <div className="col-12">
              <div className="row">
                {equipos.map((item, i) => (
                  <div key={item._id} className="col-3">
                    <Link href={`/team/${item._id}`}>
                      <div className="aspect-1">
                        <div className="col-img">
                          <Img
                            src={`/images/team-index-${item._id}.png`}
                            name={item.nombre.replace(" ", "\n")}
                            selected={item._id === equipo._id ? true : false}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-6 sm-12">
              <div className="container-img">
                <div className="content-img">
                  <div className="card-img">
                    <div className="img">
                      <Image
                        src={`/images/team-blog-${equipo._id}.png`}
                        alt={equipo.nombre}
                        objectFit="cover"
                        layout="fill"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 sm-12">
              <div className="row">
                <div className="col-12">
                  <h1 className=" title">{equipo.nombre}</h1>
                </div>
                <div className="col-12">
                  <div className="detail">
                    {equipo.items.map((item, i) => (
                      <ul key={i}>
                        <li>{item}</li>
                      </ul>
                    ))}
                    <section>
                      {equipo.sections.map((item, i) => (
                        <p key={i}>{item}</p>
                      ))}
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-2">
        <div className="content content-2">
          <div className="row">
            {tiendaslength > 0 ? (
              <>
                <div className="col-12">
                  <h1 className="title">ALGUNAS DE SUS OBRAS </h1>
                </div>
                {tiendas.map((item, i) => (
                  <div key={item._id} className="col-3 md-6 sm-12">
                    <div className="aspect-1">
                      <div className="col-img">
                        <div className="img">
                          <Image
                            src={`/images/tienda-blog-${item._id}.png`}
                            alt={item.nombre}
                            objectFit="cover"
                            layout="fill"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="content-text">{item.text}</div>
                  </div>
                ))}
              </>
            ) : (
              <> </>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 0.5rem;
        }
        .content {
          padding: 1rem 1rem;
          border: 0.3rem solid black;
        }
        .container-1 {
          padding-bottom: 0;
          background-color: ${colors.secondary};
        }
        .content-1 {
          border-bottom: none;
        }
        .container-2 {
          padding-top: 0;
          background-color: ${colors.secondary_darken};
          min-height: auto;
        }
        .content-2 {
          border-top: none;
          margin-bottom: 3rem;
        }
        .content-2 .row {
          justify-content: center;
          margin-bottom: 2rem;
        }
        .content-2 .row .title {
          text-align: center;
          font-size: 1.7rem;
          padding-bottom: 1.7rem;
        }
        .content-2 .content-text {
          background: white;
          font-size: 18px;
          text-align: center;
          white-space: pre-line;
          padding: 0.7rem;
          margin: 0 0.7rem;
        }
        .content-col-img {
          height: 100%;
          margin: 0 2.5rem;
        }
        .col-img {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          display: flex;
          margin: 0 0.7rem;
          font-size: 25px;
        }
        .content-1 .col-img {
          -webkit-box-shadow: 0.5rem 0.5rem 0px -2px ${colors.secondary_darken};
          box-shadow: 0.5rem 0.5rem 0px -2px ${colors.secondary_darken};
        }

        .content-1 .title {
          margin-top: 3rem;
        }

        .title {
          margin: 1.7rem 0.7rem 0.7rem 0.7rem;
          font-weight: 1000;
          text-shadow: 6px 6px 0px ${colors.secondary_darken};
        }
        .container-img {
          display: flex;
          justify-content: start;
          min-height: calc(100vh - 12rem);
          padding-top: 1rem;
        }
        .content-img {
          width: 530px;
          height: 790px;
          position: relative; /* If you want text inside of it */
        }
        @media screen and (max-width: ${breakpoint.md}) {
          .content-img {
            width: 430px;
            height: 690px;
          }
          .content-col-img {
            margin: 0 1.5rem;
          }
        }
        @media screen and (max-width: ${breakpoint.sm}) {
          .content-img {
            width: 300px;
            height: 440px;
          }
          .container-img {
            min-height: auto;
            justify-content: center;
          }
          .content-col-img {
            margin: 0;
          }
          .content-2 .content-text {
            margin: 0;
          }
        }
        @media screen and (max-width: ${breakpoint.xs}) {
          .content-img {
            width: 212px;
            height: 318px;
          }
          .col-img {
            margin: 0;
          }
          .content-col-img {
            margin: 0;
          }
        }

        .card-img {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          display: flex;
          -webkit-box-shadow: 12px 12px 0px -2px ${colors.primary};
          box-shadow: 12px 12px 0px -2px ${colors.primary};
          margin: 0.7rem;
          font-size: 25px;
        }

        .aspect-2-1 {
          background: grey;
        }
        .detail {
          padding: 1rem;
          font-size: 18px;
          white-space: pre-line;
        }
        ul {
          margin: 1rem 0.7rem;
        }
        ul li {
          width: 100%;
          font-family: ${fonts.base};
          font-size: 18px;
          font-weight: 400;
        }
        section p {
          padding: 2rem 0.7rem;
          font-family: ${fonts.base};
          font-size: 18px;
          font-weight: 400;
        }
      `}</style>
    </>
  );
}

export default Team;

export async function getServerSideProps({ params }) {
  try {
    await dbConnect();
    const res = await Equipo.find({}, { _id: 1, nombre: 1 });
    const equipos = res.map((doc) => {
      const equipo = doc.toObject();
      equipo._id = `${equipo._id}`;
      return equipo;
    });
    try {
      await dbConnect();
      const equipo = await Equipo.findById(params.id).lean();
      if (!equipo || !equipos) {
        return { props: { success: false, error: "Información no encotrada" } };
      }
      equipo._id = `${equipo._id}`;
      try {
        await dbConnect();
        const res = await Tienda.find({ equipo: equipo._id });
        const tiendas = res.map((doc) => {
          const tienda = doc.toObject();
          tienda._id = `${tienda._id}`;
          return tienda;
        });
        return { props: { success: true, tiendas, equipo, equipos } };
      } catch (error) {
        return { props: { success: false, error: "error de servidor" } };
      }
    } catch (error) {
      if (error.kind == "ObjectId") {
        return { props: { success: false, error: "Id no válido" } };
      } else {
        return { props: { success: false, error: "error de servidor" } };
      }
    }
  } catch (error) {
    return { props: { success: false, error: "error de servidor" } };
  }
}
