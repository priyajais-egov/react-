import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core';
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default class Projects extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { projects = {} } = this.props;
        return (
            <Card>
                <CardContent>
                    <b> <Link to="/"><ArrowBackIosIcon /></Link> </b>
                    <iframe src="https://egov-micro-dev.egovernments.org/citizen/language-selection" height="500px" width="100%"></iframe>;
                </CardContent>
            </Card>
        );
    }
}

