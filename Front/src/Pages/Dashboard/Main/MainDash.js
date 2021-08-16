import './MainDash.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import itunes from './Images/itunes.png';
import leftArrow from './Images/left-arrow.png';
import rightarrow from './Images/right-arrow.png';

function HeaderDash() {

    const nome = sessionStorage.getItem('nome');

    return (
        <div className="Container-Main">
            <div className="Session-One">
                <div className="Title-Session">
                    <ul className="Title-button">
                        <li className="Title-session">
                            <h1 className="Session-Name">Estatísticas gerais</h1>
                        </li>
                        <li className="Button-session">
                            <Button id="Button-Box" variant="primary">Meu Perfil</Button>
                        </li>
                    </ul>
                </div>
                <div className="Profile-Analysis">
                    <h1 className="Title-container-Profile">Crie sua playlist agora!</h1>
                    <p className="Paragraph-Profile"> Bem vindo de volta {nome} Crie sua nova playlist agora clicando no botão abaixo! </p>
                    <Button id="Button-Paragraph" variant="primary">Criar nova playlist</Button>{' '}

                    <div className="youtube-brand">
                        <img className="brand-YT" src={itunes}></img>
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
                            <h1 className="NameText">{nome} <br /> <span className="LastName-txt">Seja bem vindo novamente!</span></h1>
                        </div>
                        <h1 className="Text-Status">{nome}, Você pederá criar um status para seu perfil dentro da comunidade Renegades</h1>
                    </div>
                </div>
            </div>

            <div className="Favorites-Play">
                <h1 className="Title-play">Top 5 músicas em alta</h1>

                <div className="container-video">
                    <div className="video-1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KwM4yOwMls4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="container-video-2">
                    <div className="video-2">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5Eba0iXfiw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="container-video-3">
                    <div className="video-2">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2_xBCeBmaS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="container-video-4">
                    <div className="video-2">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/opl6FRB3ZXE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="container-video-5">
                    <div className="video-2">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8XRKJtBUev8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderDash;