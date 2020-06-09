import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core';

export default class Experience extends Component {
render() {
    return (
        <Card>
            <CardContent>
            <b>Experience Works:</b><br></br>
                Database / Application design: 
                 Oracle, DB2
                <br></br>
Operating Systems:  
Linux, Windows & Mac OSx <br></br>

Enterprise Software: 
 IBM Web sphere, BEA Web logic Server
<br></br>
EAI Technologies:  <br></br>
Rabbit MQ, Kafka, Websphere message broker 
            </CardContent>
        </Card>
    );
    }
}