import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <Card
        onClick={this.props.onClick} // Usa una funzione passata come prop per gestire il click
        style={{
          border: this.props.isSelected ? "3px solid red" : "none", // Cambia il bordo in base alla prop isSelected
          cursor: "pointer", // Aggiungi un cursore per indicare che è cliccabile
        }}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>
            {this.props.book.title}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;

