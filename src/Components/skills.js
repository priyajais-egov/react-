import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core';

export default class Skills extends Component {
render() {
    const {skills}= this.props;
    return (
        <Card>
            <CardContent>
                <b>Skills Works:</b><br></br>
                {skills.map(list => <li key={list}> {list} </li>)}
            </CardContent>
        </Card>
    );
    }
}