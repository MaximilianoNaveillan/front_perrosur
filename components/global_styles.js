/* eslint-disable import/no-extraneous-dependencies */
import css from 'styled-jsx/css';
import { colors, fonts, breakpoint } from '../styles/theme';

export default css.global`
  html {
    overflow-y: scroll;
  }
  html,
  body {
    font-family: ${fonts.base};
    background: white;

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

  .collapse {
    border: 0.3rem solid black;
  }
  .content {
    background-size: contain;
    width: ${breakpoint.md};
    margin: auto;
    transition: 0.3s;
  }

  .content-align-left {
    width: calc(100% - 280px) !important;
    max-width: calc(100% - 280px) !important;
    margin-left: 280px;
    transition: 0.3s;
  }
  .force-content-align-left {
    width: 100% !important;
    max-width: 100% !important;
    margin-left: 0 !important;
    transition: 0.3s;
  }
  .menu-right {
    position: fixed;
    background-color: ${colors.green};
    top: 70px;
    right: ${breakpoint.md};
    left: 0;
    bottom: 0;
    width: 280px;
    max-width: 280px;
    transition: 0.6s;
    z-index: 2;
  }
  .force-menu-right {
    width: auto;
    right: 100%;
    transition: 0.6s;
  }

  @media screen and (max-width: ${breakpoint.media}) {
    .content-align-left {
      width: 100% !important;
      max-width: 100% !important;
      margin-left: 0 !important;
    }
    .menu-right {
      width: auto;
      right: 100%;
      transition: 0.6s;
    }
    .force-menu-right {
      right: calc(100% - 280px);
      transition: 0.6s;
    }
  }

  @media screen and (max-width: ${breakpoint.md}) {
    .content {
      width: 100%;
    }
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
  .col-0 {
    width: 0px;
    max-width: 0px;
    visibility: hidden;
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
    .md-0 {
      width: 0px;
      max-width: 0px;
      visibility: hidden;
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
    .md-9 {
      width: 75%;
    }
    .md-3 {
      width: 25%;
    }
  }
  @media screen and (max-width: ${breakpoint.sm}) {
    .sm-12 {
      width: 100%;
    }
    .sm-3 {
      width: 25%;
    }
    .sm-6 {
      width: 50%;
    }
    .sm-8 {
      width: 66.66%;
    }
    .sm-9 {
      width: 75%;
    }
    .sm-4 {
      width: 33.33%;
    }
    .sm-0 {
      width: 0px;
      max-width: 0px;
      visibility: hidden;
    }
  }
  @media screen and (max-width: ${breakpoint.xs}) {
    .xs-12 {
      width: 100%;
    }
    .xs-0 {
      width: 0px;
      max-width: 0px;
      visibility: hidden;
    }
    .xs-4 {
      width: 33.33%;
    }
    .xs-5 {
      width: 41.66%;
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
    .contentbutton {
      font-size: 0.6rem !important;
    }
  }
  @media screen and (max-width: ${breakpoint.xxs}) {
    .xxs-0 {
      width: 0px;
      max-width: 0px;
      visibility: hidden;
    }
    .xxs-12 {
      width: 100%;
    }
    .xxs-2 {
      width: 16.66%;
    }
    .xxs-10 {
      width: 83.33%;
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
    height: 38px;
  }
  .contentbutton button {
    position: relative;
    float: right;
    background-color: ${colors.magenta}; /* Green */
    border: none;
    color: white;
    padding-left: 32px;
    padding-right: 32px;
    height: 38px;
    line-height: 15px;
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

  .add {
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.45);
    height: 100%;
    width: 100%;
    z-index: 3;
    transition: 0.6s;
    animation: fade-in 0.5s forwards;
  }
  .add-card {
    display: flex;
    height: 100%;
    max-height: 100vh;
    overflow: hidden;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
  .add-card-text {
    height: auto;
    max-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    width: ${breakpoint.xs};
    max-width: ${breakpoint.xs};
    margin: 0 0.7rem;
    border: 1px solid #818181;
    border-radius: 3px;
    padding: 1.7rem 1rem 0;
    background: white;
  }

  .btn-dialog {
    border: none;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 14px 28px;
    margin: 0;
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    cursor: pointer;
    display: inline-block;
    border-radius: 5px;
    text-transform: uppercase;
    color: white;
  }

  .btn-cancel {
    background-color: rgba(0, 0, 0, 0.2) !important;
    color: rgb(070, 070, 070) !important;
  }

  .space {
    display: inline-flex;
    width: 15px;
  }

  .select-pop-up {
    display: flex;
    position: fixed;
    top: -100%;
    left: 0;
    z-index: 3;
    height: 100%;
    width: 100%;
  }
  .select-pop-up-on {
    top: 0;
    padding: 0 1rem;
  }
  .select-pop-up .popup {
    background: white;
    width: ${breakpoint.xxs};
    max-width: ${breakpoint.xxs};
    margin: auto;
    border-radius: 5px;
  }
  .select-pop-up .popup .ul {
    border-radius: 5px;
    margin: 3px 0;
  }
  .select-pop-up .popup .ul .li {
    height: 50px;
    border-bottom: 1px solid #ddd;
    line-height: 50px;
    padding: 0 15px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
  }
  .select-pop-up .popup .ul .li span {
    height: 50px;
    line-height: 50px;
    margin-left: 15px;
    padding-left: 10px;
    border-left: 1px solid #818181;
  }
  .select-pop-up .popup .ul .li i {
    display: inline-block;
    height: 100%;
    line-height: 50px;
    height: 50px;
    padding-top: 7.5px;
  }
  .select-pop-up .popup .ul .li:hover {
    background: rgb(0, 0, 0, 0.1);
  }
  .confirm {
    margin-top: 14px;
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
  }
  .confirm-action {
    display: block;
    text-align: end;
  }
  .btn-nav-bar {
    border: none;
    background-color: rgba(7, 166, 224, 1);
    padding: 14px 28px;
    margin: 2rem 0 14px;
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    cursor: pointer;
    display: inline-block;
    border-radius: 5px;
    transition: 0.3s;
    text-transform: uppercase;
    color: white;
  }
  .cancel {
    background: #818181;
    margin-right: 10px;
  }

  @media screen and (max-width: ${breakpoint.xs}) {
    .btn-dialog {
      padding: 10px;
      font-size: 11px;
    }
    .space {
      width: 5px;
    }
    .confirm {
      font-size: 16px;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
