import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core';

export default class Experience extends Component {
render() {
    const {experience =[]}= this.props;
    return (
        <Card>
            <CardContent>
            <b>Experience Works:</b><br></br>
                {experience.map(item => (
                    <h6 key={item.value}>{item.key}:&nbsp;{item.value}</h6>
                ))} 
            </CardContent>
        </Card>
    );
    }
}