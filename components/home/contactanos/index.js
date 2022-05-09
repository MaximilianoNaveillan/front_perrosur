/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import { colors } from '../../../styles/theme';
// eslint-disable-next-line import/no-unresolved
import MapboxMap from './mapbox';
import Form from './form';

export default function Contactanos() {
  return (
    <>
      <div id="contacto" className="container">
        <div className="content">
          <div className="row">
            <div className="col-7 sm-12">
              <Form />
            </div>
            <div className="col-5 sm-12">
              <div className="container-map">
                <div className="content-map">
                  <div className="aspect-1">
                    <div className="map">
                      <MapboxMap />
                    </div>
                  </div>
                </div>
                <div id="dossier" className="map-text">
                  <p>Taller PerroSur</p>
                  <p>Calle Bernardo Ramos #309</p>
                  <p>C° Bellavista, Valparaíso, Chile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: ${colors.secondary_lighten};
        }
        .content {
        }
        .container-map {
          padding-right: 1rem;
          padding-left: 1rem;
          padding-top: 1.78rem;
          overflow: hidden;
        }
        .content-map {
          position: relative;
          max-height: 450px;
        }

        .map {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          max-height: 450px;
          max-width: 450px;
          margin-left: auto;
          margin-right: auto;
        }

        .col-7 {
          padding: 0 1.45rem;
        }
        .map-text {
          max-width: 450px;
          margin-right: auto;
          margin-left: auto;
          margin-top: 1rem;
          margin-bottom: 3rem;
        }
        .map-text p {
          font-size: 1.476rem;
        }
      `}</style>
    </>
  );
}
