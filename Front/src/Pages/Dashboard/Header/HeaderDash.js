import './HeaderDash.css';
import { Form } from 'react-bootstrap'

function HeaderDash() {
    const nome = sessionStorage.getItem('nome');
    return (
        <div className="nav-bar">
            <h1 className="title-brand">Renegades</h1>

            <div className="list-itens">
                <ul className="list-links">
                    <li className="links">
                        <a className="itens" href="http://localhost:1213/DashBoard/Games">Jogos</a>
                    </li>
                    <li className="links">
                        <a className="itens" href="#">Músicas</a>
                    </li>
                    <li className="links">
                        <a className="itens" href="#">Podcast</a>
                    </li>
                    <li className="links">
                        <a className="itens" href="#">Estudo</a>
                    </li>
                </ul>
            </div>

            <div className="perfil-user">
                <h1 className="username">{nome}</h1>
                <div className="img-user"></div>
            </div>


        </div>
    );
}

export default HeaderDash;