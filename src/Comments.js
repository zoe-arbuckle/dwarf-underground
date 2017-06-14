import React, { Component } from 'react'
import './Comments.css'

class Comments extends Component {
    constructor() {
        super()

        this.state = {
            comment: '',
            comments: [],
        }

        this.updateComment = this.updateComment.bind(this)
        this.addComment = this.addComment.bind(this)
    }

    updateComment(e) {
        this.setState({ comment: e.target.value })
    }

    addComment(e){
        const comment = {
            timestamp: new Date(),
            text: this.state.comment,
        }

        const state = {...this.state}
        state.comments.push(comment)
        state.comment = ''

        this.setState(state)
    }

    render() {
        return (
            <div className="comments">
                <textarea value={this.state.comment}
                    onChange={this.updateComment}
                    placeholder="Enter comment here"
                    required>
                </textarea>
                <button className="button" onClick={this.addComment}>Comment</button>
                {
                    this.state.comments.map((comment, i) => <Comment comment={comment} key={i} />)
                }
            </div>
        )
    }
}

function Comment(props){
    return(
        <div className="comment">
            <div>{props.comment.text}</div>
        </div>
    )
}

export default Comments