import { Component } from "react";
import { Card } from "react-bootstrap";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
      }
    componentDidMount(){
        let userString = localStorage.getItem('user');
        let user = JSON.parse(userString);
        console.log(user,userString,"user");
        this.setState({
            user : user
        })
    }
    render(){
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{this.state.user?.userName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{this.state.user?.email}</Card.Subtitle>
            </Card.Body>
          </Card>
        )
    }
}

export default Profile;