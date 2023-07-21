import { Form, Container, ListGroup } from "react-bootstrap";
import AddComment from "./AddComment";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import axios from "axios";

const Comments = (props) => {
  //   const comments = [
  //     { name: "Kevin Li", comment: "test comment" },
  //     { name: "Margaret", comment: "i love this event" },
  //     { name: "chris m", comment: "what a beautifully designed webpage" },
  //   ];
  const [comments, setComments] = useState([]);

  useEffect(() => {
    try {
      const getAllComments = async () => {
        let response = await axios.get(
          `https://tick-it-api-production.up.railway.app/comments`
        );
        setComments(
          response.data.filter((comment) => comment.event_id == props.eventId)
        );
      };
      getAllComments();
    } catch (e) {
      console.log(e);
    }
  }, [comments]);

  return (
    <Container className=" mx-auto" style={{ maxWidth: "600px" }}>
      <h3>Event Comments</h3>
      <Container className="d-flex justify-content-center">
        <ListGroup className="mx-auto w-100">
          {comments.map((comment) => (
            <Comment key={comment.comment} comment={comment} />
          ))}
        </ListGroup>
      </Container>

      <AddComment
        eventId={props.eventId}
        comments={comments}
        setComments={setComments}
      />
    </Container>
  );
};

export default Comments;
