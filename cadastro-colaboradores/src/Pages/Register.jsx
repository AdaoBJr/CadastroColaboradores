import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div className="main">
          <div className="RegisterPage">
            <h2>CADASTRO DE COLABORADORES</h2>
            <form>
              <label>
              Nome:
              <br />
                <input
                  className="inputRegister"
                  name="name"
                  type="text"
                  placeholder="Adicione o nome do colaborador"
                />
              </label>
              <br />
              <label>
              Senha:
              <br />
                <input
                  className="inputRegister"
                  name="senha"
                  type="text"
                  placeholder="Adicione uma senha"
                />
              </label>
              <br />
              <label>
              E-mail:
              <br />
                <input
                  className="inputRegister"
                  name="email"
                  type="e-mail"
                  placeholder="Adicione um e-mail válido"
                />
              </label>
            </form>
            <div className="buttonsRegister">
              <button
              type="button"
              >
                Cadastrar
              </button>
              <button
              type="button"
              >
                Cadastrados
              </button>
            </div>
          </div>
      </div>
    );
  }
}

export default Register;