import "./Register.css";
import { useState } from "react";
import { FloatingLabel, Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

function Register() {
  const [collorButton, setCollorButton] = useState("primary");
  const [nome, setNome] = useState("");
  const [lNome, setLNome] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function SendRegister() {
    const user = {
      name: nome,
      lastName: lNome,
      cpf: cpf,
      rg: rg,
      email: email,
      password: senha,
    };
    try {
      const results = await axios.post("http://localhost:1214/api/User", user);
      if (results.status == 201) {
        setCollorButton("success");
      }
    } catch (err) {
      console.error(err);
      setCollorButton("danger");
    }
  }

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
              <Form.Control
                type="text"
                id="floating-label"
                placeholder="Nome"
                onChange={({ ...e }) => {
                  setNome(e.target.value);
                }}
              />
            </Col>
            <Col md>
              <Form.Control
                type="text"
                id="floating-label"
                placeholder="Sobrenome"
                onChange={({ ...e }) => {
                  setLNome(e.target.value);
                }}
              />
            </Col>
          </Row>
          <br />
          <Row className="g-2">
            <Col md>
              <Form.Control
                type="text"
                id="floating-label"
                placeholder="RG"
                onChange={({ ...e }) => {
                  setRg(e.target.value);
                }}
              />
            </Col>
            <Col md>
              <Form.Control
                type="text"
                id="floating-label"
                placeholder="CPF"
                onChange={({ ...e }) => {
                  setCpf(e.target.value);
                }}
              />
            </Col>
          </Row>
          <br />
          <Form.Control
            type="email"
            id="floating-label"
            placeholder="name@example.com"
            onChange={({ ...e }) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <Form.Control
            type="password"
            id="floating-label"
            placeholder="*****************"
            onChange={({ ...e }) => {
              setSenha(e.target.value);
            }}
          />
          <br />
          <Button
            id="btn-primary"
            variant={collorButton}
            onClick={SendRegister}
          >
            Registrar
          </Button>
          <div className="recovery">
            <a
              className="link-recovery register"
              href="http://localhost:1213/login"
            >
              Já tenho uma conta
            </a>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Register;
