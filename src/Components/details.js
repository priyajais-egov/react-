import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core';

export default class Details extends Component {
render() {
    const {details}= this.props;
    return (
        <Card>
            <CardContent>
              <b> Details Works:</b> <br></br>
               {details}
            </CardContent>
        </Card>
    );
    }
}