import Portada from "../components/home/portada";
import Equipo from "../components/home/equipo";
import Taller from "../components/home/taller";
import Nosotros from "../components/home/nosotros";
import Actualidad from "../components/home/actualidad";
import Contactanos from "../components/home/contactanos";
import Layout from "../components/Layout";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Layout
        title="Inicio | perrosur"
        description="Taller & Galería de oficios gráficos
Serigrafía - diseño - ilustración - audiovisual - encuadernación -editorial"
      >
        <Portada />
        <Equipo />
        <Taller />
        <Nosotros />
        <Actualidad />
        <Contactanos />
      </Layout>
      <Footer />
      <style jsx>{`
        .container-map {
          display: relative;
        }
      `}</style>
    </>
  );
}
