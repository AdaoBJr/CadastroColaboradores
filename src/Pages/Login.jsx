import React from 'react';
import { Link } from 'react-router-dom';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="main">
                <section className="LoginPage">
                    <h2>LOGIN</h2>
                    <form action="GET">
                        <label htmlFor="email">Email: </label>
                        <br />
                        <input type="text" name="email" id="email" className="inputLogin"/>
                        <br />
                        <label htmlFor="senha">Senha: </label>
                        <br />
                        <input type="text" name="senha" id="senha" className="inputLogin"/>
                    </form>
                    <div>
                        <button type='submit'>Acessar</button>
                        <button
                            type='submit'>
                                <Link to="/">
                                    Home
                                </Link>
                        </button>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default Login;