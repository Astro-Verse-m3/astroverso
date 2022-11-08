import { Content } from "@radix-ui/react-dropdown-menu";
import axios from "axios";
import { useState, useEffect } from "react";
import { HeaderMenu } from "../Home/HeaderMenu/HeaderMenu";
import { StyledExtraDiv, StyledExtraUl } from "./styledExtra";
import { iContents } from "./typeExtra";

export const Extras = () => {
  const [contents, setContents] = useState<iContents[]>([]);
  const [contentSearch, setContentsSearch] = useState<string>("");
  const [filterButton, setfilterButton] = useState(contents);

  const handleButtons = (e: React.ChangeEvent<any>): void => {
    let category = e.target.value;

    if (category === 'Todos'){
      setfilterButton(contents)
    }
    else if(category === 'Livros'){
      const filtered = contents.filter(content=> content.type==='Livro')
      setfilterButton(filtered);
    }
    else if (category === 'Filmes'){
      const filtered = contents.filter(content=> content.type==='Filme')
      setfilterButton(filtered);
    }
  }

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
          <button value="Livros" onClick={handleButtons}>Livros</button>
          <button value="Filmes" onClick={handleButtons}>Filmes</button>
          <button value="Todos" onClick={handleButtons}>Todos</button>
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
        {filterButton
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
                  <img src={content.image} />
                </div>
                <div>
                  <div className="productContent">
                    <h2>{content.title}</h2>
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
