import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import { Link } from 'react-router-dom';

import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount() {

        axios.get('posts')
            .then(res => {
                const posts = res.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Jason'
                    }

                })
                this.setState({ posts: updatedPosts });
            })
            .catch(err => {
                console.log(err);
            });
    }

    postSelectedHandler = (id) => {
    }

    render() {
        const posts = this.state.posts.map(post => {
            return (
                <Link key={post.id} to={'posts/' + post.id}>
                    <Post
                        title={post.title}
                        author={post.author}
                    />
                </Link>
            )

        });

        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;
