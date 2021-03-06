import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Button, Col, Form, FormGroup, Input, Label } from "reactstrap";

function Contact(props) {
        const [state, setState] = React.useState({
                firstname: "",
                lastname: "",
                telnum: "",
                email: "",
                agree: false,
                contactType: "Tel.",
                message: "",
        });

        const [touched, setTouched] = React.useState({ firstname: false, lastname: false, telnum: false, email: false });

        const handleInputChange = (event) => {
                const target = event.target;
                const value = target.type === "checkbox" ? target.checked : target.value;
                const name = target.name;
                setState({ ...state, [name]: value });
        };

        const handleSubmit = (event) => {
                console.log("Current State is: " + JSON.stringify(state));
                alert("Current State is: " + JSON.stringify(state));
                event.preventDefault();
        };

        const handleBlur = (field) => (e) => {
                setTouched({ ...touched, [field]: true });
        };

        const validate = (firstname, lastname, telnum, email) => {
                const errors = {
                        firstname: "",
                        lastname: "",
                        telnum: "",
                        email: "",
                };

                if (touched.firstname && firstname.length < 3) {
                        errors.firstname = "First name should be >= 3 characters";
                } else if (touched.firstname && firstname.length > 10) {
                        errors.lastname = "Last name should be <= 10 characters";
                }

                if (touched.lastname && lastname.length < 3) {
                        errors.lastname = "Last name should be >= 3 characters";
                } else if (touched.lastname && lastname.length > 10) {
                        errors.lastname = "Last name should be <= 10 characters";
                }

                const req = /^\d+$/;
                if (touched.telnum && !req.test(telnum)) {
                        errors.telnum = "Tel. number should contain only numbers";
                }
                if (touched.email && email.split("").filter((x) => x === "@").length !== 1) {
                        errors.email = "Email should contain @";
                }
                return errors;
        };

        const errors = validate(state.firstname, state.lastname, state.telnum, state.email);

        return (
                <div className="container">
                        <div className="row">
                                <Breadcrumb>
                                        <BreadcrumbItem>
                                                <Link to="/home">Home</Link>
                                        </BreadcrumbItem>
                                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                                </Breadcrumb>
                                <div className="col-12">
                                        <h3>Menu</h3>
                                        <hr />
                                </div>
                        </div>
                        <div className="row row-content">
                                <div className="col-12">
                                        <h3>Location Information</h3>
                                </div>
                                <div className="col-12 col-sm-4 offset-sm-1">
                                        <h5>Our Address</h5>
                                        <address>
                                                121,Clear Water Bay Road <br />
                                                Clear Water Bay,Kowloon <br />
                                                HONG KONG <br />
                                                <i className="fa fa-phone"></i>: +852 1234 5678 <br />
                                                <i className="fa fa-fax"></i>: +852 8765 4321 <br />
                                                <i className="fa fa-envelope"></i>:
                                                <a href="mailto:confusion@food.net confusion@food.net">Confusion@food.net</a>
                                        </address>
                                </div>
                                <div className="col-12 col-sm-6 offset-sm-1">
                                        <h5>Map of our Location</h5>
                                </div>
                                <div className="col-12 col-sm-11 offset-sm-1">
                                        <div className="btn-group" role="group">
                                                <a role="button" className="btn btn-primary" href="tel:+85212345678">
                                                        <i classhare="fa fa-phone"></i> Call
                                                </a>
                                                <a role="button" className="btn btn-info">
                                                        <i className="fa fa-skype"></i> Skype
                                                </a>
                                                <a role="button" className="btn btn-success" href="mailto:confusion@foc.net">
                                                        <i className="fa fa-envelope-o"></i> Email
                                                </a>
                                        </div>
                                </div>
                        </div>
                        <div className="row row-content">
                                <div className="col-12">
                                        <h3>Send us your Feedback</h3>
                                </div>
                                <div className="col-12 col-md-9">
                                        <Form onSubmit={handleSubmit}>
                                                <FormGroup row>
                                                        <Label htmlFor="firstname" md={2}>
                                                                First Name
                                                        </Label>
                                                        <Col md={10}>
                                                                <Input
                                                                        type="text"
                                                                        id="firstname"
                                                                        name="firstname"
                                                                        placeholder="First Name"
                                                                        value={state.firstname}
                                                                        valid={errors.firstname === ""}
                                                                        invalid={errors.firstname !== ""}
                                                                        onBlur={handleBlur("firstname")}
                                                                        onChange={(e) => handleInputChange(e)}
                                                                />
                                                        </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                        <Label htmlFor="lastname" md={2}>
                                                                Last Name
                                                        </Label>
                                                        <Col md={10}>
                                                                <Input
                                                                        type="text"
                                                                        id="lastname"
                                                                        name="lastname"
                                                                        placeholder="Last Name"
                                                                        value={state.lastname}
                                                                        valid={errors.lastname === ""}
                                                                        invalid={errors.lastname !== ""}
                                                                        onBlur={handleBlur("lastname")}
                                                                        onChange={(e) => handleInputChange(e)}
                                                                />
                                                        </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                        <Label htmlFor="telnum" md={2}>
                                                                Contact Tel.
                                                        </Label>
                                                        <Col md={10}>
                                                                <Input
                                                                        type="tel"
                                                                        id="telnum"
                                                                        name="telnum"
                                                                        placeholder="Tel. number"
                                                                        value={state.telnum}
                                                                        valid={errors.telnum === ""}
                                                                        invalid={errors.telnum !== ""}
                                                                        onBlur={() => handleBlur("telnum")}
                                                                        onChange={(e) => handleInputChange(e)}
                                                                />
                                                        </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                        <Label htmlFor="email" md={2}>
                                                                Email
                                                        </Label>
                                                        <Col md={10}>
                                                                <Input
                                                                        type="email"
                                                                        id="email"
                                                                        name="email"
                                                                        placeholder="Email"
                                                                        value={state.email}
                                                                        valid={errors.email === ""}
                                                                        invalid={errors.email !== ""}
                                                                        onBlur={() => handleBlur("email")}
                                                                        onChange={(e) => handleInputChange(e)}
                                                                />
                                                        </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                        <Col md={{ size: 6, offset: 2 }}>
                                                                <FormGroup check>
                                                                        <Label check>
                                                                                <Input
                                                                                        type="checkbox"
                                                                                        name="agree"
                                                                                        checked={state.agree}
                                                                                        onChange={(e) => handleInputChange}
                                                                                />
                                                                                <strong>May we contact you?</strong>
                                                                        </Label>
                                                                </FormGroup>
                                                        </Col>
                                                        <Col md={{ size: 3, offset: 1 }}>
                                                                <Input
                                                                        type="select"
                                                                        name="contactType"
                                                                        value={state.contactType}
                                                                        onChange={(e) => handleInputChange(e)}
                                                                >
                                                                        <option>Tel.</option>
                                                                        <option>Email</option>
                                                                </Input>
                                                        </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                        <Label htmlFor="message" md={2}>
                                                                Your Feedback
                                                        </Label>
                                                        <Col md={10}>
                                                                <Input
                                                                        type="textarea"
                                                                        id="message"
                                                                        name="message"
                                                                        rows="12"
                                                                        value={state.message}
                                                                        onChange={(e) => handleInputChange(e)}
                                                                ></Input>
                                                        </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                        <Col md={{ size: 10, offset: 2 }}>
                                                                <Button type="submit" color="primary">
                                                                        Send Feedback
                                                                </Button>
                                                        </Col>
                                                </FormGroup>
                                        </Form>
                                </div>
                        </div>
                </div>
        );
}
export default Contact;
