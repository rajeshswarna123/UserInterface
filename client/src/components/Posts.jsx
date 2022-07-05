import { Fragment } from "react";
import { Card } from "react-bootstrap";

const Posts = (props) => {
    return (
        <div>
          {  props.posts.map((post) =>
                <Card key={post.id} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                           {post.content}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
}
export default Posts;