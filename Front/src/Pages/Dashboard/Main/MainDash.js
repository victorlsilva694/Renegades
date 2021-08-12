import './MainDash.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
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
                    <p className="Paragraph-Profile"> Bem vindo de volta <strong>Nome de usuario!</strong> Crie sua nova playlist agora clicando no botão abaixo! </p>
                    <Button id="Button-Paragraph" variant="primary">Criar nova playlist</Button>{' '}

                    <div className="youtube-brand">
                        <img className="brand-YT" src={youtube}></img>
                    </div>
                </div>

                <div className="box-subcontainer">
                    <div className="sub-container-1">
                        <div className="card">
                            <Container id="container">
                                <Row id="grid">
                                    <Col id="column-dashed">
                                        <h1 className="New-Playlist">Crie uma playlist</h1>
                                        <div className="AddNew">
                                            <h1 className="Plus">+</h1>
                                        </div>
                                    </Col>

                                    <Col id="column">
                                        <h1 className="New-Playlist">Crie uma playlist</h1>
                                        <div className="AddNew">
                                            <h1 className="Plus">+</h1>
                                        </div>
                                    </Col>

                                    <Col id="column">
                                        <h1 className="New-Playlist">Crie uma playlist</h1>
                                        <div className="AddNew">
                                            <h1 className="Plus">+</h1>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className="sub-container-2">

                        <div className="flex-containerProfile">
                            <div className="Containerimg-user"></div>
                            <h1 className="NameText">Nome <br /> <span className="LastName-txt">Sobrenome completo</span></h1>
                        </div>
                        <h1 className="Text-Status">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</h1>
                    </div>
                </div>
            </div>

            <div className="Favorites-Play">
                <h1 className="Title-play">Pesquisa spotify</h1>
                <iframe src="https://www.youtube.com/embed/hTWKbfoikeg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default HeaderDash;