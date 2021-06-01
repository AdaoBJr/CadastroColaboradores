import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
                <Link to="/">
                  Home
                </Link>
              </button>
              <button
              type="button"
              >
                <Link to="/register">
                  Cadastro
                </Link>
              </button>
            </div>
          </div>
      </div>
    );
  }
}

export default Employes;