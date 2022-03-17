import css from "styled-jsx/css";
import { colors, fonts, breakpoint } from "../../styles/theme.js";

export default css`
  .container-nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: ${colors.primary};
    z-index: 3;
  }
  .navbar {
    display: block;
    width: 100%;
    height: 70px;
    min-height: 70px;
  }
  .wrapper {
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
  }
  .logo-container {
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
  }

  ul {
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
  li {
    position: relative;
    height: 100%;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 2.5rem;
    color: black;
    font-family: ${fonts.base};
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: 0.5s all ease;
    text-decoration: none;
  }
  a div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    text-transform: capitalize;
  }
  a div span {
    font-size: 0.9rem;
    margin-left: 6px;
  }
  li:hover > a {
    color: #fff;
    background-color: ${colors.primary_darken};
    transition: 0.5s all ease;
  }

  .ahover {
    color: #fff;
    background-color: ${colors.primary_darken};
    transition: 0.5s all ease;
  }
  .ahover > label ul {
    background: red;
    display: block;
  }
  .movile-icon {
    display: none;
    margin-right: 1rem;
  }
  .ultrue {
    left: -100%;
  }
  .ulfalse {
    left: 0;
  }

  ul ul {
    display: none;
    position: absolute;
    top: 100%;
    width: 100%;
  }

  ul ul a {
    line-height: 120%;
    text-align: left;
    background: ${colors.primary_darken};
  }

  @media screen and (min-width: 1150px) {
    ul li:hover > ul {
      display: block;
      transition: 0.5s all ease-in-out;
    }
    li:hover > a div span {
      color: #fff;
      transform: rotate(180deg);
      transition: 0.5s all ease-in-out;
    }
  }

  @media screen and (max-width: 1150px) {
    input[type="checkbox"]:checked ~ label li ul {
      display: block;
      transition: 0.5s all ease-in-out;
    }
    input[type="checkbox"]:checked ~ label a div span {
      color: #fff;
      transform: rotate(180deg);
      transition: 0.5s all ease-in-out;
    }
    .movile-icon {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    ul {
      background-color: ${colors.primary};
      position: absolute;
      top: 70px;
      width: 100%;
      height: 90vh;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      transition: 0.5 s all ease;
    }
    li {
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    a {
      width: 100%;
    }
    a div {
      width: 30%;
    }
    ul ul {
      background: ${colors.primary};
      z-index: 3;
    }
  }
  @media screen and (max-width: 800px) {
    a div {
      width: 40%;
    }
  }
  @media screen and (max-width: 500px) {
    a div {
      width: 60%;
    }
  }
  @media screen and (max-width: 350px) {
    a div {
      width: 100%;
    }
  }
  input[type="checkbox"] {
    position: absolute;
    left: -100vw;
  }
  label {
    width: 100%;
  }
`;
