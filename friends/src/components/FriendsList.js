import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendForm from './FriendForm';

class FriendsList extends React.Component {

    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }
    
    getData = () => {

        axiosWithAuth()
            .get('/api/friends/')
            .then(res => {
                console.log(res);
                this.setState({
                    friends: res.data
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state, "rendering");
        return (
            <div>

                <FriendForm />

                {this.state.friends.map(friend => {
                    return (
                    <div key ={friend.id}>
                        <p>ID: {friend.id}</p>
                        <p>Name: {friend.name}</p>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default FriendsList;