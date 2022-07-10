import React, { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Redirect, Route, Switch } from "react-router-dom";
import Contact from "./ContactComponent";
import About from "./AboutComponents";
import { useState } from "react";
function Main(props) {
        // onDishSelect(dishId) {
        //    this.setState({ selectedDish: dishId });
        // }

        const [state, setState] = useState({ dishes: DISHES, comments: COMMENTS, promotions: PROMOTIONS, leaders: LEADERS });

        const HomePage = () => {
                return (
                        <Home
                                dish={state.dishes.filter((dish) => dish.featured)[0]}
                                promotion={state.promotions.filter((promotion) => promotion.featured)[0]}
                                leader={state.leaders.filter((leader) => leader.featured)[0]}
                        />
                );
        };
        const DishWithId = ({ match }) => {
                return (
                        <DishDetail
                                dish={state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                                comments={state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                        />
                );
        };
        return (
                <div>
                        <Header />
                        <Switch>
                                <Route path="/home" component={HomePage} />
                                <Route exact path="/menu" component={() => <Menu dishes={state.dishes} />} />
                                <Route exact path="/contactus" component={() => <Contact />} />
                                <Route exact path="/aboutus" component={() => <About leaders={state.leaders} />} />
                                <Route path="/menu/:dishId" component={DishWithId} />
                                <Redirect to="/home" />
                        </Switch>
                        <Footer />
                </div>
        );
}
export default Main;
