import { injectGlobal, css } from 'styled-components'
import etsinTheme from './theme'

const Grid = css`
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .no-gutters {
    margin-right: 0;
    margin-left: 0;
  }
  .no-gutters > .col,
  .no-gutters > [class*='col-'] {
    padding-right: 0;
    padding-left: 0;
  }

  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12,
  .col,
  .col-auto,
  .col-sm-1,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm,
  .col-sm-auto,
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md,
  .col-md-auto,
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg,
  .col-lg-auto,
  .col-xl-1,
  .col-xl-2,
  .col-xl-3,
  .col-xl-4,
  .col-xl-5,
  .col-xl-6,
  .col-xl-7,
  .col-xl-8,
  .col-xl-9,
  .col-xl-10,
  .col-xl-11,
  .col-xl-12,
  .col-xl,
  .col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }

  .col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }

  .col-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }

  .col-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }

  .col-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }

  .col-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }

  .col-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }

  .col-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }

  .col-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }

  .col-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }

  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-first {
    order: -1;
  }

  .order-last {
    order: 13;
  }

  .order-0 {
    order: 0;
  }

  .order-1 {
    order: 1;
  }

  .order-2 {
    order: 2;
  }

  .order-3 {
    order: 3;
  }

  .order-4 {
    order: 4;
  }

  .order-5 {
    order: 5;
  }

  .order-6 {
    order: 6;
  }

  .order-7 {
    order: 7;
  }

  .order-8 {
    order: 8;
  }

  .order-9 {
    order: 9;
  }

  .order-10 {
    order: 10;
  }

  .order-11 {
    order: 11;
  }

  .order-12 {
    order: 12;
  }

  .offset-1 {
    margin-left: 8.33333%;
  }

  .offset-2 {
    margin-left: 16.66667%;
  }

  .offset-3 {
    margin-left: 25%;
  }

  .offset-4 {
    margin-left: 33.33333%;
  }

  .offset-5 {
    margin-left: 41.66667%;
  }

  .offset-6 {
    margin-left: 50%;
  }

  .offset-7 {
    margin-left: 58.33333%;
  }

  .offset-8 {
    margin-left: 66.66667%;
  }

  .offset-9 {
    margin-left: 75%;
  }

  .offset-10 {
    margin-left: 83.33333%;
  }

  .offset-11 {
    margin-left: 91.66667%;
  }

  @media (min-width: 576px) {
    .col-sm {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-sm-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-sm-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }
    .col-sm-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
    .col-sm-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-sm-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    .col-sm-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
    .col-sm-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-sm-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
    .col-sm-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
    .col-sm-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-sm-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }
    .col-sm-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }
    .col-sm-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .order-sm-first {
      order: -1;
    }
    .order-sm-last {
      order: 13;
    }
    .order-sm-0 {
      order: 0;
    }
    .order-sm-1 {
      order: 1;
    }
    .order-sm-2 {
      order: 2;
    }
    .order-sm-3 {
      order: 3;
    }
    .order-sm-4 {
      order: 4;
    }
    .order-sm-5 {
      order: 5;
    }
    .order-sm-6 {
      order: 6;
    }
    .order-sm-7 {
      order: 7;
    }
    .order-sm-8 {
      order: 8;
    }
    .order-sm-9 {
      order: 9;
    }
    .order-sm-10 {
      order: 10;
    }
    .order-sm-11 {
      order: 11;
    }
    .order-sm-12 {
      order: 12;
    }
    .offset-sm-0 {
      margin-left: 0;
    }
    .offset-sm-1 {
      margin-left: 8.33333%;
    }
    .offset-sm-2 {
      margin-left: 16.66667%;
    }
    .offset-sm-3 {
      margin-left: 25%;
    }
    .offset-sm-4 {
      margin-left: 33.33333%;
    }
    .offset-sm-5 {
      margin-left: 41.66667%;
    }
    .offset-sm-6 {
      margin-left: 50%;
    }
    .offset-sm-7 {
      margin-left: 58.33333%;
    }
    .offset-sm-8 {
      margin-left: 66.66667%;
    }
    .offset-sm-9 {
      margin-left: 75%;
    }
    .offset-sm-10 {
      margin-left: 83.33333%;
    }
    .offset-sm-11 {
      margin-left: 91.66667%;
    }
  }

  @media (min-width: 768px) {
    .col-md {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-md-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }
    .col-md-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
    .col-md-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-md-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    .col-md-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-md-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
    .col-md-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
    .col-md-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-md-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }
    .col-md-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }
    .col-md-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .order-md-first {
      order: -1;
    }
    .order-md-last {
      order: 13;
    }
    .order-md-0 {
      order: 0;
    }
    .order-md-1 {
      order: 1;
    }
    .order-md-2 {
      order: 2;
    }
    .order-md-3 {
      order: 3;
    }
    .order-md-4 {
      order: 4;
    }
    .order-md-5 {
      order: 5;
    }
    .order-md-6 {
      order: 6;
    }
    .order-md-7 {
      order: 7;
    }
    .order-md-8 {
      order: 8;
    }
    .order-md-9 {
      order: 9;
    }
    .order-md-10 {
      order: 10;
    }
    .order-md-11 {
      order: 11;
    }
    .order-md-12 {
      order: 12;
    }
    .offset-md-0 {
      margin-left: 0;
    }
    .offset-md-1 {
      margin-left: 8.33333%;
    }
    .offset-md-2 {
      margin-left: 16.66667%;
    }
    .offset-md-3 {
      margin-left: 25%;
    }
    .offset-md-4 {
      margin-left: 33.33333%;
    }
    .offset-md-5 {
      margin-left: 41.66667%;
    }
    .offset-md-6 {
      margin-left: 50%;
    }
    .offset-md-7 {
      margin-left: 58.33333%;
    }
    .offset-md-8 {
      margin-left: 66.66667%;
    }
    .offset-md-9 {
      margin-left: 75%;
    }
    .offset-md-10 {
      margin-left: 83.33333%;
    }
    .offset-md-11 {
      margin-left: 91.66667%;
    }
  }

  @media (min-width: 992px) {
    .col-lg {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-lg-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-lg-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }
    .col-lg-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
    .col-lg-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-lg-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    .col-lg-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
    .col-lg-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-lg-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
    .col-lg-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
    .col-lg-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-lg-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }
    .col-lg-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }
    .col-lg-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .order-lg-first {
      order: -1;
    }
    .order-lg-last {
      order: 13;
    }
    .order-lg-0 {
      order: 0;
    }
    .order-lg-1 {
      order: 1;
    }
    .order-lg-2 {
      order: 2;
    }
    .order-lg-3 {
      order: 3;
    }
    .order-lg-4 {
      order: 4;
    }
    .order-lg-5 {
      order: 5;
    }
    .order-lg-6 {
      order: 6;
    }
    .order-lg-7 {
      order: 7;
    }
    .order-lg-8 {
      order: 8;
    }
    .order-lg-9 {
      order: 9;
    }
    .order-lg-10 {
      order: 10;
    }
    .order-lg-11 {
      order: 11;
    }
    .order-lg-12 {
      order: 12;
    }
    .offset-lg-0 {
      margin-left: 0;
    }
    .offset-lg-1 {
      margin-left: 8.33333%;
    }
    .offset-lg-2 {
      margin-left: 16.66667%;
    }
    .offset-lg-3 {
      margin-left: 25%;
    }
    .offset-lg-4 {
      margin-left: 33.33333%;
    }
    .offset-lg-5 {
      margin-left: 41.66667%;
    }
    .offset-lg-6 {
      margin-left: 50%;
    }
    .offset-lg-7 {
      margin-left: 58.33333%;
    }
    .offset-lg-8 {
      margin-left: 66.66667%;
    }
    .offset-lg-9 {
      margin-left: 75%;
    }
    .offset-lg-10 {
      margin-left: 83.33333%;
    }
    .offset-lg-11 {
      margin-left: 91.66667%;
    }
  }

  @media (min-width: 1200px) {
    .col-xl {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-xl-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-xl-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }
    .col-xl-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
    .col-xl-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-xl-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    .col-xl-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
    .col-xl-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-xl-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
    .col-xl-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
    .col-xl-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-xl-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }
    .col-xl-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }
    .col-xl-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .order-xl-first {
      order: -1;
    }
    .order-xl-last {
      order: 13;
    }
    .order-xl-0 {
      order: 0;
    }
    .order-xl-1 {
      order: 1;
    }
    .order-xl-2 {
      order: 2;
    }
    .order-xl-3 {
      order: 3;
    }
    .order-xl-4 {
      order: 4;
    }
    .order-xl-5 {
      order: 5;
    }
    .order-xl-6 {
      order: 6;
    }
    .order-xl-7 {
      order: 7;
    }
    .order-xl-8 {
      order: 8;
    }
    .order-xl-9 {
      order: 9;
    }
    .order-xl-10 {
      order: 10;
    }
    .order-xl-11 {
      order: 11;
    }
    .order-xl-12 {
      order: 12;
    }
    .offset-xl-0 {
      margin-left: 0;
    }
    .offset-xl-1 {
      margin-left: 8.33333%;
    }
    .offset-xl-2 {
      margin-left: 16.66667%;
    }
    .offset-xl-3 {
      margin-left: 25%;
    }
    .offset-xl-4 {
      margin-left: 33.33333%;
    }
    .offset-xl-5 {
      margin-left: 41.66667%;
    }
    .offset-xl-6 {
      margin-left: 50%;
    }
    .offset-xl-7 {
      margin-left: 58.33333%;
    }
    .offset-xl-8 {
      margin-left: 66.66667%;
    }
    .offset-xl-9 {
      margin-left: 75%;
    }
    .offset-xl-10 {
      margin-left: 83.33333%;
    }
    .offset-xl-11 {
      margin-left: 91.66667%;
    }
  }
`

