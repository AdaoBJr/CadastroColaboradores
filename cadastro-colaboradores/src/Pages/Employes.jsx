import React, { Component } from 'react';

class Employes extends Component {
  render() {
    const employes = ['Adão Jr', 'Junior Henrique', 'Pedro Amaral']
    return (
      <div className="main">
          <div className="Employes">
            <h2>COLABORADORES CADASTRADOS</h2>
            {employes.map((employe) => (
              <div className="employesNames">
                <h3>{employe}</h3>
              </div>
            ))}
          <div className="buttonsEmployes">
              <button
              type="button"
              >
                Home
              </button>
              <button
              type="button"
              >
                Cadastro
              </button>
            </div>
          </div>
      </div>
    );
  }
}

export default Employes;