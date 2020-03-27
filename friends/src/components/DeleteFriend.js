import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class DeleteFriend extends React.Component {
    
    constructor() {
        super();
        this.state = {
                id: "", deleteFriend: ""
        };
    }

    handleChange = e => {
        this.setState({
            deleteFriend: {...this.state.deleteFriend, [e.target.name]: e.target.value}
        })
    }

    deleteFriend = e => {
        // e.preventDefault();
        axiosWithAuth()
            .delete(`/api/friends/${this.state.id}`)
            .then(res => {
                console.log(res);
                // this.setState({deleteFriend: [...res.data]})
                //     this.props.history.push(`/friends`)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.deleteFriend}>
                    Enter an id:
                    <input
                        type="text" name="id" placeholder="ID"
                        value={this.state.deleteFriend.id}
                        onChange={this.handleChange}
                    />
                    <button>Delete Friend</button>
                </form>
            </div>
        )
    }
}

export default DeleteFriend;