export default injectGlobal`
  /* reset */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* GRID */
  ${Grid}

  /* ETSIN */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
  }

  @-ms-viewport {
    width: device-width;
  }

  body {
    margin: 0;
    font-family: 'Lato', Helvetica, Arial, sans-serif;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
    color: #464646;
    text-align: left;
    background-color: #fff;
  }

  .app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .content {
    flex: 1;
  }
  .content > div {
    opacity: 0;
  }

  /* --- BOOTSTRAP --- */

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  /* --- Other --- */

  .app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  body:not(.user-is-tabbing) :focus,
  body:not(.user-is-tabbing) input:focus,
  body:not(.user-is-tabbing) select:focus,
  body:not(.user-is-tabbing) textarea:focus {
    outline: none;
  }
  body:not(.user-is-tabbing) .btn:focus {
    box-shadow: none;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-left: 0px;
    margin-right: 0px;
    @media screen and (min-width: ${etsinTheme.breakpoints.sm}) {
      margin-left: -15px;
      margin-right: -15px;
    }
  }

  .content {
    flex: 1;
    display: flex;
    background-color: inherit;
    & > div {
      width: 100%;
      opacity: unset;
    }
  }

  .regular-row {
    padding: 40px 0;
  }
  .nopadding {
    padding: 0;
  }
  .error {
    color: white;
    text-align: center;
    background-color: ${etsinTheme.color.error};
    padding: 20px 0;
  }

  .skip-to-content {
    position: absolute;
    left: 0;
    top: 0;
    max-width: 1px;
    max-height: 0px;
    margin-left: 0;
    text-align: center;
    overflow: hidden;
    padding: 0;
    list-style: outside none;
    background-color: transparent;
    &:focus {
      padding: 0.5em 1em;
      max-width: 200px;
      max-height: 50px;
    }
  }

  .light-border {
    border: 2px solid ${etsinTheme.color.lightgray};
  }

  .screen-reader-only {
    position: absolute;
    height: 1px;
    width: 1px;
    clip: rect(1px 1px 1px 1px); // IE 6 and 7
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
    -webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
    overflow: hidden !important;
  }

  .text-center {
    text-align: center !important;
  }

  table {
    border-collapse: collapse;
  }


  /* ---- FONTS ---- */

  body {
    font-family: 'Lato', Helvetica, Arial, sans-serif;
    font-size: 1em;
    color: ${etsinTheme.color.dark};
    font-size: 0.9em;
    @media screen and (min-width: ${etsinTheme.breakpoints.md}) {
      font-size: 1em;
    }
  }

  input,
  button.btn,
  button,
  select,
  textarea,
  optgroup,
  option {
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
  }

  h1 {
    font-size: 2em;
    line-height: 1.4em;
    font-weight: 700;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 1.4em;
    line-height: 1.4 * 1.4em;
    font-weight: 700;
  }

  h3 {
    font-size: 1.2em;
    line-height: 1.5 * 1.2em;
    font-weight: 700;
  }

  h4 {
    font-size: 1.1em;
    line-height: 1.5 * 1.1em;
    font-weight: 700;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    line-height: 1.5 * 1em;
  }

  .small-text {
    font-size: 0.875em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
  }
`
