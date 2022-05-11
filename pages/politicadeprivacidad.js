import Head from 'next/head';
import { colors } from '../styles/theme';

function Politicas() {
  return (
    <>
      <Head>
        <title>Políticas | perrosur</title>
        <meta name="description" content="Políticas de privacidad " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="title">
        <div className="row">
          <div className="col-12">
            <h1>Políticas de privacidad</h1>
          </div>
        </div>
      </div>
      <div className="container container-tienda">
        <div className="content ">
          <div className="row">
            <div className="col-12" />
            <div className="col-12">
              <div className="card">
                <h3>Sobre recopilación de información:</h3>
                <p>
                  Recibimos, recopilamos y almacenamos cualquier información que
                  ingrese en nuestro sitio web o nos proporciones de otra
                  manera. Además, recogemos la dirección de protocolo de
                  Internet (IP) utilizada para conectar tu computadora a
                  Internet; datos de inicio de sesión, dirección de correo
                  electrónico, contraseña, información de la computadora y la
                  conexión y el historial de compras. Podemos usar herramientas
                  de software para medir y recopilar información de la sesión,
                  incluidos los tiempos de respuesta de la página, la duración
                  de las visitas a determinadas páginas, la información de
                  interacción de la página y los métodos utilizados para navegar
                  fuera de la página. También recopilamos información de
                  identificación personal (incluido nombres, correo electrónico,
                  contraseña, comunicaciones), detalles de pago (incluida la
                  información de la tarjeta de crédito), comentarios,
                  sugerencias, reseñas de productos, recomendaciones y perfil
                  personal.
                </p>
                <p>
                  Cuando realizas una transacción en nuestra página web, como
                  parte del proceso, recopilamos información personal que nos
                  proporcionas, como tu nombre, dirección física y dirección de
                  correo electrónico. Tu información personal será utilizada
                  solo para los motivos específicos indicados anteriormente.
                </p>
                <p>
                  Recopilamos dicha información personal y no personal para los
                  siguientes propósitos:
                </p>
                <p>1. Para proporcionar y operar los servicios;</p>
                <p>
                  2. Para proporcionar a nuestros usuarios asistencia continua
                  al cliente y soporte técnico;
                </p>
                <p>
                  3. Para poder contactar a nuestros visitantes y usuarios con
                  avisos generales y personalizados relacionados con el servicio
                  y mensajes promocionales;
                </p>
                <p>
                  4. Para crear datos estadísticos agregados y otra información
                  no personal agregada o deducida, que nosotros o nuestros
                  socios comerciales podamos utilizar para proporcionar y
                  mejorar nuestros servicios respectivos;
                </p>
                <p>5. Para cumplir con las leyes y regulaciones aplicables.</p>
                <h3>Sobre los datos registrados</h3>
                <p>
                  Nuestra organización está alojada en servidores VPN y ellos
                  nos proporciona la plataforma en línea que nos permite
                  mostrarte y ofrecerte nuestros productos y servicios. Tus
                  datos pueden almacenarse a través del almacenamiento de datos
                  del proveedor de alojamiento, las bases de datos y las
                  aplicaciones generales del servidor. Ellos almacenan tus datos
                  en servidores seguros detrás de un firewall.
                </p>
                <p>
                  Todas las pasarelas de pago directo ofrecidas y utilizadas por
                  nuestra organización se adhieren a los estándares establecidos
                  por PCI-DSS administrados por el PCI Security Standards
                  Council, que es un esfuerzo conjunto de marcas como Visa,
                  MasterCard, American Express y Discover. Los requisitos de
                  PCI-DSS ayudan a garantizar el manejo seguro de la información
                  de la tarjeta de crédito por parte de nuestra tienda y sus
                  proveedores de servicios.
                </p>
                <h3>
                  Sobre la comunicación con nuestros clientes y usuarios
                  registrados:
                </h3>
                <p>
                  Podemos comunicarnos contigo para notificarte sobre tu cuenta,
                  para solucionar problemas con tu cuenta, resolver una disputa,
                  cobrar tarifas o dinero adeudado, para sondear tus opiniones a
                  través de encuestas o cuestionarios, para enviar
                  actualizaciones sobre nuestra empresa, o cuando sea necesario
                  para contactarte para hacer cumplir nuestro Acuerdo de
                  usuario, las leyes nacionales aplicables y cualquier acuerdo
                  que podamos tener contigo. A estos efectos, podemos
                  comunicarnos contigo por correo electrónico, teléfono,
                  mensajes de texto y correo postal.
                </p>
                <h3>Sobre la no aceptación del manejo de tus datos</h3>
                <p>
                  Si no deseas que procesemos tus datos, contáctanos a
                  perrosurvalparaiso@gmail.com o envíanos un correo a: Calle
                  Bernardo Ramos #309, Valparaíso, Chile
                </p>
                <h3>Sobre la actualización de la información</h3>
                <p>
                  Nos reservamos el derecho de modificar esta política de
                  privacidad en cualquier momento, por lo tanto, revísala con
                  frecuencia. Los cambios y aclaraciones tendrán efecto
                  inmediatamente después de su publicación en la página web. Si
                  realizamos cambios sustanciales a esta política, te
                  notificaremos que se ha actualizado, para que sepas qué
                  información recopilamos, cómo la usamos y en qué
                  circunstancias, si corresponde, usamos o divulgamos la
                  información.
                </p>
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

        .card {
          margin: 2rem 0;
        }
        h3 {
          margin: 1rem 0.5rem;
        }
        p {
          padding: 1rem;
        }
      `}</style>
    </>
  );
}

export default Politicas;
