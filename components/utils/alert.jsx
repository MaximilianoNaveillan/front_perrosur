import {
  AiOutlineWarning,
  AiFillWarning,
  AiOutlineCheckCircle,
} from 'react-icons/ai';
import { breakpoint } from '../../styles/theme';

function WarIcon() {
  return <AiOutlineWarning />;
}
function ErrIcon() {
  return <AiFillWarning />;
}
function SuccessIcon() {
  return <AiOutlineCheckCircle />;
}

function Alert({ alert, setAlert }) {
  const date = alert ? new Date(alert.timestamp).toISOString() : '';
  const setOutIn =
    alert && alert.statusCode >= 200 && alert.statusCode <= 399
      ? 'dialog-out'
      : 'dialog-in';

  return (
    <>
      <div
        className={`add ${alert ? setOutIn : 'dialog-none'}`}
        onClick={() => setAlert(undefined)}
        role="presentation"
      >
        <div className="add-card">
          <div className={`alert ${alert ? alert.class : ''}`}>
            <div className="message">
              {alert && (
                <>
                  <i>
                    {alert.statusCode >= 200 && alert.statusCode <= 399 && (
                      <SuccessIcon />
                    )}
                    {alert.statusCode >= 400 && alert.statusCode <= 499 && (
                      <WarIcon status={alert.status} />
                    )}
                    {alert.statusCode > 499 && <ErrIcon />}
                  </i>
                  {alert.statusCode >= 399 && (
                    <h1>Error ({alert.statusCode})</h1>
                  )}
                  <p>{alert.message}</p>
                  <small>{date}</small>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .add {
          position: fixed;
          top: 0;
          right: 0;
          height: 100%;
          width: 100%;
          z-index: 3;
          transition: 0.6s;
        }
        .add-card {
          display: flex;
          height: 100%;
          max-height: 100vh;
          overflow: hidden;
          width: 100%;
          justify-content: space-around;
          align-items: center;
        }
        .alert {
          display: flex;
          text-align: center;
          height: 300px;
          text-align: center;
          border-radius: 5px;
          padding: 1.7rem;
          width: ${breakpoint.xs};
          max-width: ${breakpoint.xs};
          margin: 0.7rem;
          border: 1px solid #ccc;
          -webkit-box-shadow: 2px 5px 9px 1px rgba(0, 0, 0, 0.39);
          box-shadow: 0.2rem 0.2rem 0.6rem 0.1rem rgba(0, 0, 0, 0.19);
          background: white;
        }
        .alert .message {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          grid-auto-flow: row dense;
        }
        .alert .message h1 {
          grid-column-start: 1;
        }
        .alert .message p {
          font-size: 20px;
          color: #666666;
          grid-column-start: 1;
        }
        .alert .message small {
          color: #666666;
          grid-column-start: 1;
        }

        i {
          height: 65px;
          max-height: 65px;
          max-height: 65px;
          font-size: 65px;
          line-height: 65px;
          padding: 0;
          margin: 0;
        }

        .bad-request i {
          color: #818181;
        }
        .server-error i {
          color: red;
        }
        .success i {
          color: green;
        }
        .dialog-in {
          display: block;
        }
        .dialog-none {
          display: none;
        }
        .dialog-out {
          opacity: 0;
          animation: out-dialog 2.8s forwards;
        }
        @keyframes out-dialog {
          0% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

export default Alert;
