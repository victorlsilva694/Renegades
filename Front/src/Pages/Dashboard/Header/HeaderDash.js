import './HeaderDash.css';
import { Form } from 'react-bootstrap'

function HeaderDash() {
    return (
        <div className="nav-bar">
            <h1 className="title-brand">Renegades</h1>

            <div className="list-itens">
                <ul className="list-links">
                    <li className="links">
                        <a className="itens" href="#">Jogos</a>
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
                <h1 className="username">Nome Usuario</h1>
                <div className="img-user"></div>
            </div>


        </div>
    );
}

export default HeaderDash;