import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alerta from "./Alert";

const Formulario = () => {
  const [user, setUser] = useState({
    Nombre: "",
    Email: "",
    Contraseña: "",
    RepetirContraseña: "",
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

  const validarContraseñas = () => {
    if (user.Contraseña !== user.RepetirContraseña) {
      setMensajeDeAdvertencia("Las contraseñas no son iguales");
      setEstilo("danger");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const datosValidos =
      validarDatos() && validarEmail() && validarContraseñas();

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
        {["Nombre", "Email", "Contraseña", "RepetirContraseña"].map((campo) => (
          <Form.Group
            key={campo}
            className="mb-3"
            controlId={`formBasic${campo}`}
          >
            <Form.Control
              type={campo.includes("Contraseña") ? "password" : "text"}
              placeholder={campo === "Email" ? "tuemail@ejemplo.com" : campo}
              name={campo}
              onChange={handleChange}
              value={user[campo]}
            />
          </Form.Group>
        ))}

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
      <Alerta color={estilo} text={mensajeDeAdvertencia} />
    </>
  );
};

export default Formulario;
