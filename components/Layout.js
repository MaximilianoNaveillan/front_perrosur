import Navbar from "./Navbar";

export default function Layout({ children }) {
  const routes = [
    { name: "inicio", menu: false, items: [], route: "/", icon: "FaHome" },
    {
      name: "quienes somos",
      menu: true,
      items: [
        { name: "El Equipo", route: "/#equipo" },
        { name: "El Taller", route: "/#taller" },
        { name: "Que Hacemos", route: "/#que_hacemos" },
        { name: "Dossier", route: "/#dossier" },
        { name: "Artistas Libres", route: "/#que_hacemos" },
      ],
      route: "/",
      icon: "FaUsers",
    },
    {
      name: "tienda",
      menu: false,
      items: [],
      route: "/tienda",
      icon: "FaStore",
    },
    {
      name: "actualidad",
      menu: false,
      items: [],
      route: "/#actualidad",
      icon: "FaNewspaper",
    },
    {
      name: "recursos",
      menu: false,
      items: [],
      route: "/#recursos",
      icon: "FaCogs",
    },
    {
      name: "contacto",
      menu: false,
      items: [],
      route: "/#contacto",
      icon: "FaAddressCard",
    },
    {
      name: "mi espacio",
      menu: false,
      items: [],
      route: "/miespacio",
      icon: "FaAddressCard",
    },
  ];

  return (
    <>
      <Navbar routes={routes} />
      <main>{children}</main>
    </>
  );
}
