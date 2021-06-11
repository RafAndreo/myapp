import React, {Component} from "react";
import {Container, Nav, Form, FormControl, Navbar, Button} from "react-bootstrap";
import logo from './logo192.png'
import {Route,BrowserRouter as Router, Switch, Link, } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

export default class Headder extends Component{
    render() {
        return(
            <>
            <Navbar collapseOnSelect expand="sm" bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href="/">
                         <img
                            src={logo}
                            height="60"
                            width="60"
                            className="d-inline-block align-top"
                            alt="Logo"

                            /> Game Spot
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About us</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='ml-sm-2'
                                   />
                                <Button variant='outline-info'>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />

                </Switch>
            </Router>
        </>
    )
        }
    }
