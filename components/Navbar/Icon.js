import {
  FaHome,
  FaUsers,
  FaStore,
  FaNewspaper,
  FaCogs,
  FaAddressCard,
} from "react-icons/fa";

export default function Icon({ index, _class }) {
  const icons = [FaHome, FaUsers, FaStore, FaNewspaper, FaCogs, FaAddressCard];
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
          margin-right: 0.5rem;
        }
        @media screen and (max-width: 1150px) {
          .nav {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
