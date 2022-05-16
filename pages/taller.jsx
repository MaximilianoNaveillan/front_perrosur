import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dbConnect from '../lib/dbConnect';
import Taller from '../models/taller';
import { colors } from '../styles/theme';

const S_URL = process.env.SERVER_URL;

function Team({ success, error, tallers }) {
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
        <title>Taller | perrosur</title>
        <meta name="description" content="que hacemos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container container-taller">
        {tallers.map((item, i) => (
          <div key={item._id}>
            <div className="divider" id={item._id} />
            <div className="content">
              <div className="row">
                <div className="col-4 xs-12">
                  <div className="aspect-1">
                    <div className="content-col-img">
                      <div className="col-img">
                        <div className="img">
                          <Image
                            src={`${S_URL}/uploadimg/image/taller-blog-${item._id}.png`}
                            alt={`image-${i}`}
                            objectFit="cover"
                            layout="fill"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-8 xs-12">
                  <h1 className=" title">{item.nombre}</h1>
                  <div className="content-text">{item.text}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          padding: 0.5rem;

          min-height: calc(100vh - 70px);
        }
        .container-taller {
          background-color: white;
        }
        .divider {
          height: 70px;
        }
        .content {
          padding: 1rem 1rem;
          height: 100%;
        }
        .content-col-img {
          height: 100%;
          margin: 2rem 0 2rem;
        }

        .col-img {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          display: flex;
          -webkit-box-shadow: 8px 8px 0px -2px ${colors.secondary_darken};
          box-shadow: 8px 8px 0px -2px ${colors.secondary_darken};
          margin: auto;
          font-size: 25px;
          max-width: 300px;
          max-height: 300px;
        }

        .title {
          padding-left: 1rem;
          color: ${colors.secondary_darken};
          border-radius: 15px;
          text-align: left;
          margin: 0.7rem;
          font-weight: 1000;
          text-shadow: 6px -6px 0px ${colors.primary_darken};
        }
        .content-text {
          padding: 1rem 1.7rem;
          font-size: 18px;
        }
      `}</style>
    </>
  );
}

export default Team;

export async function getServerSideProps() {
  try {
    await dbConnect();
    const res = await Taller.find({});
    const tallers = res.map((doc) => {
      const taller = doc.toObject();
      taller._id = `${taller._id}`;
      return taller;
    });

    if (!tallers) {
      return { props: { success: false, error: 'Información no encotrada' } };
    }
    return { props: { success: true, tallers } };
  } catch (error) {
    return { props: { success: false, error: 'error de servidor' } };
  }
}
