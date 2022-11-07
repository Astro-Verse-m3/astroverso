import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { StyledExtraUl } from "./styledExtra";
import { iContents } from "./typeExtra";

export const Extras = () => {
  const [contents, setContents] = useState<iContents[]>([]);
  const [contentSearch, setContentsSearch] = useState<string>("");

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
    <div>
      <Header/>
      <input
        type="text"
        placeholder="Digitar Pesquisa..."
        onChange={(event) =>
          setContentsSearch(event.target.value.toLowerCase())
        }
      />
      <StyledExtraUl>
        {contents.filter((content)=> {
          if(contentSearch === ""){
            return content
          }
          else if(content.title.toLowerCase().includes(contentSearch.toLowerCase())){
           return content
          }
        }).map((content) => {
          return (
            <li key={content.id}>
              <div>
                <img src={content.image}/>
              </div>
              <div>
                <h2>{content.title}</h2>
                <span>{content.author}</span>
                <p>{content.description}</p>         
              </div>
              <a target="_blank" href={content.link} rel="noreferrer">
                Abrir na loja
              </a>
            </li>
          );
        })}
      </StyledExtraUl>
    </div>
  );
};