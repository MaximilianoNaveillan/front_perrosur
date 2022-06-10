/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect, useRef } from 'react';
import Cropper from 'react-easy-crop';
import { FaImage } from 'react-icons/fa';
import { colors } from '../../styles/theme';

import { generateDownload } from '../utils/cropImage';

export default function CropImg({
  handleCropImg,
  _key,
  aspect,
  contentheight,
  url,
  handleDelete,
}) {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const triggerFileSelectPopup = () => {
    // eslint-disable-next-line no-unused-expressions
    _key === '1' ? inputRef.current.click() : inputRef2.current.click();
  };

  const [image, setImage] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const handleDeleteImg = () => {
    setImage(null);
    handleDelete(null);
  };

  const onCropComplete = (_croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener('load', () => {
        setImage(reader.result);
      });
    }
  };

  const onDownload = async () => {
    const _img = await generateDownload(image, croppedArea);

    handleCropImg(_img);
  };

  useEffect(() => {
    if (image) onDownload();
  }, [crop]);

  useEffect(() => {
    if (image) onDownload();
  }, [zoom]);
  return (
    <>
      <div className="container">
        <div className="container-cropper">
          <div className="cropper">
            {image ? (
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={Number(aspect)}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            ) : (
              <div className={url ? 'image-container' : 'add-image-container'}>
                {url ? (
                  <div className="image-content">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${url})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                      }}
                    />
                  </div>
                ) : (
                  <label htmlFor={`updateimage${_key}`}>
                    <div>
                      <FaImage />
                    </div>
                  </label>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="container-buttons">
          <input
            type="file"
            accept="image/*"
            ref={_key === '1' ? inputRef : inputRef2}
            onChange={onSelectFile}
            style={{ display: 'none' }}
          />
          <div className="options">
            <div>
              <button
                type="button"
                id={`updateimage${_key}`}
                className="btntab"
                onClick={triggerFileSelectPopup}
              >
                CARGAR IMAGEN
              </button>
              {image && (
                <button
                  type="button"
                  className="btntab"
                  onClick={handleDeleteImg}
                >
                  ELIMINAR
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .cropper {
          position: relative;
          height: ${contentheight};
          background-color: rgba(0, 0, 0, 0.49);
        }
        .options {
          background-color: rgba(0, 0, 0, 0.49);
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0.5rem 0.5rem;
        }
        .options button {
          display: inline-block;
          background-color: transparent;
          color: #e8e8e8;
          font-size: 1.07rem;
          line-height: 1.94rem;
          padding: 0.3rem 1.34rem;
          border: none;
          text-align: center;
          margin: 0.5rem;
          border-radius: 3px;
          cursor: pointer;
          transition: 0.5s all ease;
        }
        .options button:hover {
          color: white;
          background-color: ${colors.primary_darken};
        }
        .image-container {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .image-container .image-content {
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 3px dashed #2f2f30;
          height: calc(400px / ${aspect});
          width: calc(400px * ${aspect});
        }
        .add-image-container {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 8rem;
        }
        .add-image-container div {
          color: #2f2f30;
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1.5rem 2.5rem;
          border-radius: 33px;
          border: 3px dashed #2f2f30;
          cursor: pointer;
          transition: 0.3s all ease;
        }
        .add-image-container div:hover {
          background-color: rgba(250, 250, 250, 0.3);
        }
      `}</style>
    </>
  );
}
