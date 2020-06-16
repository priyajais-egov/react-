import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import { FormControl, Button } from '@material-ui/core';
import { Select, option, InputLabel, TextField } from '@material-ui/core';

export default class Feedback extends Component {

    constructor(props) {
        super(props);
        this.state = { name: undefined, desc: undefined, rating: 1 };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event) {
        console.log(event);
        console.log(this.state);
        this.props.onFeedbackSubmit(this.state);
        this.setState((prevstate,props) => ({
            name: undefined,
            desc: undefined,
            rating: 1
        }));
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
   

    render() {
        const { feedback = [] } = this.props;
        return (
            <Row>
                <Col>
                <Card>
                <CardContent>
                    <FormControl variant="outlined" >
                        <Row className="mt-3">
                            <Col>
                                <TextField style={{width: "100%"}}
                                name='name'
                                    id="outlined-basic"
                                    label="Name :"
                                    variant="outlined"
                                    color="secondary"
                                    size="medium"
                                    value={this.state.name || ''}
                                    onChange={this.handleChange}
                                /></Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <TextField
                                name='desc'
                                    id="outlined-basic"
                                    label="Description :"
                                    variant="outlined"
                                    color="secondary"
                                    value={this.state.desc || ''}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Row> <br></br>
                        <Row>
                            <Col>
                                <Select
                                name='rating'
                                    native
                                    label="Ranking :"
                                    value={this.state.rating || 1}
                                    onChange={this.handleChange}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Select>
                            </Col>
                        </Row><br></br>
                        <Button variant="contained" disabled={!this.state.name || !this.state.desc} onClick={this.handleClick} color="primary"> Submit</Button>
                    </FormControl>
                    <Row className="mt-5 mb-5">
                        <Col lg={12}><span className="font-weight-bold">Submitted Feedbacks</span></Col>
                        {feedback.map((item, index) => (
                        <Col className="mt-3" lg={4}>
                        <Card key={index}>
                            <CardContent>
                                        <Row>
                                        <Col>Name</Col>
                                        <Col>{item.name}</Col>
                                    </Row>
                                    <Row>
                                        <Col>Description</Col>
                                        <Col>{item.desc}</Col>
                                    </Row>
                                    <Row>
                                        <Col>Rating:</Col>
                                        <Col>{item.rating}</Col>
                                    </Row>
                            </CardContent>
                        </Card>
                        </Col>
                    ))}

                    </Row>
                </CardContent>
            </Card>
                </Col>
                {/* <Col>
                    <Card>
                        <CardContent>
                            <span className="font-weight-bold">Submitted Feedbacks</span>
                        </CardContent>
                    </Card>
                </Col> */}
            </Row>
        );
    }
}