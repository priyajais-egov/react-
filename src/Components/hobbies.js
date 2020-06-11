import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core';

export default class Hobbies extends Component {
render() {
    const {hobbies}= this.props;
    return (
        <Card>
            <CardContent>
                <b>Hobbies Works:</b><br></br>
                {hobbies.map(list => <li key={list}> {list} </li>)}
            </CardContent>
        </Card>
    );
    }
}