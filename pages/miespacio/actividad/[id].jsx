import dbConnect from '../../../lib/dbConnect';
import Recurso from '../../../models/recurso';
import Talleritem from '../../../models/talletitem';

function Actividad() {
  return <div>...</div>;
}

export default Actividad;

export async function getServerSideProps({ params }) {
  try {
    await dbConnect();
    const res = await Recurso.findOne({ key: params.id });
    try {
      const res2 = await Talleritem.findOne({ modulos: res.modulo });
      if (res2._id) {
        return {
          redirect: {
            destination: `/miespacio/mientrelazar/${res2._id}`,
            permanent: false,
          },
        };
      }
      return { props: {} };
    } catch (error) {
      return { props: {} };
    }
  } catch (error) {
    return { props: {} };
  }
}
