import Link from 'next/link';
import Img from '../../Img/revel';
import { colors, breakpoint } from '../../../styles/theme';

export default function QueHacemos() {
  return (
    <>
      <div className="card">
        <div className="content-card ">
          <h1 className="title">QUE HACEMOS</h1>
        </div>
        <div className="container-grid ">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <div className="aspect-1">
                    <div className="content-img">
                      <div className="card-img">
                        <Img
                          src="/images/quehacemos1.png"
                          name="Reproducimos"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="aspect-1">
                    <div className="content-img">
                      <div className="card-img">
                        <Img src="/images/quehacemos2.png" name="Diseñamos" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="aspect-2-1">
                <div className="content-img">
                  <div className="card-img">
                    <Img src="/images/quehacemos3.png" name="Enseñamos" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="aspect-1-2">
                <div className="content-img">
                  <div className="card-img">
                    <Img src="/images/quehacemos4.png" name="Producimos" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="aspect-1">
                <div className="content-img">
                  <div className="card-img">
                    <Img src="/images/quehacemos5.png" name="Creamos" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="aspect-1">
                <div className="content-img">
                  <div className="card-img">
                    <Img src="/images/quehacemos6.png" name="Ayudamos" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="contentbutton">
                <Link href="/taller" passHref>
                  <button type="button">conoce más de nosotros</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .title {
          color: white;
          margin: 1.4rem;
          font-size: 2.5rem;
          font-weight: 1000;
          text-shadow: 6px 6px 0px ${colors.pink};
        }
        .container-grid {
          padding-left: 0.3rem;
          padding-right: 0.6rem;
        }
        .card {
          margin-top: 4rem;
          margin-left: 0.7rem;
          margin-right: 1.3rem;
          border: 0.3rem solid black;
          background-color: ${colors.secondary_darken};
          padding-left: 0.7rem;
          padding-top: 0.7rem;
          -webkit-box-shadow: 0.7rem 0.7rem 0px -4px ${colors.secondary_darken};
          box-shadow: 0.7rem 0.7rem 0px -4px ${colors.secondary_darken};
          background-clip: content-box;
        }
        .content-card {
          padding: 2rem 0 3rem;
        }

        .card-img {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: white;
          display: flex;
          -webkit-box-shadow: 12px 12px 0px -2px ${colors.pink};
          box-shadow: 12px 12px 0px -2px ${colors.pink};
          margin: 0.7rem;
          font-size: 25px;
        }
        .contentbutton {
          margin: 1rem 0.2rem;
        }
        @media screen and (max-width: ${breakpoint.xs}) {
          .card-img {
            font-size: 19px;
          }
        }
        @media screen and (max-width: ${breakpoint.xxs}) {
          .card-img {
            font-size: 15px;
          }
        }
      `}</style>
    </>
  );
}
