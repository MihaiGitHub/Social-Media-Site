import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
    componentDidMount(){
        // Get post id from URL
        // Prop provided by react router
        const { id } = this.props.match.params;

        // Call action creator to fetch post using the id
        this.props.fetchPost(id);
    }

    onDeleteClick(){
        const { id } = this.props.match.params;

        // Pass callback to navigate user back to posts index
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render(){
        const { post } = this.props;

        // At first render post is undefined so return loading div instead of regular return
        if(!post){
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/">Back To Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
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

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);