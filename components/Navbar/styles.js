// eslint-disable-next-line import/no-extraneous-dependencies
import css from 'styled-jsx/css';
import { colors, fonts, breakpoint } from '../../styles/theme';

export default css`
  .container-nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    max-height: 90vh;
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
    max-width: calc(${breakpoint.md} + 220px);
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
  }
  .logo-container {
    margin-left: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .container-user {
    min-width: 96px;
    text-align: right;
    float: right;
  }
  i {
    position: relative;
    margin: auto;
    height: 2.76rem;
    width: 2.76rem;
    border-radius: 50%;
    overflow: hidden;
  }

  ul {
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: auto;
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
    text-decoration: none;
  }
  a div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  a div span {
    height: 30px;
    right: 20px;
    font-size: 0.3rem;
    margin-left: 0.7rem;
    transition: 0.3s;
  }
  li:hover > a {
    color: #fff;
    background-color: ${colors.primary_darken};
    transition: 0.3s;
  }

  .ahover {
    color: #fff;
    background-color: ${colors.primary_darken};
  }
  .ahover > label ul {
    display: block;
  }
  .movile-icon {
    display: none;
    padding: 6px 12px;
    margin: 0.7rem;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 50%;
    text-decoration: none;
    background: none;
  }
  .icon-btn {
    height: 100%;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 50%;
    text-decoration: none;
    background: none;
  }

  .ul-menu {
    left: -100%;
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
    width: 100%;
    z-index: 1;
    -webkit-animation: fadeTop 0.3s;
    animation: fadeTop 0.3s;
  }
  @-webkit-keyframes fadeTop {
    0% {
      opacity: 0;
      top: -100%;
    }
    60% {
      opacity: 0;
      top: 50%;
    }
    100% {
      opacity: 1;
      top: 100%;
    }
  }
  @keyframes fadeTop {
    0% {
      opacity: 0;
      top: -100%;
    }
    60% {
      opacity: 0;
      top: 50%;
    }
    100% {
      opacity: 1;
      top: 100%;
    }
  }

  ul ul a {
    line-height: 120%;
    text-align: left;
    background: ${colors.primary_darken};
  }
  .nav-user {
    display: none;
  }
  label {
    width: initial;
  }

  .container-ul {
    width: 100%;
    min-width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ul .omrs-input-group {
    height: 55px;
    margin: 7px 0 4px -2px;
    width: 100%;
    border-radius: 5px;
    border: 2px solid black;
    padding: 0 !important;
  }
  ul .omrs-input-group label input {
    height: 55px;
    width: 85%;
    padding-top: 0;
    border: none;
    margin: 0 !important;
  }
  ul .omrs-input-group label button {
    display: inline-flex;
    float: right;
    border: none;
    width: 15%;
    height: 100%;
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    cursor: pointer;
    display: inline-block;
    transition: 0.3s;
    text-transform: uppercase;
    color: white;
    background-color: rgb(254, 167, 000, 0.6);
  }

  ul .omrs-input-group:hover {
    background-color: rgb(254, 167, 000, 0.6);
  }

  @media screen and (min-width: ${breakpoint.media}) {
    ul li:hover > ul {
      display: block;
    }

    li:hover > a div span {
      color: #fff;
      transform: rotate(180deg);
    }
  }

  @media screen and (max-width: ${breakpoint.media}) {
    .container-user {
      display: none !important;
    }
    .nav-user {
      display: block;
    }
    label {
      width: 100%;
    }
    ul input[type='checkbox']:checked ~ label li ul {
      display: block;
    }
    ul input[type='checkbox']:checked ~ label a div span {
      color: #fff;
      transform: rotate(180deg);
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
      height: 80vh;
      min-height: 80vh;
      max-height: 80vh;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      border-bottom: 2px solid black;
      overflow-y: auto;
    }
    .container-ul {
      max-width: 330px;
      max-height: 80vh;
      min-width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li {
      width: 100%;
      height: 70px;
      min-height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    a {
      width: 100%;
    }
    ul ul {
      background: ${colors.primary};
      padding-top: 0;
      border: none;
    }
    ul .omrs-input-group {
      margin-top: 20px;
    }
  }
  @media screen and (max-width: ${breakpoint.sm}) {
    a {
      font-size: 0.9rem;
    }
  }
  @media screen and (max-width: ${breakpoint.xxs}) {
    .movile-icon {
      margin: 0.7rem 0;
    }
  }
  ul input[type='checkbox'] {
    position: absolute;
    left: -100vw;
  }
`;
