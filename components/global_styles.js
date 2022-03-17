import css from "styled-jsx/css";
import { colors, fonts, breakpoint } from "../styles/theme";

export default css`
  html,
  body {
    background-image: radial-gradient(${colors.secondary} 1px, transparent 1px),
      radial-gradient(${colors.secondary_darken} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }
  .content {
    background-size: contain;
    width: ${breakpoint.md};
    margin: auto;
  }
  @media screen and (max-width: ${breakpoint.md}) {
    .content {
      width: 100%;
    }
  }
`;
