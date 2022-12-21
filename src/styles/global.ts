import styled, { createGlobalStyle, css } from "styled-components";

export const fadeInAnimation = css`
  @keyframes appear {
    0% {
      transform: translateY(0%, 0%);
      opacity: 0;
    }

    100% {
      transform: translateY(0%, 1%);
      opacity: 1;
    }
  }
`;

export const fadeOutAnimation = css`
  @keyframes disappear {
    0% {
      opacity: 1;
      transform: translate(0%, 0%);
    }

    100% {
      opacity: 0;
      transform: translate(0%, 1%);
    }
  }
`;

/* Underline progress hover effect */
export const underlineHoverEffect = css`
  &:before,
  &:after {
    position: absolute;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }

  &:before {
    display: block;
    height: 1px;
    width: 0%;
    top: 85%;
    content: "";
    background-color: var(--color-grey-0);
  }

  &:after {
    max-width: 0%;
    overflow: hidden;
  }

  &:hover:before {
    opacity: 1;
    width: 100%;
  }

  &:hover:after {
    max-width: 100%;
  }
`;

export const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, iframe, h1, h2, h3, h4, h5, h6, p, a, img, small, strong, form, label, article, aside, figure, figcaption, footer, header, nav, section, button, textarea, option, input, select,ul,li {
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

    .mobile-dropmenu-trigger{
        color: var(--color-grey-2);
        font-size: var(--height-2);
        opacity: 0.8;

        & > svg {
            pointer-events: none;
        }
    }
    
    .dropmenu-content {
        width: calc(var(--height-1) * 4);
        margin-right: var(--gap-6);
        margin-top: var(--radius-1);
		
		padding: var(--gap-4);
        padding-top: var(--gap-5);
        
        background-color: var(--color-grey-2);
		border-radius: var(--radius-1);

        ${fadeInAnimation}
        ${fadeOutAnimation}

        
        animation-name:  "appear";
        animation-timing-function: ease-in;
        animation-duration: 0.8s;
    
        div.menu-item{
            padding-left: var(--gap-6);

            &>a, &>svg{
                color: var(--color-primary-darker);
            }

            &:hover a,
            &:hover svg {
                color: var(--color-primary-1);
            }

            .active{
                color: var(--color-primary-1);

                ${underlineHoverEffect}
            }

            
        }
        
	}
    
    .dropmenu-content.mobile {
		min-height: calc(var(--height-1) * 5.5);
	}
    
    .dropmenu-content.desktop{
        min-height: calc(var(--height-1) * 2.5);
        max-width: calc(var(--height-1) * 3.25);
    }

    .menu-item{
        width: var(--width-1);

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: var(--gap-4); 
        

        svg {
            font-size: var(--title-4);
            color: var(--color-grey-2);

        }

        &:hover a,
        &:hover svg {
            color: var(--color-grey-0);
        }     
        
        &:nth-child(3) a{
            color: var(--color-secondary);
        }
    }
   
    .dropmenu-separator{
        width:  calc(var(--height-1) * 3.55);
        height: 1px;
        margin: 14px;
        
        position:   absolute;
        inset: 0;
        top: 16%;
        
        background-color: var(--color-grey-3);
    }

    .dropmenu-separator.logged{
        margin: 10px;
        top: 66%;
    }

    .dropmenu-arrow{
        width: var(--gap-2);
        height: var(--gap-5);
        
        margin-top: -5px;
        margin-right: var(--gap-6);
        
        fill: var(--color-grey-2);

        @media screen and (min-width: 820px) {
            margin-top: -5px;
        }
    }

    .divider-vertical {
		width: 1px;
		height: var(--width-1);
	}

	.divider-horizontal {
		width: var(--width-1);
		height: 1px;
	}

    :root {
        --font-family-Raleway: 'Raleway', sans-serif;
        --font-family-Flamenco: 'Flamenco', cursive;
        --font-family-Georama: 'Georama', sans-serif;
        --font-family-Nunito: 'Nunito', sans-serif;
        --font-family-Righteous: 'Righteous', cursive;

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
        --feedback-negative: #fd5454;
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
        --title-6: 40px;
        --title-7: 30px;
        
        --paragraph-1: 16px;
        --paragraph-2: 14px;

        --author-1: 12px;

        /* Text Weight */
        --font-weigth-extrabold: 800;
        --font-weigth-bold: 600;
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
  height: var(--width-1);
  margin: 0 auto;

  padding: var(--gap-5) var(--gap-1);

  @media screen and (min-width: 540px) {
    /* max-width: calc(var(--width-2) / 2.52); */
    max-width: calc(var(--width-2) / 2.45);
    padding: var(--gap-5) 0;
  }

  @media screen and (min-width: 768px) {
    padding: var(--gap-5) var(--gap-1);
    max-width: var(--width-1);
  }

  @media screen and (min-width: 1024px) {
    max-width: calc(var(--width-2) / 1.25);
  }

  @media screen and (min-width: 1366px) {
    max-width: var(--width-2);
  }
`;

export const TooltipCSS = css`
  &:hover .tooltip-text {
    display: block;
    opacity: 1;
  }

  & > .tooltip-text {
    display: none;
    min-width: 120px;
    background-color: var(--color-grey-3);
    color: var(--color-grey-1);
    text-align: center;
    border-radius: 8px;
    padding: 4px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;

    &::after {
      content: attr(aria-label);
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 8px;
      border-style: solid;
      border-color: var(--color-grey-3) transparent transparent transparent;
    }
  }

  @media screen and (min-width: 1024px) {
    & > .tooltip-text {
      bottom: -100%;

      &::after {
        top: -60%;
        transform: rotate(180deg);
      }
    }
  }
`;
