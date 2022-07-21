import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
        Navbar,
        NavbarBrand,
        Jumbotron,
        NavbarToggler,
        Collapse,
        Nav,
        NavItem,
        Modal,
        ModalHeader,
        ModalBody,
        Button,
        Form,
        FormGroup,
        Label,
        Input,
} from "reactstrap";

function Header() {
        const [isNavOpen, setIsNavOpen] = useState(false);
        const [isModalOpen, setIsModalOpen] = useState(false);

        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [remember, setRemember] = useState("");

        const handleLogin = (event) => {
                setIsNavOpen(!isNavOpen);
                alert("Username: " + username + " Password: " + password + " Remember: " + remember);
                event.preventDefault();
        };

        return (
                <div>
                        <Navbar dark expand="md">
                                <div className="container">
                                        <NavbarToggler onClick={() => setIsNavOpen(!isNavOpen)} />
                                        <NavbarBrand className="mr-auto" href="/">
                                                <img src="assets/images/logo.png" height="30" alt="" />
                                        </NavbarBrand>
                                        <Collapse isOpen={isNavOpen} navbar>
                                                <Nav navbar>
                                                        <NavItem>
                                                                <NavLink className="nav-link" to="/home">
                                                                        <span className="fa fa-home fa-lg"></span>Home
                                                                </NavLink>
                                                        </NavItem>
                                                        <NavItem>
                                                                <NavLink className="nav-link" to="/aboutus">
                                                                        <span className="fa fa-info fa-lg"></span>About Us
                                                                </NavLink>
                                                        </NavItem>
                                                        <NavItem>
                                                                <NavLink className="nav-link" to="/menu">
                                                                        <span className="fa fa-list fa-lg"></span>Menu
                                                                </NavLink>
                                                        </NavItem>
                                                        <NavItem>
                                                                <NavLink className="nav-link" to="/contactus">
                                                                        <span className="fa fa-address-card fa-lg"></span>Contact Us
                                                                </NavLink>
                                                        </NavItem>
                                                        <NavItem>
                                                                <NavLink className="nav-link" to="/comment">
                                                                        <span className="fa fa-commenting fa-lg"></span>Comment
                                                                </NavLink>
                                                        </NavItem>
                                                </Nav>
                                        </Collapse>
                                        <Nav className="ml-auto" navbar>
                                                <NavItem>
                                                        <Button outline onClick={() => setIsModalOpen(!isModalOpen)}>
                                                                <span className="fa fa-sign-in fa-lg"></span>Login
                                                        </Button>
                                                </NavItem>
                                        </Nav>
                                </div>
                        </Navbar>
                        <Jumbotron>
                                <div className="container">
                                        <div className="row row-header">
                                                <div className="col-12 col-sm-6">
                                                        <h1>Ristorante con Fusion</h1>
                                                        <p>
                                                                We take inspiration from the World's be fusion experience. Our lipsmacking creation
                                                                will tickle your culinary senses!
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                        </Jumbotron>
                        <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)} fade={false} backdrop={false}>
                                <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>Login</ModalHeader>
                                <ModalBody>
                                        <Form onSubmit={handleLogin}>
                                                <FormGroup>
                                                        <Label htmlFor="username">Username</Label>
                                                        <Input
                                                                type="text"
                                                                id="username"
                                                                name="username"
                                                                innerRef={(input) => {
                                                                        if (input) {
                                                                                setUsername(input.value);
                                                                        }
                                                                }}
                                                        />
                                                </FormGroup>
                                                <FormGroup>
                                                        <Label htmlFor="password">Password</Label>
                                                        <Input
                                                                type="password"
                                                                id="password"
                                                                name="password"
                                                                innerRef={(input) => {
                                                                        if (input) {
                                                                                setPassword(input.value);
                                                                        }
                                                                }}
                                                        />
                                                </FormGroup>
                                                <FormGroup>
                                                        <Label check className="ml-4">
                                                                <Input
                                                                        type="checkbox"
                                                                        id="remember"
                                                                        name="remember"
                                                                        innerRef={(input) => {
                                                                                if (input) {
                                                                                        setRemember(input.checked);
                                                                                }
                                                                        }}
                                                                />
                                                                Remember me
                                                        </Label>
                                                </FormGroup>
                                                <Button type="submit" value="submit" color="primary">
                                                        Login
                                                </Button>
                                        </Form>
                                </ModalBody>
                        </Modal>
                </div>
        );
}

export default Header;
