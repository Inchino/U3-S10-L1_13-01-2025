import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBook: null,
  };

  changeSelectedBook = (asin) => {
    this.setState((prevState) => ({
      selectedBook: prevState.selectedBook === asin ? null : asin,
    }));
  };

  render() {
    return (
      <>
        {/* Barra di ricerca */}
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Due colonne principali: libri e commenti */}
        <Row className="mt-3">
          {/* Colonna di sinistra: lista di libri */}
          <Col xs={12} md={8}>
            <Row className="g-3">
              {this.props.books
                .filter((b) =>
                  b.title
                    .toLowerCase()
                    .includes(this.state.searchQuery.toLowerCase())
                )
                .map((b) => (
                  <Col xs={12} md={6} key={b.asin}>
                    <SingleBook
                      book={b}
                      onClick={() => this.changeSelectedBook(b.asin)}
                      isSelected={this.state.selectedBook === b.asin}
                    />
                  </Col>
                ))}
            </Row>
          </Col>

          {/* Colonna di destra: area commenti */}
          <Col xs={12} md={4}>
            {this.state.selectedBook ? (
              <CommentArea asin={this.state.selectedBook} />
            ) : (
              <div className="text-center text-muted">
                <p>Seleziona un libro per vedere i commenti</p>
              </div>
            )}
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
