import React, { Component } from 'react'
import './ArticleLinks.css'
import Comments from './Comments'

class ArticleLinks extends Component {
    constructor() {
        super()

        this.state = {
            showComments: false,
        }
    }

    toggleComments(e) {
        e.preventDefault()
        this.setState({showComments: !this.state.showComments})
    }

    render() {
        return (
            <div className="links-comments">
                <div className="article-links">
                    <a className="article-link" href="#" onClick={this.toggleComments.bind(this)}>
                        <i className="fa fa-comments-o"></i>
                        <span className="article-link-text">Comments</span>
                    </a>
                    <a className="article-link" href="#">
                        <i className="fa fa-share"></i>
                        <span className="article-link-text">Share Post</span>
                    </a>
                </div>
                {this.state.showComments ? <Comments /> : null}
            </div>
        )
    }
}

export default ArticleLinks