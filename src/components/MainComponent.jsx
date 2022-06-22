import React, { useState } from "react";
import { DISHES } from "../shared/dish";
import DishDetail from "./DIshDetailComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";

function Main(props) {
        const [dishes, setDishes] = useState(DISHES);
        const [selectedDish, setSelectedDish] = useState(null);

        return (
                <div>
                        <Header />
                        <Menu
                                dishes={dishes}
                                onClick={(dishId) => {
                                        setSelectedDish(dishId);
                                }}
                        />
                        {selectedDish !== null && <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />}
                        <Footer />
                </div>
        );
}

export default Main;
