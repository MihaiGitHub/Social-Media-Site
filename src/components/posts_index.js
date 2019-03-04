import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){
        return (
            <div>Posts Index Page</div>
        );
    }
}

// Shortcut to wire up action creator inside of component; this.props.fetchPosts
// null for mapStateToProps; pass in action creator itself inside of an object
export default connect(null, { fetchPosts })(PostsIndex);