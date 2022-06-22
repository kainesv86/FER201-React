import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

function DishDetail(props) {
        const renderDish = (dish) => {
                return (
                        <div className="col-12 col-md-5">
                                <Card>
                                        <CardImg top src={dish.image} alt={dish.name} />
                                        <CardBody>
                                                <CardTitle>{dish.name}</CardTitle>
                                                <CardText>{dish.description}</CardText>
                                        </CardBody>
                                </Card>
                        </div>
                );
        };

        const renderComment = (comments) => {
                const comment = comments.map((item) => {
                        return (
                                <div>
                                        <p>{item.comment}</p>
                                        <p>
                                                {item.author} {item.date}
                                        </p>
                                </div>
                        );
                });

                return (
                        <div className="col-12 col-md-7">
                                <h2>comments</h2>
                                {comment}
                        </div>
                );
        };

        const renderDetail = (dish, comments) => {
                return (
                        <div className="container">
                                <div className="row">
                                        {renderDish(dish)}
                                        {renderComment(comments)}
                                </div>
                        </div>
                );
        };

        return <>{renderDetail(props.dish, props.dish.comments)}</>;
}

export default DishDetail;
