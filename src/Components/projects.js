import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core';

export default class Projects extends Component {
render() {
    const {projects}= this.props;
    return (
        <Card>
            <CardContent>
    <b>Projects Works!!</b><br></br>
    {projects}
            </CardContent>
        </Card>
    );
    }
}