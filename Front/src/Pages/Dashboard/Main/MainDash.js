import './MainDash.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import itunes from './Images/itunes.png';
import leftArrow from './Images/left-arrow.png';
import rightarrow from './Images/right-arrow.png'

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
                            <Button id="Button-Box" variant="primary">Meu Perfil</Button>{''}
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
                <h1 className="Title-play">Vídeos em alta</h1>

                <div className="container-video">

                    <div className="Arrow-1">
                        <img className="img-Arrow" onClick={ChangePlayer} id="backplay-one" src={leftArrow} />
                    </div>
                    <div className="Arrow-2">
                        <img className="img-Arrow" id="backplay-two" src={rightarrow} />
                    </div>

                    <div className="video-1">
                        <iframe id="play-One" src="https://www.youtube.com/embed/6HsyjH6VmAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="container-video-2">
                    <div className="Arrow-1">
                        <img className="img-Arrow" src={leftArrow} />
                    </div>
                    <div className="Arrow-2">
                        <img className="img-Arrow" src={rightarrow} />
                    </div>
                    <div className="video-2">
                        <iframe id="play-Two" src="https://www.youtube.com/embed/i5MH9m6x3O0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

const backplayone = {
    "VideoOne": 1,
    "VideoTwo": 2,
    "VideoThree": 3,
    "VideoFour": 4,
    "VideoFive": 5
}

let backplay_One = document.querySelector("#backplay-one");
let playOne = document.querySelector("#play-One");
let k = 1
function ChangePlayer() {
    if (k == backplayone.VideoOne) {
        console.log(k + ' = ' + backplayone.VideoOne)
        k += 1
    }
    else if (k == backplayone.VideoTwo) {
        console.log(k + ' = ' + backplayone.VideoTwo)
        k += 1
    }
    else if (k == backplayone.VideoThree) {
        console.log(k + ' = ' + backplayone.VideoThree)
        k += 1
    }
    else if (k == backplayone.VideoFour) {
        console.log(k + ' = ' + backplayone.VideoFour)
        k += 1
    }
    else if (k == backplayone.VideoFive) {
        console.log(k + ' = ' + backplayone.VideoFive)
        k += 1
    }
}


export default HeaderDash;