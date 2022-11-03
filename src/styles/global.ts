import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video, button, textarea, option, input, select {
        margin: 0;
        padding: 0;
        border: none;
        font-size: 100%;
        font-family: 'Inter', sans-serif;
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
        line-height: 1;
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
        --color-primary-1: #4200FF;
        --color-primary-focus: #292868;
        --color-primary-darker: #191831;
        --color-secondary: #12C2ad;
        --color-secondary-darker: #003b4a;
        --color-grey-3: #73727E;
        --color-grey-2: #d0cedd;
        --color-grey-1: #fcfbfb;
        --color-grey-0: #ffffff;
        --color-transparecy: rgba(0, 0, 0, 0.25);
        --feedback-negative: #e50c0c;
        --feedback-sucess: #5Bf44d;

        --title-1: 62px;
        --title-2: 25px;
        --title-3: 22px;
        --title-3: 18px;
        
        --paragraph-1: 16px;
        --paragraph-2: 14px;

        --author-1: 12px;

        --extra-bold: 800;
        --mixed: 500;
        --regular: 400;
    }
`;
