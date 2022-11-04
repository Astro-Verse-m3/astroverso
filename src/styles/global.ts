import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


    html, body, div, span, iframe, h1, h2, h3, h4, h5, h6, p, a, img, small, strong, form, label, article, aside, figure, figcaption, footer, header, nav, section, button {
        margin: 0;
        padding: 0;

        font-size: 100%;
        font-family: 'Inter', sans-serif;
        color: none;
        vertical-align: baseline;

        background: none;
        border: none;

        text-decoration: none;

        /* Box Model */
        box-sizing: border-box;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, figcaption, figure, 
    footer, header, nav, section {
        display: block;
    }

    body {
        width: 100vw;
        height: 100vh;

        overflow-x: hidden;
    }

    section, aside, form, div{
        width: var(--width-1);

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    header{
        width: var(--width-1);
        height: calc(var(--height-3) * 2);
        
        color: var(--color-grey-0);
        background: var(--color-transparecy);
        /* filter: blur(5px);
        backdrop-filter: blur(8px); */
    }

    ul {
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

    img{
        max-width: var(--width-1);
	    height: var(--width-1);
    }

    :root {
        /* Colors */
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
        --background-components: linear-gradient(116.31deg, #2B2A70 0.49%, #191932 52.83%, #080808 100%);

        /* Size Elements */
        --height-1: 48px;
	    --height-2: 38px;
	    --height-3: 32px;

        --width-1: 100%;
	    --width-2: 1200px;

        /* Text Sizes */
        --title-1: 62px;
        --title-2: 25px;
        --title-3: 22px;
        --title-3: 18px;
        
        --paragraph-1: 16px;
        --paragraph-2: 14px;

        --author-1: 12px;

        /* Text Weight */
        --extra-bold: 800;
        --mixed: 500;
        --regular: 400;

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

export const StyledContainer = styled.div``;
