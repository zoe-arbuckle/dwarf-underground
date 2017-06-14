import React, { Component } from 'react'
import './ArticleLinks.css'

class ArticleLinks extends Component {
    constructor() {
        super()

        this.state = {
            showComments: false,
        }
    }

    toggleComments() {
        if (this.state.showComments) {
            this.state.showComments = false;
        } else {
            this.state.showComments = true;
        }
    }

    render() {
        return (
            <div className="links-comments">
                <div className="article-links">
                    <a className="article-link" href="#">
                        <i className="fa fa-comments-o"></i>
                        <span className="article-link-text">Comments</span>
                    </a>
                    <a className="article-link" href="#">
                        <i className="fa fa-share"></i>
                        <span className="article-link-text">Share Post</span>
                    </a>
                </div>
                {this.state.showComments ? <p>Comments!</p> : null}
            </div>
        )
    }
}

export default ArticleLinks