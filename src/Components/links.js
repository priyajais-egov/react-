import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core';

export default class Links extends Component {
render() {
    const {link}= this.props;
    return (
        <Card>
            <CardContent>
                <b>Links Works:</b><br></br>
                {link[0]}<br></br>
            </CardContent>
        </Card>
    );
    }
}