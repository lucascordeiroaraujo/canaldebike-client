import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'icomoon';
    src:  url(${require('./fonts/icomoon/icomoon.eot?y2qkrb')});
    src:  url(${require('./fonts/icomoon/icomoon.eot?y2qkrb#iefix')}) format('embedded-opentype'),
      url(${require('./fonts/icomoon/icomoon.ttf?y2qkrb')}) format('truetype'),
      url(${require('./fonts/icomoon/icomoon.woff?y2qkrb')}) format('woff'),
      url(${require('./fonts/icomoon/icomoon.svg?y2qkrb#icomoon')}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-search:before {
    content: "\e900";
  }
`;
