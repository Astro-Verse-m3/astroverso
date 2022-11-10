import styled from "styled-components";

export const StyledExtraDiv = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    116.31deg,
    #2b2a70 0.49%,
    #191932 52.83%,
    #080808 100%
  );
  background-size: auto 100%;
  background-repeat: no-repeat;

  section {
    display: flex;
    flex-direction: column;
    font-family: var(--font-family-Raleway);
    max-width: 1165px;
    color: var(--color-grey-2);
    font-size: var(--title-5);
    margin: 0 auto;
    margin-bottom: 30px;
    margin-top: 30px;
  }

  section h1 {
    font-family: var(--font-family-Raleway);
    font-size: var(--title-3);
    margin-top: 10px;
  }

  .discoveryBox {
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
    flex-wrap: nowrap;
    justify-content: space-between;
    flex-direction: row;
  }

  .discoveryBox div {
    border: 1.7px solid var(--color-grey-2);
    border-radius: 50px;
    display: flex;
  }

  .discoveryBox div button {
    font-family: var(--font-family-Raleway);
    color: var(--color-grey-2);
    width: 55px;
    border-radius: 50px;
    height: 35px;
    flex-wrap: nowrap;
  }

  .discoveryBox div button.active {
    background-color: #003b4a;
  }

  input {
    font-family: var(--font-family-Raleway);
    font-size: 18px;
    background-color: transparent;
    border-radius: 50px;
    border: 1.7px solid var(--color-grey-2);
    width: 250px;
    height: 39px;
    margin-left: 20px;
    padding-left: 10px;
    color: var(--color-grey-2);
  }

  @media (max-width: 764px) {
    flex-direction: column;
    section {
      margin: 0px;
      margin-bottom: 30px;
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    section h1 {
      width: 223px;
    }

    .discoveryBox {
      margin-top: 10px;
      margin-left: 0px;
      margin-right: 0px;
      margin-bottom: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .discoveryBox div {
      width: 260px;
      height: 41px;
    }

    .discoveryBox div button {
      width: 52px;
    }

    input {
      width: 260px;
      height: 41px;
      margin-top: 10px;
      margin-left: 0px;
      margin-right: 0px;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 765px) and (max-width: 1166px) {
    section {
      margin: 0 auto;
      max-width: 762px;
      margin-bottom: 30px;
      margin-top: 30px;      
      display: flex;
      flex-direction: column;
    }
}

@media (width: 1166px) {
    section {
      margin: 0 auto;
      max-width: 1200px;
      margin-bottom: 30px;
      margin-top: 30px;
      display: flex;
      flex-direction: column;
    }
}
`;

export const StyledExtraUl = styled.ul`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0px;
  gap: 40px;

  li {
    width: 100%;
    font-family: var(--font-family-Raleway);
    border: solid var(--color-grey-1) 1px;
    border-radius: 5px;
    max-width: 360px;
    height: 340px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    gap: 10px;
    color: var(--color-grey-1);
  }

  li .productContent {
    height: 210px;
    width: 200px;
    display: flex;
    flex-direction: column;
  }

  li h2 {
    color: var(--color-grey-1);
    margin-bottom: 15px;
    font-size: 15px;
  }

  li strong {
    font-size: 13px;
    margin-bottom: 15px;
    color: var(--color-grey-1);
  }

  li span {
    width: 215px;
    font-size: 14px;
  }

  li p {
    height: 115px;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 12px;
    color: var(--color-grey-1);
  }

  li .linkContent {
    margin-top: 35px;
  }

  li a {
    font-family: var(--font-family-Raleway);
    border-radius: 50px;
    border: 1.7px solid var(--color-grey-2);
    width: 140px;
    height: 40px;
    margin-left: 80px;
    color: #003b4a;
    background-color: var(--color-grey-2);

    padding: 10px;
    :hover {
      color: var(--color-grey-2);
      transition: 1s;
      background-color: #003b4a;
    }
  }

  li img {
    width: 130px;
    border-radius: 5px;
    height: 200px;
    border: none;
    border-style: none;
    border-color: transparent;
    object-fit: cover;
  }

  @media (max-width: 370px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    li {
      width: 80%;
      height: 480px;
      display: flex;
      flex-direction: column;
      padding-top: 22px;
    }


    li .productContent {
      height: 192px;
    }

    li h2 {
      font-size: 13px;
    }

    li .linkContent {
      margin-left: 0px;
      margin-top: 10px;
    }

    li strong {
      font-size: 13px;
    }

    li p{
      font-size: 11px;
      margin-bottom: 0px;
    }

    li a {
      padding: 6px;
      margin-left: 50px;
    }
  }
`;
