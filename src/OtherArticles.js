import React, { Component } from 'react'
import './OtherArticles.css'
import ClickbaitArticle from './ClickbaitArticle'

class OtherArticles extends Component {
    render() {
        return (
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                <ClickbaitArticle />
                <div className="small-6 medium-3 columns other-article">
                    <a href="#">
                        <img src="https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg" alt="mountain" />
                        <p>You won't believe what's under this mountain</p>
                    </a>
                </div>
                <div className="small-6 medium-3 columns other-article">
                    <a href="#">
                        <img src="http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg" alt="gold" />
                        <p>Mine 20% more gold with One Weird Trick</p>
                    </a>
                </div>
                <div className="small-6 medium-3 columns other-article">
                    <a href="#">
                        <img src="http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg" alt="hobbit" />
                        <p>Surprise for Indiana Hobbits born before 1999</p>
                    </a>
                </div>
            </div>
        )
    }
}

export default OtherArticles