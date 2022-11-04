import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, iframe, h1, h2, h3, h4, h5, h6, p, a, img, small, strong, ol, ul, li, form, label, article, aside, figure, figcaption, footer, header, nav, section, button, textarea, option, input, select {
        margin: 0;
        padding: 0;
        border: none;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        background: none;
        color: none;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        width: 100vw;
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

    button{
        cursor: pointer;
    }

    :root {
        --font-family-Raleway: 'Raleway', sans-serif;
        --font-family-Flamenco: 'Flamenco', cursive;
        --font-family-Georama: 'Georama', sans-serif;
        --font-family-Nunito: 'Nunito', sans-serif;
        --font-family-Righteous: 'Righteous', cursive;;

        --color-primary-1: #4200FF;
        --color-primary-focus: #292868;
        --color-primary-darker: #191831;
        --color-secondary: #12C2ad;
        --color-secondary-darker: #003b4a;
        --color-grey-3: #73727E;
        --color-grey-2: #d0cedd;
        --color-grey-1: #fcfbfb;
        --color-grey-0: #ffffff;
        --linear-gradient-1: #2B2A70;
        --linear-gradient-2: #191932;
        --linear-gradient-3: #080808;
        --color-transparecy-1: rgba(0, 0, 0, 0.25);
        --color-transparecy-2: rgba(180, 198, 232, 0.3);
        --feedback-negative: #e50c0c;
        --feedback-sucess: #5Bf44d;

        --title-1: 62px;
        --title-2: 35px;
        --title-3: 25px;
        --title-4: 21px;
        --title-5: 18px;
        
        --paragraph-1: 16px;
        --paragraph-2: 14px;

        --author-1: 12px;

        --font-weigth-extrabold: 800;
        --font-weight-mixed: 500;
        --font-weight-regular: 400;
    }
`;
