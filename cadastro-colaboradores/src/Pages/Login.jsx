import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <section>
                <form action="GET">
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" />
                    <label htmlFor="senha">Senha: </label>
                    <input type="text" name="senha" id="senha" />
                    <button type='submit'>Acessar</button>
                </form>
            </section>
        );
    }
}
 
export default Login;