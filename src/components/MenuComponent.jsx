import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function Menu(props) {
        const menu = props.dishes.map((item) => (
                <div key={item.id} className="col-12 col-md-5 my-1">
                        <Card onClick={() => props.onClick(item.id)}>
                                <CardImg width="100%" src={item.image} alt={item.name} />
                                <CardImgOverlay>
                                        <CardTitle tag="h6">{item.name}</CardTitle>
                                </CardImgOverlay>
                        </Card>
                </div>
        ));
        return (
                <div className="container">
                        <div className="row">{menu}</div>
                </div>
        );
}

export default Menu;
