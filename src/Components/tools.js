import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core';

export default class Tools extends Component {
render() {
    const {tools=[]}= this.props;
    return (
        <Card>
            <CardContent>
            <b> Tools Works:</b><br></br>
              { tools.map(list => <li key={list}> {list} </li>) }
            </CardContent>
        </Card>
    );
    }
}