import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Employes extends Component {
  render() {
    // const employes = ['Adão Jr', 'Junior Henrique', 'Pedro Amaral']
    const { employees } = this.props;
    return (
      <div className="main">
          <div className="Employes">
            <h2>COLABORADORES CADASTRADOS</h2>
            {employees.map(({ name }) => (
              <div className="employesNames">
                <h3>{name}</h3>
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

const mapStateToProps = (state) => ({
  employees: state.register.employees,
});

export default connect(mapStateToProps)(Employes);