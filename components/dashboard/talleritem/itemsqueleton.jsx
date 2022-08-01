import { breakpoint } from '../../../styles/theme';

function ItemSqueleton() {
  return (
    <>
      <div className="">
        <div className="col-12">
          <div className="row content-squeleton">
            <div className="col-4 sm-4 xs-6 xxs-12 content-squeleton-image">
              <div className="squeleton-image squeleton" />
              <div className="row">
                <div className="col-12 squeleton squeleton-btn" />
              </div>
            </div>
            <div className="col-8 sm-12">
              <div className="squeleton-content-btn">
                <div className="row">
                  <div className="col-12">
                    <div className="squeleton-text" />
                  </div>
                  <div className="col-4 sm-4 xs-6 xxs-12">
                    <div className="squeleton squeleton-btn" />
                  </div>
                  <div className="col-4 sm-4 xs-6 xxs-12">
                    <div className="squeleton squeleton-btn" />
                  </div>
                  <div className="col-4 sm-4 xs-6 xxs-12">
                    <div className="squeleton squeleton-btn" />
                  </div>
                  <div className="col-4 sm-4 xs-6 xxs-12">
                    <div className="squeleton squeleton-btn" />
                  </div>
                  <div className="col-4 sm-4 xs-6 xxs-12">
                    <div className="squeleton squeleton-btn" />
                  </div>
                  <div className="col-4 sm-4 xs-6 xxs-12">
                    <div className="squeleton squeleton-btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .content-squeleton {
          border: 8px solid #ddd;
          max-width: ${breakpoint.sm};
          margin: 15px auto;
          padding: 5px;
          border-radius: 5px;
        }
        .squeleton-text {
          min-width: 100%;
          min-height: 180px;
        }
        .squeleton {
          border-radius: 5px;
          cursor: progress;
          background: linear-gradient(0.25turn, transparent, #fff, transparent),
            linear-gradient(#ddd, #ddd), linear-gradient(#ddd, #ddd);
          background-repeat: no-repeat;
          background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
          animation: loading 1.5s infinite;
        }
        .content-squeleton-image {
          padding-left: 15px;
        }
        .content-squeleton-image .squeleton-btn {
          margin: 10px 0 0 !important;
        }
        .squeleton-image {
          min-height: 50%;
          max-width: 400px;
          height: 250px;
        }
        .squeleton-content-btn {
          padding: 10px;
        }
        .squeleton-btn {
          min-height: 40px;
          margin: 10px 5px;
        }

        @keyframes loading {
          to {
            background-position: 315px 0, 0 0, 0 190px, 50px 195px;
          }
        }

        @media screen and (max-width: ${breakpoint.sm}) {
          .squeleton-text {
            display: none;
          }
          .squeleton-image {
            max-height: 130px;
          }
        }
        @media screen and (max-width: ${breakpoint.xs}) {
          .btn-nav-bar {
            font-size: 13px;
            padding: 7px 14px;
          }
          .confirm {
            font-size: 16px;
          }
        }
        @media screen and (max-width: ${breakpoint.xxs}) {
          .btn-nav-bar {
            font-size: 11px;
          }
          .content-squeleton-image {
            margin: 15px 15px 0;
            padding: 0;
          }
        }
      `}</style>
    </>
  );
}

export default ItemSqueleton;
