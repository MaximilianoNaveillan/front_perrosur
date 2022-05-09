/* eslint-disable import/no-extraneous-dependencies */
import css from 'styled-jsx/css';
import { colors } from '../../../styles/theme';

export default css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :after {
    content: '';
  }
  .content-menu {
    float: left;
    display: flex;
    width: 70px;
    min-width: 70px;
    height: 1px;
  }

  nav {
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 0;
    left: 0;
    min-height: 100vh;
  }

  nav ul {
    text-align: center;
    padding: 3rem 0 3rem 0;
    background: ${colors.primary_darken};
    border-top-right-radius: 1.2rem;
    border-bottom-right-radius: 1.2rem;
  }

  nav ul li {
    position: relative;
    width: 70px;
    cursor: pointer;
    margin: -0.1rem 0 0 0;
    background: ${colors.primary_darken};

    text-transform: uppercase;
    transition: all 0.4s ease-out;
    border-top: 0.1rem solid;
    border-bottom: 0.1rem solid;
    border-color: ${colors.primary};
  }

  nav ul li:after {
    position: absolute;
    background: white;
    color: crimson;
    top: 0;
    left: 70px;
    width: 70px;
    height: 70px;
    opacity: 0.5;
    transform: perspective(400px) rotateY(90deg);
    transform-origin: 0 100%;
    transition: all 0.4s ease-out;
  }

  nav ul li:nth-child(1):after {
    content: 'Página';
    line-height: 70px;
  }
  nav ul li:hover {
    transform: translateX(-70px);
  }

  nav ul li:hover:after {
    opacity: 1;
    transform: perspective(400px) rotateY(0deg) scale(1);
  }

  nav ul li > div {
    display: inline-block;
    padding: 1rem 0;
    background: transparent;
  }

  nav ul li div {
    position: relative;
  }

  i {
    color: white;
    font-size: 38px;
  }
`;
