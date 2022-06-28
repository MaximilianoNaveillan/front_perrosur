import { FaMailBulk } from 'react-icons/fa';
import { colors } from '../styles/theme';

export default function EmailRequest() {
  return (
    <>
      <div className="content-info">
        <div className="info">
          <div className="contnt-icon">
            <FaMailBulk />
          </div>
          <div className="text">
            <div className="title">Consulte su correo electrónico</div>

            <div className="sub-title">
              Se ha enviado un enlace de inicio de sesión a su dirección de
              correo electrónico.
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .content-info {
          display: flex;
          height: calc(100vh - 70px);
          width: 100%;
          background: ${colors.primary};
        }
        .info {
          display: flex;
          background: white;
          margin: auto;
          padding: 1.7rem 0.7rem;
          border: 1px solid #c0c0c0;
          border-radius: 3px;
          color: #222;
        }
        .info .contnt-icon {
          display: inline-flex;
          width: 10%;
          font-size: 35px;
          text-align: center;
          justify-content: center;
          align-items: center;
          border-right: 1px solid #c0c0c0;
        }
        .info .text {
          width: 90%;
          padding: 0 0 0 10px;
        }

        .info .title {
          font-size: 20px;
          font-weight: bold;
        }
        .info .sub-title {
          margin: 10px 0;
        }
      `}</style>
    </>
  );
}
