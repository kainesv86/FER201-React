import React from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponents";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import TestFetchComponent from "../useFetch/TestFetchComponent";

const Main = () => {
        const dishes = useSelector((state) => state.dishes);
        const comments = useSelector((state) => state.comments);
        const promotions = useSelector((state) => state.promotions);
        const leaders = useSelector((state) => state.leaders);

        const HomePage = () => {
                return (
                        <Home
                                dish={dishes.filter((dish) => dish.featured)[0]}
                                promotion={promotions.filter((promotion) => promotion.featured)[0]}
                                leader={leaders.filter((leader) => leader.featured)[0]}
                        />
                );
        };
        const DishWithId = ({ match }) => {
                return (
                        <DishDetail
                                dish={dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                                comments={comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                        />
                );
        };
        return (
                <div>
                        <Header />
                        <div>
                                <Switch>
                                        <Route path="/home" component={HomePage} />
                                        <Route exact path="/aboutus" component={() => <About leaders={leaders} />} />
                                        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
                                        <Route exact path="/comment" component={() => <TestFetchComponent />} />
                                        <Route exact path="/contactus" component={() => <Contact />} />
                                        <Route path="/menu/:dishId" component={DishWithId} />
                                        <Redirect to="/home" />
                                </Switch>
                        </div>
                        <Footer />
                </div>
        );
};

export default Main;
