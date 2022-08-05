import React, { Component } from 'react';
import axios from 'axios';
import './newPost.css';
class NewPost extends Component{
    state ={
        title:"",
        content:"",
        author:"aravindh"
    }
    postDataHandler(){
       const data ={
        title:this.state.title,
        content:this.state.content,
        author:this.state.author
       }
       axios.post(`https://jsonplaceholder.typicode.com/post`,data)
           .then(res=> console.log(res.data))
           .catch(err => {
            console.log(`${err} while popst` )
        })
    }
    render(){
        return(
            <React.Fragment>
                <div className="NewPost">
                    <h1>Add a Post </h1>
                    <label>Title</label>
                    <input type="text" value={this.state.title} onChange={(e)=> this.setState({title:e.target.value})} />
                    <label>Content</label>
                    <textarea type="text" rows="4" value={this.state.content} onChange={(event)=>this.setState({content:event.target.value})} />
                    <label>Author</label>
                    <select value={this.state.author} onChange={(event)=>this.setState({author:event.target.value})}>
                        <option value="aravindh-mb">aravindh-mb</option>
                        <option value="webdevfrontend">webdevfrontend</option>
                    </select>
                    <button onClick={this.postDataHandler}>Add Post</button>
                </div>
            </React.Fragment>
        )
    }
}
export default NewPost