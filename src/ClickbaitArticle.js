import React, { Component } from 'react'

class ClickbaitArticle extends Component{
    render(props) {
        return (
            <div className="small-6 medium-3 columns other-article">
                <a href="#">
                    <img src={this.props.url} alt={this.props.alt}/>
                    <p>{this.props.text}</p>
                </a>
            </div>
        )
    }
}

export default ClickbaitArticle