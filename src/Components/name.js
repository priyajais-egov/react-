import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { CardContent, Avatar } from '@material-ui/core';
import logo from './avatar.jpg'
import { Row, Col } from 'react-bootstrap';

export default class Name extends Component {
render() {
    const {me}= this.props;
    return (
        <Card>
            <CardContent>
                <Row>
          <Col lg={1}>
           <Avatar alt="ABCD kh" src={logo} />
          </Col>
              <Col>  <b>{me.name}</b><br></br>
                  {me.designation} <br></br>
             </Col>
             </Row>
            </CardContent>
        </Card>
    );
    }
}