import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import notFound from '../images/Error.png'

class NotFound extends Component {
  render() {
    return (
      <section>
        <h1>Erro 404</h1>
        <img src={notFound} alt="ERROR" width="500px"/>
        <p>Epa! Parece que a página que você está procurando não existe.</p>
        <p>
          Caso tenha se perdido, não se preocupe! <Link to="/">Retorne ao início</Link>
        </p>
      </section>);
  }
}

export default NotFound;