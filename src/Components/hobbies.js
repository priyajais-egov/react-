import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core';

export default class Hobbies extends Component {
render() {
    return (
        <Card>
            <CardContent>
                <b>Hobbies Works:</b><br></br>
                cooking<br></br>
                travelling<br></br>
                shopping<br></br>
                Photography<br></br>
            </CardContent>
        </Card>
    );
    }
}