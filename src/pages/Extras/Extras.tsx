import axios from "axios";
import { useState, useEffect } from "react";
import { HeaderMenu } from "../Home/HeaderMenu/HeaderMenu";
import { StyledExtraDiv, StyledExtraUl } from "./styledExtra";
import { iContents } from "./typeExtra";
import bookIcon from "../../assets/e-book.png";
import movieIcon from "../../assets/film-reel.png";
import serieIcon from "../../assets/cinema.png";
import documentaryIcon from "../../assets/documentary.png";
import allIcon from "../../assets/no-mundo-todo.png";

export const Extras = () => {
  const [contents, setContents] = useState<iContents[]>([]);
  const [contentSearch, setContentsSearch] = useState<string>("");
  const [filter, setfilter] = useState("Todos");

  const filterContent = contents.filter((content) =>
    filter === "Todos" ? true : filter === content.type
  );

  useEffect(() => {
    const recomendations = async () => {
      await axios
        .get("https://astroverso-json-api.herokuapp.com/extras")
        .then((response) => {
          setContents(response.data);
        })
        .catch(() => {
          console.log("Error");
        });
    };
    recomendations();
  }, []);

  return (
    <StyledExtraDiv>
      <HeaderMenu />
      <section>
        <span>Recomendações</span>
        <h1>Quer saber mais sobre Astronomia?</h1>
      </section>
      <div className="discoveryBox">
        <div>
          <button value="Livro" onClick={() => setfilter("Livro")}>
            <img src={bookIcon} alt="" />
          </button>
          <button value="Filme" onClick={() => setfilter("Filme")}>
            <img src={movieIcon} alt="" />
          </button>
          <button value="Série" onClick={() => setfilter("Série")}>
            <img src={serieIcon} alt="" />
          </button>
          <button
            value="Documentário"
            onClick={() => setfilter("Documentário")}
          >
            <img src={documentaryIcon} alt="" />
          </button>
          <button value="Todos" onClick={() => setfilter("Todos")}>
            <img src={allIcon} alt="" />
          </button>
        </div>
        <input
          type="text"
          placeholder="Pesquisar na lista..."
          onChange={(event) =>
            setContentsSearch(event.target.value.toLowerCase())
          }
        />
      </div>
      <StyledExtraUl>
        {filterContent
          .filter((content) => {
            if (contentSearch === "") {
              return content;
            } else if (
              content.title.toLowerCase().includes(contentSearch.toLowerCase())
            ) {
              return content;
            }
          })
          .map((content) => {
            return (
              <li key={content.id}>
                <div>
                  <img src={content.image} alt="" />
                </div>
                <div>
                  <div className="productContent">
                    <h2>{content.title}</h2>
                    <strong>{content.type}</strong>
                    <span>Por: {content.author}</span>
                    <p>{content.description}</p>
                  </div>
                  <div className="linkContent">
                    <a target="_blank" href={content.link} rel="noreferrer">
                      Abrir na loja
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
      </StyledExtraUl>
    </StyledExtraDiv>
  );
};
