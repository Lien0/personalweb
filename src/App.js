import { Col } from "react-bootstrap";
import image from "./assets/perfil_photo.png";
import Presentacion from "./componentes/presentacion";
import Habilidades from "./componentes/habilidades";
import Proyectos from "./componentes/proyectos";
import { useState } from "react";
import Abilities from "./componentes/ablities";
import Presentation from "./componentes/presentation";
import Proyects from "./componentes/proyects";

export default function App() {
  const [language, setLanguage] = useState(true);

  return (
    <>
      <div className="container shadow-lg bg-dark text-white rounded p-2">
        {language ? (
          <Presentacion image={image} />
        ) : (
          <Presentation image={image} />
        )}
        {language ? <Habilidades /> : <Abilities />}
        {language ? <Proyectos /> : <Proyects />}
      </div>
      <Col md={2} style={{ paddingInlineStart: "95px" }}>
        <select
          className="form-select form-select-sm bg-dark text-white rounded"
          onChange={(e) => {
            if (e.target.value === "spanish") {
              setLanguage(true);
            } else if (e.target.value === "english") {
              setLanguage(false);
            }
          }}
        >
          <option value="spanish">{language ? "Español" : "Spanish"}</option>
          <option value="english">{language ? "Ingles" : "English"}</option>
        </select>
      </Col>
    </>
  );
}
