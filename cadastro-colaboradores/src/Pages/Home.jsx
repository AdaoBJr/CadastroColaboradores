import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <section className="sectionHome">
                <div>
                    <h1>Cadastro de Colaboradores</h1>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Cadastro</Link>
                </div>
            </section>
        );
    }
}
 
export default Home;