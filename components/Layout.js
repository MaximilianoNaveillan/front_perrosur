import Head from "next/head";
import Navbar from "./Navbar";
import { colors, fonts, breakpoint } from "../styles/theme";
//import { addOpacityToColor } from "../styles/utils";

// const backgroundColor = addOpacityToColor(colors.primary, 0.9);

export default function Layout({ children, title, description }) {
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
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar routes={routes} />
      <main>{children}</main>
      <style jsx global>
        {`
          html,
          body {
            background-image: radial-gradient(
                ${colors.secondary} 1px,
                transparent 1px
              ),
              radial-gradient(${colors.secondary_darken} 1px, transparent 1px);
            background-position: 0 0, 25px 25px;
            background-size: 50px 50px;
            padding: 0;
            margin: 0;
            font-family: ${fonts.base};
            overflow-x: hidden;
          }
          h1 {
            overflow: hidden;
          }
          .color-primary {
            background-color: ${colors.primary} !important;
          }
          .collapse {
            border: 0.3rem solid black;
          }
          .content {
            background-size: contain;
            width: ${breakpoint.md};
            margin: auto;
            max-width: 100%;
          }

          .container {
            width: 100%;
            max-width: 100%;
          }

          .row {
            width: 100%;
            max-width: 100%;
            display: flex;
            flex-wrap: wrap;
          }

          /* 1/12 */
          .col-1 {
            width: 8.33%;
          }

          /* 2/12 */
          .col-2 {
            width: 16.66%;
          }

          /* 3/12 */
          .col-3 {
            width: 25%;
          }

          /* 4/12 */
          .col-4 {
            width: 33.33%;
          }

          /* 5/12 */
          .col-5 {
            width: 41.66%;
          }

          /* 6/12 */
          .col-6 {
            width: 50%;
          }

          /* 7/12 */
          .col-7 {
            width: 58.33%;
          }

          /* 8/12 */
          .col-8 {
            width: 66.66%;
          }

          /* 9/12 */
          .col-9 {
            width: 75%;
          }

          /* 10/12 */
          .col-10 {
            width: 83.33%;
          }

          /* 11/12 */
          .col-11 {
            width: 91.66%;
          }

          /* 12/12 */
          .col-12 {
            width: 100%;
          }

          @media screen and (max-width: ${breakpoint.md}) {
            .content {
              width: 100%;
            }
            .md-12 {
              width: 100%;
            }
            .md-6 {
              width: 50%;
            }
            .md-7 {
              width: 58.33%;
            }
            .md-3 {
              width: 25%;
            }
          }
          @media screen and (max-width: ${breakpoint.sm}) {
            .sm-12 {
              width: 100%;
            }
            .sm-6 {
              width: 50%;
            }
          }
          @media screen and (max-width: ${breakpoint.xs}) {
            .xs-12 {
              width: 100%;
            }
            .xs-6 {
              width: 50%;
            }
          }
          @media screen and (max-width: ${breakpoint.xxs}) {
            .xxs-12 {
              width: 100%;
            }
          }
          .aspect-1 {
            position: relative;
            width: 100%;
            padding-top: calc(100% - 0.7rem);
          }
          .aspect-2-1 {
            position: relative;
            width: 100%;
            padding-top: calc(200% - 1.4rem);
          }
          .aspect-1-2 {
            position: relative;
            width: 100%;
            padding-top: calc(50% - 1.4rem);
          }
          .centered-element {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .img {
            position: relative;
            height: 100%;
            width: 100%;
            max-width: 100%;
          }
          .img-overlay {
            position: relative;
            width: 100%;
          }

          .img-overlay-image {
            display: block;
            width: 100%;
            height: auto;
          }

          .overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: 0.5s ease;
            background-color: rgba(255, 255, 255, 0.6);
            cursor: pointer;
          }

          .img-overlay:hover .overlay {
            opacity: 1;
          }
          .contentbutton {
            display: block;
            height: 34px;
          }
          .contentbutton button {
            background-color: ${colors.magenta}; /* Green */
            border: none;
            color: white;
            padding-left: 32px;
            padding-right: 32px;
            height: 34px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            float: right;
            cursor: pointer;
            font-size: 1rem;
            z-index: 1;
            position: relative;
          }
          .contentbutton button:hover {
            background-color: black;
            transition: 0.5s all ease;
          }
        `}
      </style>
    </>
  );
}
