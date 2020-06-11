import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core';

export default class Education extends Component {
render() {
    const {education}= this.props;
    const {lang=[]}= this.props;
    return (
        <Card>
            <CardContent>
                <b>Education Works :</b><br></br>
                {education}<br></br>
                <b>Languages :</b><br></br>
                { lang.map(list => <li key={list}> {list} </li>) }
            </CardContent>
        </Card>
    );
    }
}