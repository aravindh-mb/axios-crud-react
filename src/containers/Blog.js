import React, { Component } from 'react';
import axios from 'axios';

import Post from '../components/post/post';
import FullPost from '../components/fullPost/fullPost';
import NewPost from '../components/newPost/newPost';
import './blog.css';
class Blog extends Component{
    state={
        posts:[],
        selectedId:null,
        error:false
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
           .then(response => {
                 const posts = response.slice(0,5);
                 const updatedPosts = posts.map(post =>{
                    return{
                        ...post,
                        author:"Aravindh"
                    }
                 });
                 this.setState({posts:updatedPosts});
                 console.log(response);
                })
                 .catch(error => {
                    console.log(error);
                    this.setState({error:true});
                 })
           }
postSelectHandler = (id)=>{
   this.setState({selectedId:id})
}
render(){
    let posts =<p p style={{textAlign:'center'}}>Something went wrong</p>
    if(!this.state.error){
        posts = this.state.posts.map(post => {
        return <Post
                 key={post.id}
                 title ={post.title}
                 author={post.author}
                 clicked={() => this.postSelectHandler(post.id)} />
                });
    }
    return (
        <div>
            <section className="Posts">
                {posts}
            </section>
            <section>
                <FullPost id={this.state.selectedPostId} />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
}
}

export default Blog;