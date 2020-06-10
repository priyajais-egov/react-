import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Name from './Components/name';
import { Row, Col } from 'react-bootstrap'
import { Container } from '@material-ui/core';
import Links from './Components/links';
import Projects from './Components/projects';
import Details from './Components/details';
import Experience from './Components/experience';
import Education from './Components/education';
import Skills from './Components/skills';
import Tools from './Components/tools';
import Hobbies from './Components/hobbies';

function App() {
  return (
    <div className="App">
      <Container className="mt-5">
      <Row>
        <Col>
          <Name />
        </Col>
        <Col>
          <Links />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Projects />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Details/>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Experience />
        </Col>
        <Col>
          <Education />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Skills />
        </Col>
        <Col>
          <Tools />
        </Col>
        <Col>
          <Hobbies />
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
