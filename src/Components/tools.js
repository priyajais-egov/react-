import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core';

export default class Tools extends Component {
render() {
    return (
        <Card>
            <CardContent>
            <b> Tools Works:</b><br></br>
                eclipse  <br></br>
                 Rest API Services  <br></br>
                  Tomcat Web server   <br></br>
                   Oracle 10g, PL/SQL  <br></br>
                   JIRA

            </CardContent>
        </Card>
    );
    }
}