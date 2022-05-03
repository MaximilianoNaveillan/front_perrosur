import { platform } from "os";
import { FaVestPatches } from "react-icons/fa";
import css from "styled-jsx/css";
import { colors, fonts, breakpoint } from "../styles/theme";

export default css.global`
  html,
  body {
    font-family: ${fonts.base};
    background: ${colors.secondary_lighten};
    scroll-behavior: smooth;
    z-index: 1;
  }
  h1 {
    overflow: hidden;
  }
  .content {
    background-size: contain;
    width: ${breakpoint.md};
    margin: auto;
    z-index: 1;
    max-width: 100%;
  }
  @media screen and (max-width: ${breakpoint.md}) {
    .content {
      width: 100%;
    }
  }
  .collapse {
    border: 0.3rem solid black;
  }
  .content {
    background-size: contain;
    width: ${breakpoint.md};
    margin: auto;
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
    .overlay-true .text {
      font-size: 10px;
      left: 0.3rem;
    }
    .overlay-false .text {
      font-size: 10px;
      left: 0.3rem;
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
  .overlay-true {
    opacity: 1;
  }
  .contentbutton {
    display: block;
    height: 34px;
  }
  .contentbutton button {
    position: relative;
    float: right;
    background-color: ${colors.magenta}; /* Green */
    border: none;
    color: white;
    padding-left: 32px;
    padding-right: 32px;
    height: 34px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-size: 1rem;
    z-index: 1;
  }
  .contentbutton button:hover {
    background-color: black;
    transition: 0.5s all ease;
  }
  .error-container {
    display: flex;
    background: white;
    height: calc(100vh - 70px);
    justify-content: center;
    align-items: center;
  }
  .error-container div:first-child {
    display: flex;
    width: ${breakpoint.md};
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
  .error-container a {
    text-decoration: none;
    padding: 0.7rem 1rem;
    color: #818181;
    border: 1px solid #ddd;
  }
  .error-container a:hover {
    color: black;
  }
`;
