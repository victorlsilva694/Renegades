import './SessionOne.css';
import Desktop from './img/desktop-pc.png';
import Musics from './img/itunes.png';
import Podcast from './img/podcast.png';
import Console from './img/console.png';

function SessionOne() {
    return (
        <div className="Body-Header">
            <h1 className="Text-Header">
                Crie agora a sua playlist de videos favorita!
            </h1>

            <div className="Buttons-Header">
                <div className="Buttons">
                    <button id="Btn-Explore">
                        Explorar
                    </button>
                </div>
                <div className="Buttons">
                    <button id="Btn-Login">
                        Entrar agora
                    </button>
                </div>
            </div>

            <div className="Mini-Cards">
                <div className="MiniCard-One">
                    <img className="Img-Cards" src={Desktop} />
                    <h1 className="Title-Card">Estudos</h1>
                </div>
                <div className="MiniCard-Two">
                    <img className="Img-Cards" src={Musics} />
                    <h1 className="Title-Card">Musicas</h1>
                </div>
                <div className="MiniCard-Three">
                    <img className="Img-Cards" src={Podcast} />
                    <h1 className="Title-Card">Podcast</h1>
                </div>
                <div className="MiniCard-Four">
                    <img className="Img-Cards" src={Console} />
                    <h1 className="Title-Card">Jogos</h1>
                </div>
            </div>
        </div>
    )
}

export default SessionOne;