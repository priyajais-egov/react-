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

class App extends React.Component{
state = {
  aboutMe: {
    me: {
      name: "Priya Jaiswal",
      designation: "Software Engineer"
    },
    links: [
      "jhjaskk@gamil.com"
    ],
    projects: "4werdghjkddddddddddddddddddd",
    details:"Priya certified with over 1.5 years of experience as a developer, Tech Lead in Enterprise - level implementation of the Software Development Life-Cycle (SDLC), including Architecture, Functional and Technical design, Development, Implementation and Support. Pivotal Cloud Fundry, AWS, Rabbit MQ, Kafka, Zookeeper, Cassandra, My SQL, Restful Web Services. Expertise in Java, J2EE, EJB, JDBC, JSP, Servlets, STRUTS, Springs Core, Spring MVC, Spring Boot, Hibernate, Web Services (SOAP AND REST API) and BPEL (Business Process Execution Language) technologies.",
    experience : [
      { key:"Database", value:"Oracle,DB2"},
      { key:"OperatingSystems", value:"Linux, Windows & Mac OSx"},
      { key:"EnterpriseSoftware", value:"IBM Web sphere, BEA Web logic Server"},
      { key:"Database", value:"Rabbit MQ, Kafka, Websphere message broker"}
    ],
    education:"gfdgdggdgdhhdhj" ,
      lang:[ "hindi", "english"],
    skills:[
      "Java ",
      "Spring Framework",
      " Spring Boot, Spring Cloud",
      " AWS,Rabbit MQ, Kafka, Zookeeper"
    ],
    tools:[
      "eclipse",
      "Rest API Services",
      "Tomcat Web server",
      "Oracle 10g, PL/SQL,JIRA"
    ],
    hobbies:[
      "travelling",
     "shopping",
     "Photography"
    ]
  }
}
  render () {
    const { projects,details,education,links = [], me = {}, experience={}, lang= [],skills=[], tools=[],hobbies=[]} = this.state.aboutMe;
  return (
    <div className="App">
      <Container className="mt-5">
      <Row>
        <Col>
          <Name me={me}></Name>
        </Col>
        <Col>
          <Links link={links}/>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Projects projects={projects}/>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Details details={details}/>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Experience experience={experience}/>
        </Col>
        <Col>
          <Education education={education} lang={lang} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Skills skills={skills}/>
        </Col>
        <Col>
          <Tools tools={tools}/>
        </Col>
        <Col>
          <Hobbies hobbies={hobbies}/>
        </Col>
      </Row>
      </Container>
    </div>
  );
}
}

export default App;
