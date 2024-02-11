// libs
import { createGlobalStyle } from 'styled-components';

// fonts
import MontserratRegular from './../assets/fonts/Montserrat-Regular.ttf';
import MontserratLightItalic from './../assets/fonts/Montserrat-LightItalic.ttf';
import MontserratLight from './../assets/fonts/Montserrat-Light.ttf';
import MontserratSemiBold from './../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from './../assets/fonts/Montserrat-Bold.ttf';
import RobotoRegular from './../assets/fonts/Roboto-Regular.ttf';
import RobotoLight from './../assets/fonts/Roboto-Light.ttf';
import RobotoBold from './../assets/fonts/Roboto-Bold.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: Montserrat Regular;
    src: url(${MontserratRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Montserrat LightItalic;
    src: url(${MontserratLightItalic}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Montserrat Light;
    src: url(${MontserratLight}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Montserrat SemiBold;
    src: url(${MontserratSemiBold}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Montserrat Bold;
    src: url(${MontserratBold}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto Regular;
    src: url(${RobotoRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto Light;
    src: url(${RobotoLight}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto Bold;
    src: url(${RobotoBold}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    outline: none;
    list-style: none;
  }

  body {
    font-weight: normal;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
