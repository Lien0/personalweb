import { Col, Image } from "react-bootstrap";

export default function Presentacion({image}) {
  return (
    <div className="container p-2 mt-4">
      <div className="row justify-content-center">
        <h3 className="text-center">Sobre mi</h3>
        <Col md={3} xs={6}>
          <Image
            src={image}
            style={{ height: "375px", width: "225px" }}
            className="border border-2 border-white border-opacity-25"
            alt="foto"
            roundedCircle
          />
        </Col>
        <div className="col-md-3">
          <p>
            Hola a todos, me gustaria dar una breve presentacion de quien soy en
            esta pagina, mostrar un poco de lo que he hecho a lo largo de este
            ultimo año estudiando por mi cuenta y tambien a traves de las clases
            que he tomado.
          </p>
          <p>
            Mi nombre es Enrique Liera Chavez tengo 26 años de edad, estudie por
            dos años una carrera en fisico matematicas y actualmente tengo 1 año
            estudiando sistemas computacionales.
          </p>
          <p>
            La mayor parte de lo que sé hacer y he aprendido es por mi mismo,
            con cursos y con pequeños proyectos que he desarrollado.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}