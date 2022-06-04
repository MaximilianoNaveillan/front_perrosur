import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Menu from '../../components/miespacio/menu/index';

const _URL = process.env.BASE_URL;
function Myspace({ session }) {
  const [toggleleft, setToggleLeft] = useState(false);
  const [talleritem, setTalleritem] = useState([]);

  const renderItems = () => {
    axios
      .get(`${_URL}/api/talleritem`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setTalleritem(res.data.talleres);
      })
      .catch(() => {
        setTalleritem([]);
      });
  };

  useEffect(() => {
    if (!session) return;
    renderItems();
  }, []);

  return (
    <>
      <div
        className={`container content-align-left ${
          toggleleft ? 'force-content-align-left' : ''
        }`}
      >
        <Menu setToggleLeft={setToggleLeft} toggleleft={toggleleft} />
        <div className="content">
          {talleritem && (
            <>
              {talleritem.map((item) => (
                <div className="row" key={item._id}>
                  <div className="col-12">{item.titulo}</div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .container {
          background: white;
        }
        .content {
          background: white;
          min-height: calc(100vh - 70px);
          padding: 1rem;
        }
      `}</style>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: '/#login-modal',
        permanent: false,
      },
    };
  return {
    props: {
      session,
    },
  };
};

export default Myspace;
