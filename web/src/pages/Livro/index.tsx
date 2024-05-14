import { useParams } from 'react-router-dom';
import { useState } from "react";
import style from './Livro.module.scss';

function DadosLivro() {

  const { id } = useParams();

  const enderecoRequicao = `http://localhost:3000/livro/${ id }`;

  const [livros, setLivros] = useState([]);
  const [jaCarregouLivros, setJaCarregouLivros] = useState(false)

  fetch(enderecoRequicao)
    .then(resposta => {

      if(!resposta.ok) { return Promise.reject(new Error('Algo deu errado!')) }

      return resposta.json();
    })
    .then(dados => {
      setLivros(dados);
      setJaCarregouLivros(true);
    })
    .catch(error => { 
      setJaCarregouLivros(false);
    });

  return (
    <div>
      <header className={style.header}>
        <div>
          <center>
          <h2><strong>Livraria On Line - ( Dados do Livro )</strong></h2>
          </center>
        </div>
      </header>
      <br></br>
      {jaCarregouLivros && livros.map((livro: any) => (
        <div key={livro.id}>
          <h2>"Titulo: "{livro.titulo}</h2>
          <h2>"Sinopse: "{livro.sinopse}</h2>
          <h2>"Sumário: "{livro.sumario}</h2>
          <h2>"Preço: "{livro.preco}</h2>
          <h2>"Publicação: "{livro.publicacao}</h2>
          <h2>"Categoria: "{livro.idcategoria}</h2>
          <h2>"Autor: "{livro.idautor}</h2>
        </div> 
      ))}
      </div>
  );
}

export default DadosLivro;