import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
    componentDidMount(){
        // Get post id from URL
        // Prop provided by react router
        const { id } = this.props.match.params;

        // Call action creator to fetch post using the id
        this.props.fetchPost(id);
    }

    render(){
        const { post } = this.props;

        // At first render post is undefined so return loading div instead of regular return
        if(!post){
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

// Destructure to get posts piece of state
// ownProps - props object that is going to this component
function mapStateToProps({ posts }, ownProps){
    // return single post in component
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);