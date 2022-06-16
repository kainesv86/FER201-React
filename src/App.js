import logo from "./logo.svg";
import "./App.css";

import { Navbar, NavbarBrand } from "reactstrap";
import React from "react";
import Welcome from "./components/Welcome";
import Comment from "./components/Comment";

const comment = {
        date: new Date(),
        text: "Ihope you enjoy my restaurant!",
        author: {
                name: "alberto",
                avatarUrl: "../images/alberto.png",
        },
};

class App extends React.Component {
        render() {
                return (
                        <div className="App">
                                <Navbar dark color={"primary"}>
                                        <div className="container">
                                                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                                        </div>
                                </Navbar>
                                <Welcome name="Kainé" />
                                <Comment date={comment.date} text={comment.text} author={comment.author} />
                        </div>
                );
        }
}

export default App;
