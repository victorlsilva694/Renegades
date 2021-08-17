import './games.css';
import HeaderDash from '../Dashboard/Header/HeaderDash';
import search from './img/search.png';
import React from 'react';
import { Row, Col, Modal, Button, Form } from 'react-bootstrap'

function Games() {
    const nome = sessionStorage.getItem('nome');
    return (
        <>
            <div className="nav-bar">
                <h1 className="title-brand">Renegades</h1>

                <button id="AddNew-Video" onClick={change}>Adicionar Video</button>
            </div>
            <div className="Container-Main">
                <div className="Container-Start">
                    <iframe id="VideoInitial" width="100%" height="100%" src="https://www.youtube.com/embed/9jjukhp0i8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <Modal.Dialog id="Modal">
                <Modal.Header id="Header" closeButton>
                    <Modal.Title id="Title-modal">Inserir novo vídeo</Modal.Title>
                </Modal.Header>

                <Modal.Body id="body-Modal">
                    <Form.Control id="FormInput" type="text" placeholder="Digite a URL" />
                </Modal.Body>

                <Modal.Footer className="ModalFooter">
                    <Button onClick={ChangeVideos} variant="primary">Trocar Video</Button>
                </Modal.Footer>
            </Modal.Dialog>

        </>
    );
}

function change() {

    let VideoInitial = document.querySelector("#VideoInitial");
    let Modal = document.querySelector("#Modal");
    let btnclose = document.querySelector(".btn-close");

    if(Modal.style.display !== 'block'){
        Modal.style.display = 'block';
    }

    btnclose.addEventListener('click', () => {
        if(Modal.style.display !== 'none'){
            Modal.style.display = 'none';
        }
    });
}

function ChangeVideos(){
    
    let VideoInitial = document.querySelector("#VideoInitial");
    let FormInput = document.querySelector("#FormInput");
    let ContainerStart = document.querySelector("#Container-Start");

    if(VideoInitial.style.display !== 'none'){
        VideoInitial.style.display = 'none';

        
    }
}

export default Games;


