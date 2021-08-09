import './Register.css';
import { FloatingLabel, Form, Button, Col, Row } from 'react-bootstrap'

function Register() {
    return (
        <>
            <div className="login-form">
                <div className="brand">
                    <h1 className="renegades">Renegades</h1>
                </div>
                <br />
                <Form>
                    <Row className="g-2">
                        <Col md>
                            <Form.Control type="text" id="floating-label" placeholder="Nome" />
                        </Col>
                        <Col md>
                            <Form.Control type="text" id="floating-label" placeholder="Sobrenome" />
                        </Col>
                    </Row>
                    <br />
                    <Row className="g-2">
                        <Col md>
                            <Form.Control type="text" id="floating-label" placeholder="RG" />
                        </Col>
                        <Col md>
                            <Form.Control type="text" id="floating-label" placeholder="CPF" />
                        </Col>
                    </Row>
                    <br />
                    <Form.Control type="email" id="floating-label" placeholder="name@example.com" />
                    <br />
                    <Form.Control type="password" id="floating-label" placeholder="*****************" />
                    <br />
                    <Button id="btn-primary" variant="primary">Registrar</Button>
                    <div className="recovery">
                        <a className="link-recovery register" href="http://localhost:3000/login">
                            Já tenho uma conta
                        </a>
                    </div>
                </Form>
            </div>
        </>
    );
}


export default Register;