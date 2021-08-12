import "./Login.css";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [collorButton, setCollorButton] = useState("primary");
  const history = useHistory()

  async function Auth() {
    const resposta = await axios.post("http://localhost:1214/api/Login", {
      email: email,
    });
    const data = await resposta.data[0];
    if (data === undefined) {
      alert("Email errado");
      setCollorButton("danger");
    } else if (data !== undefined) {
      Verification(data);
    }
  }

  function Verification(info) {
    const nome = `${info.name} ${info.lastname}`
   
    if (senha != info.password) {
      alert("Senha errada");
      setCollorButton("danger");
    } else if (email == info.email && senha == info.password) {
      alert("Login feito");
      setCollorButton("success");
      sessionStorage.setItem('nome',nome)
      history.push("/DashBoard")
    
    }
  }

  return (
    <div className="login-forms">
      <div className="brand">
        <h1 className="renegades">Renegades</h1>
      </div>
      <br />
      <Form onSubmit={""}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label id="label-form">Endereço de e-mail</Form.Label>
          <Form.Control
            type="email"
            id="input-flex"
            placeholder="Digite seu e-mail"
            onChange={({ ...e }) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label id="label-form">Senha</Form.Label>
          <Form.Control
            type="password"
            id="input-flex"
            placeholder="Digite sua senha"
            onChange={({ ...e }) => {
              setSenha(e.target.value);
            }}
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
        <Button id="btn-primary" variant={collorButton} onClick={Auth}>
          Entrar
        </Button>
      </Form>
    </div>
  );
}

export default Login;
