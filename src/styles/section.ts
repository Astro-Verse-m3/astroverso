import styled from "styled-components";

export const StyledSection = styled.section`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(116.31deg, var(--linear-gradient-1) 0.49%, var(--linear-gradient-2) 52.83%, var(--linear-gradient-3) 100%);

    .header {
        width: 100%;
        display: flex;
        flex-direction: column;

        .header-gif {
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                width: 80%;
            }
        }
    }
`