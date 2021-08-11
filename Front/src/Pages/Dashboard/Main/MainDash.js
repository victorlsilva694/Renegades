import './MainDash.css';
import { Button } from 'react-bootstrap';
import youtube from './Images/youtube.png'

function HeaderDash() {
    return (
        <div className="Container-Main">
            <div className="Session-One">
                <div className="Title-Session">
                    <ul className="Title-button">
                        <li className="Title-session">
                            <h1 className="Session-Name">Estatísticas gerais</h1>
                        </li>
                        <li className="Button-session">
                            <Button id="Button-Box" variant="primary">Meu Perfil</Button>{''}
                        </li>
                    </ul>
                </div>

                <div className="Profile-Analysis">
                    <h1 className="Title-container-Profile">Crie sua playlist agora!</h1>
                    <p className="Paragraph-Profile"> Bem vindo de volta <strong>Nome de usuario!</strong>Crie sua nova playlist agora clicando no botão abaixo! </p>
                    <Button id="Button-Paragraph" variant="primary">Criar nova playlist</Button>{' '}
                    
                    <div className="youtube-brand">
                        <img className="brand-YT" src={youtube}></img>
                    </div>
                </div>

                <div className="box-subcontainer">
                    <div className="sub-container-1">

                    </div>
                    <div className="sub-container-2">

                    </div>
                </div>
            </div>

            <div className="Favorites-Play">
                
            </div>
        </div>
    )
}



export default HeaderDash;