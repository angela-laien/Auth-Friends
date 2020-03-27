import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendForm extends React.Component {
    
    state = {
        addFriend: {
            id: Date.now,
            name: "",
            age: "",
            email: ""
        }
    };

    // componentDidMount() {
    //     this.addNewFriend();
    // }

    // componentDidUpdate(preProps, preState) {
    //     if (preState.friends !== this.state.addFriend) {
    //         this.addNewFriend();
    //     }
    // }
    
    handleChange = e => {
        this.setState({
            addFriend: {...this.state.addFriend, [e.target.name]: e.target.value}
        });
    };

    addNewFriend = e => {
        // e.preventDefault();

        axiosWithAuth()
            .post("/api/friends", this.state.addFriend)
            .then(res => {
                this.setState({ addFriend: [...res.data]})
                    this.props.history.push(`/friends`);
            })
            .catch(err => console.log(err));
    };

    // resetForm = () => {
    //     this.setState(this.state.addFriend)
    // }

    render() {
        return(
            <div>
                <form onSubmit={this.addNewFriend}>
                    Name: 
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.addFriend.name}
                        onChange={this.handleChange}
                    />
                    Age:
                    <input
                        type="text"
                        name="age"
                        placeholder="Age"
                        value={this.state.addFriend.age}
                        onChange={this.handleChange}
                    />
                    Email:
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.addFriend.email}
                        onChange={this.handleChange}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        );
    }
}

export default FriendForm;