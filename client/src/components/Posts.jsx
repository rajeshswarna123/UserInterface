import { Fragment, useState, useEffect, Component } from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { fetchData } from "../Extensions";
class Posts extends Component {
    constructor(){
        super();
        this.state = {
          posts: [],
        }
      }
    componentDidMount(){
        this.getPosts();
    }
    getPosts = () => {
        let user = localStorage.getItem('user');
        let userId;
        if (user) {
            let parseUser = JSON.parse(user);
             userId = parseUser.userName;
        }
        fetchData("/post/getUserPosts",
            {
                userId,
            },
            "POST")
            .then((data) => {
                if (data) {
                    this.setState({
                        posts: data
                    })
                    console.log(data)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
    deletePost = (id) => {
        fetchData("/post/delete",
            {
                id
            },
            "DELETE")
            .then((data) => {
                if (data) {
                    this.getPosts();
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render(){
        return (
            <div>
                {this.state.posts?.map((post) =>
                    <Card key={post._id} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>
                                {post.content}
                            </Card.Text>
                            <Button variant="primary" onClick={() => this.deletePost(post._id)}>Delete</Button>
                        </Card.Body>
                    </Card>
                )}
                <button className="btn btn-Primary">
                    <Link to="/create">
                        Add Post
                    </Link>
                </button>
            </div>
        );
    }
    
}
export default Posts;