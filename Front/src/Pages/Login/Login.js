import "./Login.css";
import { FloatingLabel, Form, Button } from "react-bootstrap";


function Login() {
  return (
    <div className="login-forms">
      <div className="brand">
        <h1 className="renegades">Renegades</h1>
      </div>
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label id="label-form">Endereço de e-mail</Form.Label>
          <Form.Control
            type="email"
            id="input-flex"
            placeholder="Digite seu e-mail"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label id="label-form">Senha</Form.Label>
          <Form.Control
            type="password"
            id="input-flex"
            placeholder="Digite sua senha"
          />
        </Form.Group>
        <div className="recoverys">
          <a className="link-recovery" href="http://localhost:1213/recovery">
            Esqueci minha senha
          </a>
          <a
            className="link-recovery register"
            href="http://localhost:1213/register"
          >
            Criar minha conta
          </a>
        </div>

        <Button id="btn-primary" variant="primary">
          Entrar
        </Button>
      </Form>
    </div>
  );
}

export default Login;
