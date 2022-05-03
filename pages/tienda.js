import dbConnect from "../lib/dbConnect";
import Head from "next/head";
import Tienda from "../models/tienda";
import Image from "next/image";
import { colors, breakpoint, fonts } from "../styles/theme.js";
function Store({ tiendas }) {
  console.log(tiendas);
  return (
    <>
      <Head>
        <title>Tienda | perrosur</title>
        <meta
          name="description"
          content="nuestros productos perrosur - ofertas -ventas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="title">
        <div className="row">
          <div className="col-4">
            <Image
              src={`/images/iconobolsa.png`}
              alt="quehacemos1-entrelazar"
              width={80}
              height={120}
            />
          </div>
          <div className="col-4">
            <h1>TIENDA</h1>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <div className="container container-tienda">
        <div className="content ">
          <div className="row">
            <div className="col-12"></div>
            <div className="col-12">
              <div className="row card">
                {tiendas.map((item, i) => (
                  <div key={item._id} className="col-4 md-6">
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
                    <div className="card-title">{item.nombre}</div>
                    <div className="card-text">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .row {
          justify-content: center;
        }
        .col-3 {
          background: red;
        }
        .container {
          padding: 0.5rem;
          min-height: calc(100vh - 70px);
        }
        .container-tienda {
          background-color: white;
        }
        .divider {
          height: 70px;
        }
        .title {
          color: black;
          text-align: center;
          padding: 0.7rem 0 0.7rem;

          font-weight: 1000;
          text-shadow: 6px -6px 0px ${colors.primary_darken};
          border: 0.3rem solid black;
          background: white;
        }
        .title h1 {
          display: inline-block;
          margin: 2rem 0 2rem;
          font-size: 2.7rem;
        }
        .col-img {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          display: flex;

          margin: auto;
          padding: 1rem;
        }
        .card-title {
          background: white;
          font-size: 20px;
          font-weight: 1000;
          text-align: center;
          white-space: pre-line;
          margin: 0 0.7rem;
          text-transform: uppercase;
        }
        .card-text {
          background: white;
          font-size: 18px;
          text-align: center;
          white-space: pre-line;
          padding: 0.7rem;
          margin: 0 0.7rem;
        }
        .card {
          margin: 2rem 0;
        }
      `}</style>
    </>
  );
}

export default Store;

export async function getServerSideProps({ params }) {
  try {
    await dbConnect();
    const res = await Tienda.find({ state: true });
    const tiendas = res.map((doc) => {
      const tienda = doc.toObject();
      tienda._id = `${tienda._id}`;
      return tienda;
    });
    return { props: { success: true, tiendas } };
  } catch (error) {
    return { props: { success: false, error: "error de servidor" } };
  }
}
