import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const Comment = (props) => {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex flex-column justify-content-between align-items-start"
    >
      <div className="text-left">{props.comment.comment}</div>
      <div className="fw-bold ml-3"> - {props.comment.name}</div>
    </ListGroup.Item>
  );
};

export default Comment;
