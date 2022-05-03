import Head from "next/head";
import Portada from "../components/home/portada";
import EquipoBlog from "../components/home/equipo";
import TallerBlog from "../components/home/taller";
import Nosotros from "../components/home/nosotros";
import ActualidadBlog from "../components/home/actualidad";
import Contactanos from "../components/home/contactanos";
import dbConnect from "../lib/dbConnect";
import Equipo from "../models/equipo";
import Taller from "../models/taller";
import Actualidad from "../models/actualidad";

import Footer from "../components/footer";

function Home({ equipos, tallers, actualidads }) {
  return (
    <>
      <Head>
        <title>"Inicio | perrosur"</title>
        <meta
          name="description"
          content="Cursos - Taller & Galería de oficios gráficos
          Serigrafía - diseño - ilustración - audiovisual - encuadernación -editorial"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Portada />
      <EquipoBlog equipos={equipos} />
      <TallerBlog tallers={tallers} />
      <Nosotros />
      <ActualidadBlog actualidads={actualidads} />
      <Contactanos />
      <Footer />
      <style jsx>{`
        .container-map {
          display: relative;
        }
      `}</style>
    </>
  );
}

export const getServerSideProps = async (context) => {
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
      const res = await Taller.find({}, { _id: 1, nombre: 1 });
      const tallers = res.map((doc) => {
        const taller = doc.toObject();
        taller._id = `${taller._id}`;
        return taller;
      });
      try {
        await dbConnect();
        const res = await Actualidad.find({}).sort({ $natural: 1 }).limit(8);

        const actualidads = res.map((doc) => {
          const actualidad = doc.toObject();
          actualidad._id = `${actualidad._id}`;
          actualidad.date = `${actualidad.date}`;
          return actualidad;
        });

        return { props: { equipos, tallers, actualidads } };
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      return { props: { success: false, error: "Error al cargar datos." } };
    }
  } catch (error) {
    return { props: { success: false, error: "Error al cargar datos." } };
  }
};

export default Home;
