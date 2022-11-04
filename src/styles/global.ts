import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, iframe, h1, h2, h3, h4, h5, h6, p, a, img, small, strong, form, label, article, aside, figure, figcaption, footer, header, nav, section, button, textarea, option, input, select {
        margin: 0;
        padding: 0;

        font-size: 100%;
        color: none;
        vertical-align: baseline;
        text-decoration: none;
        
        background: none;
        border: none;
        
         /* Box Model */
        box-sizing: border-box;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, nav, section {
        display: block;
    }

    body {
        width: 100vw;
        overflow-x: hidden;
    }

    ul,li {
        list-style: none;
    }

    input, select{
        outline: none;

        background: transparent;
    }


    button{
        cursor: pointer;

        display: inline-flex;
	    align-items: center;
	    justify-content: center;

        border: none;
        background: transparent;

        transition: 0.3s;
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

        /* Size Elements */
        --height-1: 48px;
	    --height-2: 38px;
	    --height-3: 32px;
        --height-4: 2.5rem;

        --width-1: 100%;
	    --width-2: 1200px;
        --width-3: 90%;

        /* Text Sizes */
        --title-1: 62px;
        --title-2: 35px;
        --title-3: 25px;
        --title-4: 21px;
        --title-5: 18px;
        
        --paragraph-1: 16px;
        --paragraph-2: 14px;

        --author-1: 12px;

        /* Text Weight */
        --font-weigth-extrabold: 800;
        --font-weight-mixed: 500;
        --font-weight-regular: 400;

        /* Margins */
        --gap-1: 32px;
        --gap-2: 28px;
        --gap-3: 24px;
        --gap-4: 20px;
        --gap-5: 16px;
        --gap-6: 8px;

        /* Border Radius */
        --radius-1: 4px;
        --radius-2: 8px;
    }

    /* SCROLL BAR  */
    ::-webkit-scrollbar {
        width: var(--radius-1);
        height: var(--radius-1);
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--color-primary-darker);
        border-radius: var(--radius-1);
    }

    ::-webkit-scrollbar-track {
        background-color: var(--color-transparecy);
        border-radius: var(--radius-1);
    }
`;

export const StyledContainer = styled.div`
	width: var(--width-1);
	max-width: var(--width-1);
	margin: 0 auto;
	padding: var(--gap-5) var(--gap-3);
`;
