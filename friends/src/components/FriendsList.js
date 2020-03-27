import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendForm from './FriendForm';
import DeleteFriend  from './DeleteFriend';

class FriendsList extends React.Component {

    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(preProps, preState) {
        if (preState.friends !== this.state.friends) {
            this.getData();
        }
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

                <DeleteFriend />

                {this.state.friends.length > 0 ? 
                    <div>
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
                :
                <div>loading friends list...</div>}
            </div>
        )
    }
}

export default FriendsList;