/* eslint-disable react/jsx-filename-extension */
import { FaBookOpen, FaPlayCircle, FaMicroblog, FaEdit } from 'react-icons/fa';

export default function Icon({ index, _class }) {
  const icons = [FaBookOpen, FaPlayCircle, FaMicroblog, FaEdit];
  const Fa = icons[index];
  return (
    <>
      <Fa className={_class} />
      <style jsx>{`
        .footer {
          margin-right: 0.5rem;
        }
        .nav {
          display: none;
          margin-right: 0.7rem;
        }
        @media screen and (max-width: 1500px) {
          .nav {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
