import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import employeesActions from  '../actions/employeesActions';

class Register extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       password: '',
       email: '',
    }
  }
  
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, password, email } = this.state;
    const { registerEmployee } = this.props;
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
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
              Senha:
              <br />
                <input
                  className="inputRegister"
                  name="password"
                  type="password"
                  placeholder="Adicione uma senha"
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
              </label>
            </form>
            <div className="buttonsRegister">
              <button
              type="button"
              onClick={ () => registerEmployee(name, password, email) }
              >
                Cadastrar
              </button>
              <button
              type="button"
              >
                <Link to="/employes">
                  Cadastrados
                </Link>
              </button>
              <button
                type='submit'>
                  <Link to="/">
                    Home
                  </Link>
              </button>
            </div>
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  registerEmployee: (name, password, email) => dispatch(
    employeesActions(name, password, email),
  ),
});

export default connect(null, mapDispatchToProps)(Register);