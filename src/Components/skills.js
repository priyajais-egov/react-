import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core';

export default class Skills extends Component {
render() {
    return (
        <Card>
            <CardContent>
                <b>Skills Works:</b><br></br>
                Java , Angular JS, Web Services (SOAP, WSDL, REST API), STRUTS, Spring Framework, Spring Boot, Spring Cloud
                <br></br>
                Pivotal Cloud Fundry, AWS 
                <br></br>
                Rabbit MQ, Kafka, Zookeeper
            </CardContent>
        </Card>
    );
    }
}