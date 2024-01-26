import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alerta from "./Alert";

const Formulario = () => {
    const [user, setUser] = useState({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: ""
    });
  const [mensajeDeAdvertencia, setMensajeDeAdvertencia] = useState("");
  const [estilo, setEstilo] = useState("");

  const validarDatos = () => {
    if (Object.values(user).some((value) => value === "")) {
      setMensajeDeAdvertencia("Todos los campos son obligatorios");
      setEstilo("warning");
      return false;
    }
    return true;
  };

  const validarEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(user.Email);

    if (!isValid) {
      setMensajeDeAdvertencia("Introduce un mail válido");
      setEstilo("danger");
      return false;
    }
    return true;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const datosValidos =
      validarDatos() && validarEmail();

    if (datosValidos) {
      setEstilo("success");
      setMensajeDeAdvertencia("Registro realizado con éxito");
    } else {
      setEstilo("danger");
    }
  };

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <>
      <Form className="formulario" onSubmit={handleSubmit}>
        {["Nombre", "Email", "Edad", "Cargo", "Telefono"].map((campo) => (
          <Form.Group
            key={campo}
            className="mb-3"
            controlId={`formBasic${campo}`}
          >
            <Form.Control
              type= "text"
              placeholder={campo + " del colaborador"}
              name={campo.toLowerCase()}
              onChange={handleChange}
              value={user[campo]}
            />
          </Form.Group>
        ))}

        <Button variant="primary" type="submit">
          Agregar colaborador
        </Button>
      </Form>
      <Alerta color={estilo} text={mensajeDeAdvertencia} />
    </>
  );
};

export default Formulario;
