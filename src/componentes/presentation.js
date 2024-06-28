import { Col, Image } from "react-bootstrap";

export default function Presentation({ image }) {
  return (
    <div className="container p-2 mt-4">
      <div className="row justify-content-center">
        <h3 className="text-center">About me</h3>
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
            Hello there, I have a little presentation for you about me, in this
            page I will show you some of the proyects that I do only the last
            year for my own, and also with help of some online courses.
          </p>
          <p>
            My name is Enrique Liera Chavez I'm 26 years old, I was studying for
            2 years a career of Physics and Maths, now I´m studying a
            Computational Science Engineer.
          </p>
          <p>
            The most of I know and I learn it´s for myself, some online courses
            and little proyects that I develope.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
