import { Card, Button } from "react-bootstrap"

const Cards = ({ food }) => {
    return (
        <div className="card-container d-flex">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={food.img} />
                <Card.Body>
                    <Card.Title>{food.name}</Card.Title>
                    <Card.Text>{food.price}</Card.Text>
                    <Button variant="primary">Buy!</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards
