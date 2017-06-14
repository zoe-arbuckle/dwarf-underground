import React, { Component } from 'react'

class Comments extends Component{
    render(){
        return(
            <div className="comments">
                <textarea></textarea>
                <button className="button">Comment</button>
            </div>
        )
    }
}

export default Comments