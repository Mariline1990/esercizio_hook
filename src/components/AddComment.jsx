import { Component, useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment =({asin}) => {
  // state = {
  //   comment: {
      // comment: "",
      // rate: 1,
      // elementId: this.props.asin,
  //   },

  const  [comment, setComment]= useState({ 
   comment: "",
  rate: 1,
  elementId: asin,})

  };
// Qui sei arrivata /// CONTINUARE DA QUI
  useEffect(()=>{setComment(...comment,)}) {
    
     {
    }
  }

  sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(state.comment),
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNDRlYWZlMDMxZTAwMTliYTE4YjQiLCJpYXQiOjE3MDQ4MDgwMjksImV4cCI6MTcwNjAxNzYyOX0.7HnXve52u4DqrIfXlkl7aGwnK5R84TMqn-45efsTZDA",
        },
      });
      if (response.ok) {
        alert("Recensione inviata!");
        setState({
          comment: {
            comment: "",
            rate: 1,
            elementId: props.asin,
          },
        });
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div className="my-3">
        <Form onSubmit={sendComment}>
          <Form.Group className="mb-2">
            <Form.Label>Recensione</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci qui il testo"
              value={this.state.comment.comment}
              onChange={(e) =>
                setState({
                  comment: {
                    ...state.comment,
                    comment: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Valutazione</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={(e) =>
               setState({
                  comment: {
                    ...state.comment,
                    rate: e.target.value,
                  },
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Invia
          </Button>
        </Form>
      </div>
    );
  }


export default AddComment;
