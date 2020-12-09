import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import './Blog.css';

class Blog extends Component {
    state = {
        auth: false
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts">Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?q=test'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" exact component={NewPost} /> : null}
                    <Route path="/" exact component={Posts} />
                    <Route path="/posts" exact component={Posts} />
                    <Route path="/posts/:id" exact component={FullPost} />
                    <Route render={() => <h3>404 not found.</h3>} />
                </Switch>

            </div>
        );
    }
}

export default Blog;