import { useParams, useNavigate } from 'react-router-dom';
import { useState } from "react";
import style from './Livro.module.scss';

function DadosLivro() {

  const { id } = useParams();
  const navigate = useNavigate();

  const enderecoRequicao = 'http://localhost:3000/livro';

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
        <div >
          <h2>EXIBIR DADOS DO LIVRO AQUI</h2>
        </div>
    </div>
  );
}

export default DadosLivro;