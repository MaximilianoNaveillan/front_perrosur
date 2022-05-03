import Head from "next/head";
import Link from "next/link";
import dbConnect from "../../lib/dbConnect";
import Equipo from "../../models/equipo";
import { colors, breakpoint, fonts } from "../../styles/theme.js";
import Image from "next/image";

function Team({ success, error, equipo }) {
  console.log(success);
  console.log(error);
  console.log(equipo);
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
        <meta
          name="description"
          content="Cursos - Taller & Galería de oficios gráficos
          Serigrafía - diseño - ilustración - audiovisual - encuadernación -editorial"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-12">
              <h1 className=" title">{equipo.nombre}</h1>
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
      <style jsx>{`
        .container {
          padding: 0.5rem;
          background-color: ${colors.secondary};
          min-height: calc(100vh - 70px);
        }
        .content {
          padding: 1rem 1rem;
          border: 0.3rem solid black;
          height: 100%;
        }

        .title {
          margin: 0.7rem;
          font-weight: 1000;
          text-shadow: 6px 6px 0px ${colors.secondary_darken};
        }
        .container-img {
          display: flex;
          justify-content: center;
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
        }
        @media screen and (max-width: ${breakpoint.sm}) {
          .content-img {
            width: 300px;
            height: 440px;
          }
          .container-img {
            min-height: auto;
          }
        }
        @media screen and (max-width: ${breakpoint.xs}) {
          .content-img {
            width: 212px;
            height: 318px;
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
    const equipo = await Equipo.findById(params.id).lean();
    if (!equipo) {
      return { props: { success: false, error: "Información no encotrada" } };
    }
    equipo._id = `${equipo._id}`;
    return { props: { success: true, equipo } };
  } catch (error) {
    if (error.kind == "ObjectId") {
      return { props: { success: false, error: "Id no válido" } };
    } else {
      return { props: { success: false, error: "error de servidor" } };
    }
  }
}
