import React, { Component } from 'react'

class Comments extends Component{
    constructor(){
        super()

        this.state = {
            comment: ''
        }

        this.updateComment = this.updateComment.bind(this)
    }

    updateComment(e){
        this.setState({comment: e.target.value}, () => console.log(this.state))
    }
    
    render(){
        return(
            <div className="comments">
                <textarea value={this.state.comment} onChange={this.updateComment}></textarea>
                <button className="button">Comment</button>
            </div>
        )
    }
}

export default Comments