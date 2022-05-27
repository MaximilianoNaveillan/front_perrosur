import { getSession } from 'next-auth/react';
import { useState } from 'react';
import Link from 'next/link';
import Menu from '../../components/miespacio/menu/index';

function Myspace({ session }) {
  const [toggleleft, setToggleLeft] = useState(false);

  return (
    <>
      <div
        className={`container content-align-left ${
          toggleleft ? 'force-content-align-left' : ''
        }`}
      >
        <Menu setToggleLeft={setToggleLeft} toggleleft={toggleleft} />
        <div className="content">
          {session && (
            <div className="row">
              <div className="col-6">
                <div className="container-items">
                  <Link href="/miespacio/blog" passHref>
                    <a>BLOG</a>
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <div className="container-iems">
                  <Link href="/blog" passHref>
                    <a>Blog</a>
                  </Link>
                </div>
              </div>
            </div>
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
        .container-items {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          height: 7rem;
          padding: 1rem;
        }
        a {
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: #f4f2f4;
          height: 100%;
          width: 100%;
          text-decoration: none;
          color: #444444;
          border: 0.1rem solid #ddd;
          font-weight: bold;
          border-radius: 8px;
          transition: 0.5s all ease;
        }
        a:hover {
          background: #ddd;
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
