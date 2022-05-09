import Image from 'next/image';
import Link from 'next/link';
import Img from '../Img/revel';
import { breakpoint, colors } from '../../styles/theme';

export default function Taller({ tallers }) {
  return (
    <>
      <div id="taller" className="container">
        <div className="icon-section">
          <div className="float">
            <div className="img-icon">
              <Image src="/images/trazo.png" layout="fill" priority />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-12">
              <h1 className=" title">EL TALLER</h1>
            </div>
            {tallers.map((item) => (
              <div key={item._id} className="col-3 md-6 xs-12">
                <Link href={`/taller/#${item._id}`} passHref>
                  <div className="content-img">
                    <div className="card-img">
                      <Img
                        src={`/images/taller-blog-${item._id}.png`}
                        name={item.nombre.replace(' ', '\n')}
                        priority
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <div className="col-12 ">
              <div className="contentbutton">
                <Link href="/taller" passHref>
                  <button type="button">Conoce más del taller</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background: white;
          padding-left: 0;
          padding-right: 0.7rem;
        }
        .content-trazo {
          margin-top: -10rem;
          padding-top: 10rem;
          -webkit-background-size: 60%; /* Safari 3.0 */
          -moz-background-size: 60%; /* Gecko 1.9.2 (Firefox 3.6) */
          -o-background-size: 60%; /* Opera 9.5 */
          background-size: 60%;
        }
        .content {
          padding: 10rem 2.4rem 7rem;
        }
        .icon-section {
          position: absolute;
          left: 0;
          right: 0;
          height: 700px;
          width: 1500px;
          max-width: 100%;
          margin: auto;
        }
        .float {
          width: 100%;
          height: 100%;
          margin: auto;
        }
        .img-icon {
          margin-top: -2.15rem;
          position: relative;
          display: flex;
          float: right;
          margin-right: 3%;
          height: 83.3%;
          width: 1200px;
          min-width: 60%;
        }

        .contentbutton {
          float: left;
        }
        .content-pincel {
          display: flex;
          margin-bottom: -7rem;
        }

        .title {
          padding-right: 0.7rem;
          color: ${colors.secondary_darken};
          border-radius: 15px;
          text-align: right;
          margin: 0.7rem;
          font-weight: 1000;
          text-shadow: 6px -6px 0px ${colors.primary_darken};
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
          -webkit-box-shadow: 12px 12px 0px -2px ${colors.primary_darken};
          box-shadow: 12px 12px 0px -2px ${colors.primary_darken};
          margin: 0.7rem;
        }
        .img {
          position: relative;
          height: 100%;
          width: 100%;
        }

        @media screen and (max-width: ${breakpoint.md}) {
          .content-trazo {
            background-image: none;
          }
          .content-pincel {
            display: none;
          }
          .img-icon {
            display: none;
          }
        }
        @media screen and (max-width: ${breakpoint.sm}) {
          .pincel {
            height: 100px;
          }
        }
        button {
          float: left;
          margin-top: 1.3rem;
          margin-left: 0.7rem;
        }
      `}</style>
    </>
  );
}
