import Link from 'next/link';
import Img from '../Img/revel';
import { colors } from '../../styles/theme';

export default function Equipo({ equipos }) {
  return (
    <>
      <div id="equipo" className="container">
        <div className="content">
          <div className="row">
            <div className="col-12">
              <h1 className=" title">EL EQUIPO</h1>
            </div>
            {equipos.map((item) => (
              <div key={item._id} className="col-3 md-6 xs-12">
                <Link href={`/team/${item._id}`} passHref>
                  <div className="content-img">
                    <div className="card-img">
                      <Img
                        src={`/images/team-index-${item._id}.png`}
                        name={item.nombre.replace(' ', '\n')}
                        priority
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 7rem 0.5rem 4rem;
          background-color: ${colors.secondary};
        }
        .content {
          padding: 1rem 1rem;
          border: 0.3rem solid black;
        }
        .title {
          margin: 0.7rem;
          font-weight: 1000;
          text-shadow: 6px 6px 0px ${colors.secondary_darken};
        }
        .content-img {
          width: 100%;
          padding-top: 100%; /* 1:1 Aspect Ratio */
          position: relative; /* If you want text inside of it */
        }
        .card-img {
          position: absolute;
          font-size: 25px;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: white;
          display: flex;
          -webkit-box-shadow: 12px 12px 0px -2px ${colors.secondary_darken};
          box-shadow: 12px 12px 0px -2px ${colors.secondary_darken};
          margin: 0.7rem;
        }
      `}</style>
    </>
  );
}
