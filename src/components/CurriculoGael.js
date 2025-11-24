import React from "react";
import Eemocionaisgael from "./Eemocionaisgael";

function CurriculoGael() {
  return (
    <div className="card">
      <h2>Currículo - Gael</h2>

      <h3>Apresentação</h3>
      <p>
        Estudo na Etec MCM na área de Informática e estou interessado em uma vaga de Tecnologia, como ainda curso o primeiro ano do ensino médio estou conhecendo as diferentes areas de TI, sendo assim estou disposto a me aventurar em qualquer uma delas, porém percebi que tenho facilidades para o back end.
      </p>

      <h3>Cursos</h3>
      <ul>
        <li>Informática para Internet</li>
        <li>Inglês Intermediário</li>
        <li>Projeto Voluntário: Pequenos Talentos</li>
      </ul>

      <Eemocionaisgael />
    </div>
  );
}

export default CurriculoGael;
