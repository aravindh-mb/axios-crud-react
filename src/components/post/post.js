import React from 'react'
import './post.css'
const Post =(props) =>(
    <article className="Post" onClick={this.props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">
                {props.author}
            </div>
        </div>
    </article>
)
export default Post