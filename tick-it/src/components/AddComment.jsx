import { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import axios from "axios";

const AddComment = (props) => {
  const initialState = {
    name: "",
    comment: "",
  };
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createComment();
    setFormState(initialState);
  };

  const createComment = async () => {
    try {
      const authHeader = `Basic ${btoa(`kevblah:test`)}`;
      let requestBody = {
        name: formState.name,
        comment: formState.comment,
        event_id: props.eventId,
      };
      let newComment = await axios.post(
        "https://tick-it-api-production.up.railway.app/comments",
        requestBody,
        {
          headers: {
            Authorization: authHeader,
            "Content-Type": "application/json",
          },
        }
      );
      props.setComments([...props.comments, newComment.data]);
      // window.location.reload(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container className="pt-3" style={{ maxWidth: "400px" }}>
      <h4>Add a Comment!</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            // id="name"
            type="text"
            placeholder="Your Name"
            onChange={handleChange}
            value={formState.name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            // id="comment"
            as="textarea"
            rows={3}
            onChange={handleChange}
            value={formState.comment}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddComment;
